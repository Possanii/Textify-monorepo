import { GetFileNameWithoutHashService } from "../../application/services/FilesServices/GetFileNameWithoutHashService";

export function makeGetFileNameWithoutHashService() {
  return new GetFileNameWithoutHashService();
}
