import { PMedium, PSmall } from "../typography";

interface IVideoItem {
  url: string;
  size: number;
  onClick(): void;
}

export function VideoItem({ url, size, onClick }: IVideoItem) {
  return (
    <div
      className="flex gap-4 p-4 justify-center items-center border border-black bg-white w-full cursor-pointer"
      role="button"
      onClick={onClick}
    >
      <video className="rounded max-w-[160px] img-thumbnail">
        <source src={url} type="video/mp4"></source>
      </video>
      <div className="flex flex-col justify-between items-center">
        <PMedium>TITLE</PMedium>
        <PSmall>{size} MB</PSmall>
      </div>
    </div>
  );
}
