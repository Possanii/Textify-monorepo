import { UploadedFile } from "express-fileupload";
import { BucketItemStat } from "minio";

export type IStorageProvider = {
  upload({ file }: { file: UploadedFile }): Promise<string>;
  createUrlStream({ path }: { path: string }): Promise<string>;
  getMetadata({ path }: { path: string }): Promise<BucketItemStat>;
  delete(path: string): Promise<void>;
};
