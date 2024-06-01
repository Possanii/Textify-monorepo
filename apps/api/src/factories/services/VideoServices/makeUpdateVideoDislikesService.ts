import { UpdateVideoDislikesService } from "../../../application/services/VideoServices/UpdateVideoDislikesService";

export function makeDislikeVideoService() {
  return new UpdateVideoDislikesService();
}
