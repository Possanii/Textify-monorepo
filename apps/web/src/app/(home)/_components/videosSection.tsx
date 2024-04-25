"use client";

import { useRouter } from "next/navigation";
import { VideoItem } from "../../../../../../packages/ui/src/components/ui/VideoItem";
import { useVideosSectionController } from "./useVideosSectionController";

export function VideosSection() {
  const { isPending, videos } = useVideosSectionController();
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 gap-4">
      {!isPending && videos ? (
        videos.map((video) => (
          <VideoItem
            key={video._id}
            size={video.sizeInBytes}
            url={video.publicURL}
            onClick={() => router.push(`/assistir?video=${video._id}`)}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
