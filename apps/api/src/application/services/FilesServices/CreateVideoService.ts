import { IVIdeo } from "../../interfaces/IVideo";
import { videoModal } from "../../schemas/videoSchema";

export class CreateVideoService {
  async execute(videoInfo: Partial<IVIdeo>): Promise<void> {
    const video = await videoModal.create(videoInfo);

    if (!video) throw new Error("Could not create video");

    return;
  }
}
