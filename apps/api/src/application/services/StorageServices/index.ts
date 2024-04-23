import { MinioStorageProvider } from "./implementation/minio";

const providers = {
  MINIO: new MinioStorageProvider(),
};

export const storageProvider = providers["MINIO"];
