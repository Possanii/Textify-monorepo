"use client";

import { VideoItem } from "@ui/components/ui/VideoItem";
import { ScrollArea } from "@ui/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { bytesToMegabytes } from "../../../../../hooks/formatBytes";
import { useVideosSectionController } from "./useVideosSectionController";

export function VideosSection() {
  const { videos } = useVideosSectionController();
  const router = useRouter();

  return (
    <ScrollArea className="h-[800px] min-w-[370px] rounded-md bg-opacity-50 bg-black">
      {videos ? (
        videos.map((video) => (
          <VideoItem
            key={video._id}
            title={video.fileName}
            size={bytesToMegabytes(video.sizeInBytes)}
            date={new Date(video.uploadedAt)}
            url={video.publicURL}
            onClick={() => {
              router.push(`/assistir?video=${video._id}`);
            }}
          />
        ))
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </ScrollArea>
  );
}
