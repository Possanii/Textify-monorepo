import { UpdateVideoLikesService } from "../../../application/services/VideoServices/UpdateVideoLikesService";

export function makeDislikeVideoService() {
  return new UpdateVideoLikesService();
}
