import { CreateVideoService } from "../../../application/services/FilesServices/CreateVideoService";

export function makeCreateVideoServices() {
  return new CreateVideoService();
}
