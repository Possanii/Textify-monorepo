import { DeleteFileController } from "../../application/controller/filesController/DeleteFileController";

export function makeDeleteFileController() {
  return new DeleteFileController();
}
