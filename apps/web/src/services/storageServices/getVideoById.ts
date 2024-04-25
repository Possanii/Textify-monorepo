import { IVideo } from "../../interfaces/IVideo";
import { axiosClient } from "../../lib/axiosClient";

export async function getVideoById(videoId: string): Promise<IVideo> {
  const response = await axiosClient.get<{ video: IVideo }>(
    `/video/${videoId}`,
  );

  return response.data.video;
}
