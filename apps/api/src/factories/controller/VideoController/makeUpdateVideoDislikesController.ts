import { UpdateVideoDislikesController } from "../../../application/controller/VideoController/UpdateVideoDislikesController";
import { makeDislikeVideoService } from "../../services/VideoServices/makeUpdateVideoDislikesService";

export function makeDislikeVideoController() {
  const dislikeVideoService = makeDislikeVideoService();

  return new UpdateVideoDislikesController(dislikeVideoService);
}
