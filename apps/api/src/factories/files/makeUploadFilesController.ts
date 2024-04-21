import { UploadFilesController } from "../../application/controller/filesController/UploadFilesController";

export function makeUploadFilesController() {
  return new UploadFilesController();
}
