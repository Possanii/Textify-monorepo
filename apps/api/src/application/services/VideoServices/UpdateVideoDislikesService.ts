import { videoModal } from "../../schemas/videoSchema";

export class UpdateVideoDislikesService {
  async execute(videoId: string): Promise<{ likes: number, dislikes: number }> {
    const video = await videoModal.findById(videoId);
    if (!video) {
      throw new Error('Video not found');
    }

    video.dislikes += 1;
    await video.save();

    return { likes: video.likes, dislikes: video.dislikes };
  }
}
