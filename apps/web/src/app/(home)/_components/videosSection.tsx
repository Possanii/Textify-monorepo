"use client";

import { VideoItem } from "@ui/src/components/ui/VideoItem";
import { useRouter } from "next/navigation";
import { bytesToMegabytes } from "../../../hooks/formatBytes";
import { useVideosSectionController } from "./useVideosSectionController";

export function VideosSection() {
  const { isPending, videos } = useVideosSectionController();
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 gap-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px' }}>
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
