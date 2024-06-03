import { GetPresignedURLController } from "../../application/controller/StorageController/GetPresignedURLController";

export function makeGetPresignedURLController() {
  return new GetPresignedURLController();
}
