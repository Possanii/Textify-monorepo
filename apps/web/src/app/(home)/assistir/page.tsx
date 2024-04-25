"use client";

import { useAssistirController } from "./useAssistirController";

export default function WatchVideo() {
  const { isPending, video } = useAssistirController();

  return (
    <div>
      {isPending || !video ? (
        <div>Loading...</div>
      ) : (
        <div>
          <video width="1920" height="1080" controls>
            <source src={video.publicURL} type="video/mp4"></source>
          </video>
          <div className="flex flex-col gap-2">
            <span>Name: {video.fileName}</span>
            <div className="flex gap-4 items-center justify-end">
              <span>Views: {video.views}</span>
              <span>likes: {video.likes}</span>
              <span>dislikes: {video.dislikes}</span>
              <span>
                Date: {new Date(video.uploadedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
