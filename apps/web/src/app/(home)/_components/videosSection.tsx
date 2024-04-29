"use client";

import { VideoItem } from "@ui/src/components/ui/VideoItem";
import { useRouter } from "next/navigation";
import { useVideosSectionController } from "./useVideosSectionController";

function bytesToMegabytes(bytes: number): number {
  return parseFloat((bytes / 1048576).toFixed(2));
}

export function VideosSection() {
  const { isPending, videos } = useVideosSectionController();
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 gap-4">
      {!isPending && videos ? (
        videos.map((video) => (
          <VideoItem
            key={video._id}
            title={video.fileName}
            size={bytesToMegabytes(video.sizeInBytes)}
            date={new Date(video.uploadedAt)}
            url={video.publicURL}
            onClick={() => router.push(`/assistir?video=${video._id}`)}
          />
        ))
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
}
