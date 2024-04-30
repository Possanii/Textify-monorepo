import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IVideo } from "../../../../../interfaces/IVideo";
import { storageServices } from "../../../../../services/storageServices";

export function useVideosSectionController() {
  const queryClient = useQueryClient();
  const [videos, setVideos] = useState<IVideo[] | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosOnCache = queryClient.getQueryData<IVideo[]>([
        "videos",
        "all",
      ]);
      if (videosOnCache) {
        setVideos(videosOnCache);
      } else {
        try {
          const data = await storageServices.getAllVideosFromMongo();
          queryClient.setQueryData(["videos", "all"], data); // Update cache
          setVideos(data);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      }
    };

    fetchVideos();
  }, [queryClient]);

  return {
    videos,
  };
}
