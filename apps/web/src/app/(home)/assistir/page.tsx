"use client";

import { Toggle } from "@ui/components/ui/toggle";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import {
  H4,
  PSmall,
} from "../../../../../../packages/ui/src/components/typography";
import { ScrollArea } from "../../../../../../packages/ui/src/components/ui/scroll-area";
import { VideosSection } from "./_components/videosSection/videosSection";
import { useAssistirController } from "./useAssistirController";

const WatchVideo: React.FC = () => {
  const {
    isPending,
    video,
    videoRef,
    likeCount,
    dislikeCount,
    toggleLike,
    toggleDislike,
  } = useAssistirController();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir video:", error);
      });
    }
  }, [video]);

  return (
    <div>
      {isPending || !video ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-4 h-full">
          <div className="h-full">
            <video ref={videoRef} width="1920" height="1080" controls autoPlay>
              <source src={video.publicURL} type="video/mp4" />
            </video>
            <div className="flex flex-col gap-2 bg-black p-4 mt-4 rounded-lg shadow-lg border border-gray-800 text-white">
              <span className="text-lg font-semibold">{video.fileName}</span>
              <div className="flex gap-4 items-center justify-end text-sm">
                <span>Visualizações: {video.views}</span>
                <Toggle variant={"like"} onClick={toggleLike}>
                  <ThumbsUp />
                  <PSmall className="ml-4">{likeCount}</PSmall>
                </Toggle>
                <Toggle variant={"dislike"} onClick={toggleDislike}>
                  <ThumbsDown />
                  <PSmall className="ml-4">{dislikeCount}</PSmall>
                </Toggle>
                <span>
                  Data de envio:{" "}
                  {new Date(video.uploadedAt).toLocaleDateString()}
                </span>
              </div>
              <H4>Transcrição:</H4>
              <ScrollArea className="h-28">
                <div className="bg-">{video.transcription}</div>
              </ScrollArea>
            </div>
          </div>
          <VideosSection />
        </div>
      )}
    </div>
  );
};

export default WatchVideo;
