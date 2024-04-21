import { FileArray } from "express-fileupload";
import { unlinkSync } from "fs";
import { ZodError } from "zod";
import { IController, IResponse } from "../../interfaces/IController";
import { IRequest } from "../../interfaces/IRequest";
import { storageProvider } from "../../services/storage";

async function getAllPaths(
  files: FileArray,
): Promise<{ [key: string]: string[] } | void> {
  try {
    const pathsByType: { [key: string]: string[] } = {};

    for (const key in files) {
      const filesArray = files[key];
      const paths: string[] = [];

      if (Array.isArray(filesArray)) {
        await Promise.all(
          filesArray.map(async (file) => {
            const fileName = await storageProvider.upload({ file, key });
            paths.push(fileName);
          }),
        );
        pathsByType[key] = paths;
      } else {
        const fileName = await storageProvider.upload({
          file: filesArray!,
          key,
        });
        pathsByType[key] = [fileName];
      }
    }

    return pathsByType;
  } catch (error) {
    throw new Error();
  } finally {
    for (const key in files) {
      const filesArray = files[key];
      if (Array.isArray(filesArray)) {
        filesArray.map(async (file) => {
          unlinkSync(file.tempFilePath);
        });
      } else {
        unlinkSync(filesArray!.tempFilePath);
      }
    }
  }
}

export class UploadFilesController implements IController {
  async handle({ files }: IRequest): Promise<IResponse> {
    try {
      // function to upload all files to storage
      if (!files) {
        throw new Error("Files not found");
      }

      const pathsByType = await getAllPaths(files);

      if (!pathsByType || Object.keys(pathsByType).length === 0) {
        throw new Error("Something went wrong");
      }

      return {
        statusCode: 200,
        body: { pathsByType },
      };
    } catch (err) {
      if (err instanceof ZodError) {
        return {
          statusCode: 422,
          body: { error: err },
        };
      }

      return {
        statusCode: 500,
        body: { error: "Internal error" },
      };
    }
  }
}
