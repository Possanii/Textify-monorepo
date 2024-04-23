import { UploadFilesController } from "../../application/controller/StorageController/UploadFilesController";

export function makeUploadFilesController() {
  return new UploadFilesController();
}
