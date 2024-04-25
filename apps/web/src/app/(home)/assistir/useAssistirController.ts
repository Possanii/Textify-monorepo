import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { storageServices } from "../../../services/storageServices";

export function useAssistirController() {
  const searchParams = useSearchParams();

  const videoId = searchParams.get("video");

  const { data: video, isPending } = useQuery({
    queryKey: ["video", videoId],
    queryFn: async () => await storageServices.getVideoById(videoId!),
  });

  return {
    isPending,
    video,
  };
}
