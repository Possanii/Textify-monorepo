import { GetVideoByIdService } from "../../../application/services/FilesServices/GetVideoByIdService";

export function makeGetVideoByIdService() {
  return new GetVideoByIdService();
}
