import { Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PSmall } from "../typography";
import { Badge } from "./Badge";
import { Modal } from "./Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface ITableImages {
  images?: File[];
  onFilesChange(files: File[]): void;
}

export function TableImages({ images, onFilesChange }: ITableImages) {
  const [imagePreview, setImagePreview] = useState<
    { url: string; name: string; file: File }[] | undefined
  >(undefined);
  const [showVideoZoom, setShowVideoZoom] = useState<{
    isOpen: boolean;
    videoURL: string | null;
  }>({ isOpen: false, videoURL: null });

  const removeImage = useCallback(
    (url: string) => {
      const newArray = imagePreview!.filter((file) => file.url !== url);
      setImagePreview(newArray);
      onFilesChange(newArray.map((file) => file.file));
    },
    [imagePreview],
  );

  useEffect(() => {
    if (images) {
      images.map((image) => {
        const reader = new FileReader();

        reader.onabort = () => toast.error("File reading was aborted");
        reader.onerror = () => toast.error("File reading has failed");
        reader.onload = () => {
          setImagePreview((prev) => {
            if (prev) {
              // validate if the user is trying to upload duplicate files
              if (prev.some((item) => item.url === reader.result)) {
                return [...prev];
              } else {
                return [
                  ...prev,
                  {
                    url: reader.result as string,
                    name: image.name,
                    file: image,
                  },
                ];
              }
            } else {
              return [
                { url: reader.result as string, name: image.name, file: image },
              ];
            }
          });
        };
        reader.readAsDataURL(image);
      });
    }
  }, [images]);

  if (images && images.length > 0 && imagePreview) {
    return (
      <>
        <Modal
          open={showVideoZoom.isOpen}
          onClose={() => setShowVideoZoom({ isOpen: false, videoURL: null })}
          className="max-w-[1920px] w-auto"
        >
          <video width="1920" height="1080" controls autoPlay>
            <source
              src={showVideoZoom.videoURL as string}
              type="video/mp4"
            ></source>
          </video>
        </Modal>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]">Vídeo</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="max-h-[520px] overflow-y-auto">
              {imagePreview.map((video) => (
                <TableRow key={video.url} className="table-row">
                  <TableCell className="flex gap-8 justify-start items-center">
                    <video
                      preload="metadata"
                      className="rounded max-w-[160px] img-thumbnail cursor-zoom-in"
                      onClick={() =>
                        setShowVideoZoom({
                          isOpen: true,
                          videoURL: video.url,
                        })
                      }
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                    <PSmall>{video.name}</PSmall>
                  </TableCell>
                  <TableCell className="w-28 max-w-28">
                    <Select>
                      <SelectTrigger className="w-full dark:bg-transparent dark:text-black">
                        <SelectValue
                          placeholder="Categoria"
                          className="truncate"
                        />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-white dark:text-black ">
                        <SelectItem value="música">Música</SelectItem>
                        <SelectItem value="esporte">Esporte</SelectItem>
                        <SelectItem value="entretenimento">
                          Entretenimento
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="w-10">
                    <PSmall>{`${(video.file.size / (1024 * 1024)).toFixed(2)} MB`}</PSmall>
                  </TableCell>
                  <TableCell className="w-10">
                    <Badge className="bg-green-500">Ready</Badge>
                  </TableCell>
                  <TableCell className="w-10">
                    <div
                      className="flex justify-end p-1 bg-white text-red-500 rounded-full cursor-pointer"
                      role="button"
                      onClick={() => removeImage(video.url)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
}
