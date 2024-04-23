import { DeleteFileController } from "../../application/controller/StorageController/DeleteFileController";

export function makeDeleteFileController() {
  return new DeleteFileController();
}
