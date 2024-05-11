import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { storageServices } from "../../../services/storageServices";

export function useAssistirController() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const searchParams = useSearchParams();
  const videoId = searchParams.get("video");

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  const { data: video, isPending } = useQuery({
    queryKey: ["video", videoId],
    queryFn: async () => await storageServices.getVideoById(videoId!),
  });

  useEffect(() => {
    if (video) {
      setLikeCount(video.likes);
      setDislikeCount(video.dislikes);
    }
  }, [video]);

  const toggleLike = () => {
    if (userLiked) {
      setLikeCount(likeCount - 1);
    } else {
      if (userDisliked) {
        setDislikeCount(dislikeCount - 1);
        setUserDisliked(false);
      }
      setLikeCount(likeCount + 1);
    }
    setUserLiked(!userLiked);
  };

  const toggleDislike = () => {
    if (userDisliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      if (userLiked) {
        setLikeCount(likeCount - 1);
        setUserLiked(false);
      }
      setDislikeCount(dislikeCount + 1);
    }
    setUserDisliked(!userDisliked);
  };

  return {
    isPending,
    video,
    videoRef,
    likeCount,
    dislikeCount,
    toggleLike,
    toggleDislike,
  };
}
