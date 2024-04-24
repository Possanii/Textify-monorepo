import { GetAllPublicVideosService } from "../../../application/services/FilesServices/GetAllPublicVideosService";

export function makeGetAllPublicVideosService() {
  return new GetAllPublicVideosService();
}
