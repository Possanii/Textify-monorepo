import { UploadedFile } from "express-fileupload";

export type IStorageProvider = {
  upload({ file }: { file: UploadedFile }): Promise<string>;
  createUrlStream({ path }: { path: string }): Promise<string>;
  delete(path: string): Promise<void>;
};
