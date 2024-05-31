import { UpdateVideoLikesService } from "../../../application/services/VideoServices/UpdateVideoLikesService";

export function makeUpdateVideoLikesService() {
  return new UpdateVideoLikesService();
}
