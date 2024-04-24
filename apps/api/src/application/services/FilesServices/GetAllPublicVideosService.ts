import { IVIdeo } from "../../interfaces/IVideo";
import { videoModal } from "../../schemas/videoSchema";

export class GetAllPublicVideosService {
  async execute(): Promise<IVIdeo[]> {
    const videos = videoModal.find({
      type: "public",
    });

    return videos;
  }
}
