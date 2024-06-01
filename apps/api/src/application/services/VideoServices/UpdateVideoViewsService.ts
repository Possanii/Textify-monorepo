import { videoModal } from "../../schemas/videoSchema";

export class UpdateVideoViewsService {
  async execute(videoId: string): Promise<{ likes: number, dislikes: number, views: number }> {
    const video = await videoModal.findById(videoId);
    if (!video) {
      throw new Error('Video not found');
    }

    video.views += 1;
    await video.save();

    return { likes: video.likes, dislikes: video.dislikes, views: video.views };
  }
}
