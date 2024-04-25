import { IVideo } from "../../interfaces/IVideo";
import { videoModal } from "../../schemas/videoSchema";

export class GetVideoByIdService {
  async execute(videoId: string): Promise<IVideo> {
    const video = videoModal.findById(videoId);

    if (!video || video === null) {
      throw new Error("Video not found");
    }

    return video;
  }
}
