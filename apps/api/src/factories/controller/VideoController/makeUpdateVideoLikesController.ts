import { UpdateVideoLikesController } from "../../../application/controller/VideoController/UpdateVideoLikesController";
import { makeUpdateVideoLikesService } from "../../services/VideoServices/makeUpdateVideoLikesService";

export function makeLikeVideoController() {
  const likeVideoService =  makeUpdateVideoLikesService();

  return new UpdateVideoLikesController(likeVideoService);
}
