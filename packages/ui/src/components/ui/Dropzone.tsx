import { UploadCloud } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { PSmall } from "../typography";
import { ScrollArea } from "./scroll-area";

interface IDropzone {
  maxSize?: number;
  videos?: File[];
  onFilesChange(): void;
}

export function Dropzone({ maxSize = 15, videos, onFilesChange }: IDropzone) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        if (videos) {
          // validate if the user is trying to upload duplicate files
          if (videos.some((item) => item.name === file.name)) {
            toast.error("Duplicate video");
          } else if (
            acceptedFiles.some((acceptedFile) =>
              videos.some((video) => video.name === acceptedFile.name),
            )
          ) {
            onFilesChange([...videos, file]);
          } else {
            onFilesChange([...videos, ...acceptedFiles]);
          }
        } else {
          onFilesChange([...acceptedFiles]);
        }
      });
    },
    [videos],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize: 1024 * 1024 * maxSize,
    });

  return (
    <div className="flex flex-col gap-4">
      <div
        {...getRootProps()}
        className="bg-gray-100 border border-dashed border-blue-dark flex flex-col p-10 items-center justify-center max-h-36 cursor-pointer"
      >
        <input {...getInputProps()} accept="video/*" />
        <>
          <UploadCloud />
          {isDragActive ? (
            <PSmall className="select-none">Drop your file here.</PSmall>
          ) : (
            <PSmall className="select-none">
              Drop files here or click to upload.
            </PSmall>
          )}
        </>
      </div>
      {fileRejections && fileRejections.length > 0 && (
        <ScrollArea className="h-[80px] rounded-md border p-4">
          {fileRejections.map((files) => {
            if (files.errors[0]!.code === "file-too-large") {
              return (
                <PSmall key={files.file.name} className="text-red-500">
                  [ {files.file.name} ] - File is large than {maxSize} MB
                </PSmall>
              );
            }
          })}
        </ScrollArea>
      )}
    </div>
  );
}
