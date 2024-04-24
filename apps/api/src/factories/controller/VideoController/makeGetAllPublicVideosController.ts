import { GetAllPublicVideosController } from "../../../application/controller/FilesController/GetAllPublicVideosController";
import { makeGetAllPublicVideosService } from "../../services/VideoServices/makeGetAllPublicVideosService";

export function makeGetAllPublicVideosController() {
  const getAllPublicVideosController = makeGetAllPublicVideosService();

  return new GetAllPublicVideosController(getAllPublicVideosController);
}
