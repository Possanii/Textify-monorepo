import { convertMP4toMP3 } from "@textify/ffmpeg";
import { UploadedFile } from "express-fileupload";
import { BucketItemStat, Client } from "minio";
import crypto from "node:crypto";
import { readFileSync, unlinkSync } from "node:fs";
import { env } from "../../../config/env";
import { IStorageProvider } from "../types/IStorage-Provider";

export class MinioStorageProvider implements IStorageProvider {
  client: Client;

  constructor() {
    this.client = new Client({
      endPoint: env.STORAGE_ENDPOINT,
      port: env.STORAGE_PORT,
      useSSL: false,
      accessKey: env.STORAGE_ACCESS_KEY_ID,
      secretKey: env.STORAGE_SECRET_ACCESS_KEY,
      region: env.STORAGE_REGION,
      pathStyle: true,
    });
  }

  async getPresignedURL({ name }: { name: string }): Promise<string> {
    // Create a bucket if it doesn't exist
    if (!(await this.client.bucketExists(env.STORAGE_BUCKET))) {
      await this.client.makeBucket(env.STORAGE_BUCKET, env.STORAGE_REGION);
    }

    const hashedName =
      "public/" +
      Date.now() +
      "-" +
      crypto.randomBytes(16).toString("hex") +
      "-" +
      name;

    return new Promise((resolve, reject) => {
      this.client.presignedPutObject(
        env.STORAGE_BUCKET,
        hashedName,
        (err, url) => {
          if (err)
            reject(new Error(`Erro ao gerar URL pré-assinada: ${err.message}`));
          resolve(url as string);
        },
      );
    });
  }

  async upload({
    file,
    key,
  }: {
    file: UploadedFile;
    key: string;
  }): Promise<string> {
    try {
      // Create a bucket if it doesn't exist
      if (!(await this.client.bucketExists(env.STORAGE_BUCKET))) {
        await this.client.makeBucket(env.STORAGE_BUCKET, env.STORAGE_REGION);
      }

      const buffer = readFileSync(file.tempFilePath as string);

      const hashedMp4Name =
        key.split(":")[1]! +
        "/" +
        Date.now() +
        "-" +
        crypto.randomBytes(16).toString("hex") +
        "-" +
        file.name;

      const outputTempFilePath = await convertMP4toMP3(
        file.tempFilePath,
        file.name.split(".")[0]! + ".mp3",
      );

      const hashedMp3Name = "audio/" + hashedMp4Name.split(".")[0]! + ".mp3";

      const bufferMp3 = readFileSync(outputTempFilePath);

      await this.client.putObject(env.STORAGE_BUCKET, hashedMp4Name, buffer);
      await this.client.putObject(env.STORAGE_BUCKET, hashedMp3Name, bufferMp3);

      unlinkSync(outputTempFilePath);

      return hashedMp4Name;
    } catch (error) {
      throw new Error("Error uploading file");
    }
  }

  async createUrlStream({ path }: { path: string }): Promise<string> {
    try {
      const url = `http://${env.STORAGE_ENDPOINT}:${env.STORAGE_PORT}/${env.STORAGE_BUCKET}/${path}`;

      return url;
    } catch (error) {
      throw new Error();
    }
  }

  async getMetadata({ path }: { path: string }): Promise<BucketItemStat> {
    try {
      const stats = await this.client.statObject(env.STORAGE_BUCKET, path);

      return stats;
    } catch (error) {
      throw new Error("Error deleting file");
    }
  }

  async getFile({ path }: { path: string }): Promise<string> {
    const file = await new Promise((resolve, reject) => {
      this.client.fGetObject(
        env.STORAGE_BUCKET,
        path,
        "/tmp/" + path,
        function (err) {
          if (err) reject(new Error());
          resolve("/tmp/" + path);
        },
      );
    });
    return file as string;
  }

  async delete(path: string): Promise<void> {
    try {
      await this.client.removeObject(env.STORAGE_BUCKET, path);
    } catch (error) {
      throw new Error("Error deleting file");
    }
  }
}
