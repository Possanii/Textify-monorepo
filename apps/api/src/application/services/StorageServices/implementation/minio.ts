import { UploadedFile } from "express-fileupload";
import { BucketItemStat, Client } from "minio";
import crypto from "node:crypto";
import { readFileSync } from "node:fs";
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

      const hashedName =
        key.split(":")[1]! +
        "/" +
        Date.now() +
        "-" +
        crypto.randomBytes(16).toString("hex") +
        "-" +
        file.name;

      await this.client.putObject(env.STORAGE_BUCKET, hashedName, buffer);

      return hashedName;
    } catch (error) {
      throw new Error("Error uploading file");
    }
  }

  async createUrlStream({ path }: { path: string }): Promise<string> {
    try {
      const url = await this.client
        .presignedUrl(
          "GET",
          env.STORAGE_BUCKET,
          path,
          99999999999999999999999999999999999999999999,
        )
        .then();

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

  async delete(path: string): Promise<void> {
    try {
      await this.client.removeObject(env.STORAGE_BUCKET, path);
    } catch (error) {
      throw new Error("Error deleting file");
    }
  }
}
