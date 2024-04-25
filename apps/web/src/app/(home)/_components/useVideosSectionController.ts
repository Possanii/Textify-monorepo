import { useQuery } from "@tanstack/react-query";
import { storageServices } from "../../../services/storageServices";

export function useVideosSectionController() {
  const { data: videos, isPending } = useQuery({
    queryKey: ["videos", "all"],
    queryFn: async () => await storageServices.getAllVideosFromMongo(),
  });

  return {
    isPending,
    videos,
  };
}
