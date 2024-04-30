"use client";

import { Toggle } from "@ui/components/ui/toggle";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { PSmall } from "../../../../../../packages/ui/src/components/typography";
import { VideosSection } from "./_components/videosSection/videosSection";
import { useAssistirController } from "./useAssistirController";

export default function WatchVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPending, video } = useAssistirController();

  // função para começar o vídeo com 1 segundo. Trazendo uma thumbnail
  useEffect(() => {
    const setStartTime = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 1;
        videoRef.current.autoplay = true;
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", setStartTime);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadedmetadata", setStartTime);
      }
    };
  }, [video]);

  return (
    <div>
      {isPending || !video ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-4 h-full">
          <div className="h-full">
            <video ref={videoRef} width="1920" height="1080" controls>
              <source src={video.publicURL} type="video/mp4"></source>
            </video>
            <div className="flex flex-col gap-2 bg-white px-4">
              <span>{video.fileName}</span>
              <div className="flex gap-4 items-center justify-end">
                <span>Visualizações: {video.views}</span>
                <Toggle variant={"like"}>
                  <ThumbsUp />
                  <PSmall className="ml-4">{video.likes}</PSmall>
                </Toggle>
                <Toggle variant={"default"}>
                  <ThumbsDown />
                  <PSmall className="ml-4">{video.dislikes}</PSmall>
                </Toggle>
                <span>
                  Data de envio:{" "}
                  {new Date(video.uploadedAt).toLocaleDateString()}
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
