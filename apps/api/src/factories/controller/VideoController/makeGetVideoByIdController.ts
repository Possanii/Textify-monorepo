import { GetVideoByIdController } from "../../../application/controller/FilesController/GetVideoByIdController";
import { makeGetVideoByIdService } from "../../services/VideoServices/makeGetVideoByIdService";

export function makeGetVideoByIdController() {
  const getVideoByIdService = makeGetVideoByIdService();

  return new GetVideoByIdController(getVideoByIdService);
}
