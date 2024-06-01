import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { axiosClient } from "../../../lib/axiosClient";
import { storageServices } from "../../../services/storageServices";
import { toast } from "sonner";

export function useAssistirController() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const searchParams = useSearchParams();
  const videoId = searchParams.get("video");
  const queryClient = useQueryClient();

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  const { data: video, isLoading } = useQuery({
    queryKey: ["video", videoId],
    queryFn: async () => await storageServices.getVideoById(videoId!),
    enabled: !!videoId,
  });

  useEffect(() => {
    if (video) {
      setLikeCount(video.likes);
      setDislikeCount(video.dislikes);
    }
  }, [video]);

  const likeMutation = useMutation({
    mutationFn: async () => {
      console.log(`Enviando requisição do like para /video/${videoId}/like`);
      await axiosClient.post(`/video/${videoId}/like`);
    },
    onSuccess: () => {
      if (videoId) {
        queryClient.invalidateQueries({ queryKey: ["video", videoId] });
      }
      //toast.success("Video curtido");
    },
    onError: (error) => {
      console.error("Error liking the video:", error);
      toast.error("Failed to like the video");
    },
  });

  const dislikeMutation = useMutation({
    mutationFn: async () => {
      console.log(`Enviando requisição do dislike para /video/${videoId}/dislike`);
      await axiosClient.post(`/video/${videoId}/dislike`);
    },
    onSuccess: () => {
      if (videoId) {
        queryClient.invalidateQueries({ queryKey: ["video", videoId] });
      }
      //toast.success("Video descurtido");
    },
    onError: (error) => {
      console.error("Error disliking the video:", error);
      toast.error("Failed to dislike the video");
    },
  });

    const viewMutation = useMutation({
      mutationFn: async () => {
        console.log(`Enviando requisição da view para /video/${videoId}/view`);
        await axiosClient.post(`/video/${videoId}/view`);
      },
      onSuccess: () => {
        if (videoId) {
          queryClient.invalidateQueries({ queryKey: ["video", videoId] });
        }
      },
      onError: (error) => {
        console.error("Error registering view:", error);
      },
    });
  
    const handlePlay = async () => {
      try {
        await viewMutation.mutateAsync();
      } catch (error) {
        console.error("Error registering view:", error);
      }
    };
  
    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.addEventListener("play", handlePlay);
        return () => {
          videoElement.removeEventListener("play", handlePlay);
        };
      }
    }, [videoRef, videoId]);

  const toggleLike = async () => {
    try {
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
      await likeMutation.mutateAsync();
    } catch (error) {
      console.error("Error liking the video:", error);
    }
  };

  const toggleDislike = async () => {
    try {
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
      await dislikeMutation.mutateAsync();
    } catch (error) {
      console.error("Error disliking the video:", error);
    }
  };

  return {
    isPending: isLoading,
    video,
    videoRef,
    likeCount,
    dislikeCount,
    toggleLike,
    toggleDislike,
  };
}
