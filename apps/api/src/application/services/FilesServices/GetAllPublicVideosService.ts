import { IVideo } from "../../interfaces/IVideo";
import { videoModal } from "../../schemas/videoSchema";

export class GetAllPublicVideosService {
  async execute(): Promise<IVideo[]> {
    const videos = videoModal.find({
      type: "public",
    });

    return videos;
  }
}
