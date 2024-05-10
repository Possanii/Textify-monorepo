// "use client";

import { useState, useEffect, useRef } from "react";
import { Toggle } from "@ui/components/ui/toggle";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { PSmall } from "../../../../../../packages/ui/src/components/typography";
import { Toggle } from "@ui/components/ui/toggle";
import { sendLikeDislike } from '../../../../../api/src/server/APIClientVideo/apiClientVideo';
import { IVideo } from '../../../../../api/src/application/interfaces/IVideo';
import { useAssistirController } from './useAssistirController';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { VideosSection } from './_components/videosSection/videosSection'; // Supõe-se que VideosSection é importado corretamente

const WatchVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPending, video } = useAssistirController();

  // Estados para likes e dislikes e para controle de estado de like/dislike do usuário
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  // Atualizar contadores com dados do vídeo
  useEffect(() => {
    if (video) {
      setLikeCount(video.likes);
      setDislikeCount(video.dislikes);
    }
  }, [video]);

  // Funções de toggle para likes e dislikes
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

  return (
    <div>
      {isPending || !video ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-4 h-full">
          <div className="h-full">
            <video ref={videoRef} width="1920" height="1080" controls>
              <source src={video.publicURL} type="video/mp4" />
            </video>
            <div className="flex flex-col gap-2 bg-black/0 p-4 mt-4 rounded-lg shadow-lg border border-gray-800 text-white">
              <span className="text-lg font-semibold">{video.fileName}</span>
              <div className="flex gap-4 items-center justify-end text-sm">
                <span>Visualizações: {video.views}</span>
                <Toggle variant={"like"} onClick={toggleLike}>
                  <ThumbsUp />
                  <PSmall className="ml-4">{likeCount}</PSmall>
                </Toggle>
                <Toggle variant={"default"} onClick={toggleDislike}>
                  <ThumbsDown />
                  <PSmall className="ml-4">{dislikeCount}</PSmall>
                </Toggle>
                <span>
                  Data de envio: {new Date(video.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <VideosSection />
        </div>
      )}
    </div>
  );
}
