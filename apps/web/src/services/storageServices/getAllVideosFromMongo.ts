import { IVideo } from "../../interfaces/IVideo";
import { axiosClient } from "../../lib/axiosClient";

export async function getAllVideosFromMongo(): Promise<IVideo[]> {
  const response = await axiosClient.get<{ videos: IVideo[] }>("/video/all");

  return response.data.videos;
}
