"use client";

import { Toggle } from "@ui/components/ui/toggle";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import {
  H4,
  PSmall,
} from "../../../../../../packages/ui/src/components/typography";
import { ScrollArea } from "../../../../../../packages/ui/src/components/ui/scroll-area";
import { VideosSection } from "./_components/videosSection/videosSection"; // Supõe-se que VideosSection é importado corretamente
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

  return (
    <div className="min-h-screen bg-zinc-90 text-white p-6">
      {isPending || !video ? (
        <div className="flex justify-center items-center h-full">
          <span className="text-xl">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col flex-grow">
            <video
              ref={videoRef}
              width="1920"
              height="1080"
              controls
              className="rounded-lg shadow-lg mb-4"
            >
              <source src={video.publicURL} type="video/mp4" />
            </video>
            <div className="flex flex-col gap-2 bg-zinc-90 p-6 mt-4 rounded-lg shadow-lg border border-gray-800">
              <span className="text-xl font-semibold">{video.fileName}</span>
              <div className="flex gap-4 items-center justify-between text-sm">
                <span>Visualizações: {video.views}</span>
                <div className="flex gap-4 items-center">
                  <Toggle variant={"like"} onClick={toggleLike}>
                    <ThumbsUp className="text-gray-400" />
                    <PSmall className="ml-2">{likeCount}</PSmall>
                  </Toggle>
                  <Toggle variant={"dislike"} onClick={toggleDislike}>
                    <ThumbsDown className="text-gray-400" />
                    <PSmall className="ml-2">{dislikeCount}</PSmall>
                  </Toggle>
                </div>
                <span>
                  Data de envio:{" "}
                  {new Date(video.uploadedAt).toLocaleDateString()}
                </span>
              </div>
              <H4 className="mt-4">Transcrição:</H4>
              <ScrollArea className="h-28 p-2 mt-2 bg-zinc-90 rounded-lg">
                <div>{video.transcription}</div>
              </ScrollArea>
            </div>
          </div>
          <div className="min-w-[370px] rounded-md bg-zinc-90 p-4 shadow-lg">
            <VideosSection />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchVideo;
