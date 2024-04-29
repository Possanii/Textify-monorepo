import { useEffect, useRef } from "react";
import { PMedium, PSmall } from "../typography";

interface IVideoItem {
  url: string;
  title: string;
  size: number;
  date: Date;
  startTime?: number;
  onClick(): void;
}

export function VideoItem({
  url,
  title,
  size,
  date,
  startTime = 1,
  onClick,
}: IVideoItem) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // função para começar o vídeo com 1 segundo. Trazendo uma thumbnail
  useEffect(() => {
    const setStartTime = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = startTime;
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
  }, [startTime]);

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center border border-black bg-white cursor-pointer max-w-[360px] rounded-md p-1"
      role="button"
      onClick={onClick}
    >
      <video ref={videoRef} className="rounded w-full img-thumbnail">
        <source src={url} type="video/mp4"></source>
      </video>
      <div className="flex flex-col justify-between items-center w-full">
        <PMedium className="w-full">{title}</PMedium>
        <div className="flex justify-between w-full">
          <PSmall>{date.toLocaleDateString()}</PSmall>
          <PSmall>{size} MB</PSmall>
        </div>
      </div>
    </div>
  );
}
