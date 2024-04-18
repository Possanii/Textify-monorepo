import { H4 } from "@ui/src/components/typography";
import { Button } from "@ui/src/components/ui/Button";
import { useHeaderUploadVideoController } from "./useHeaderUploadVideoController";

export function HeaderUploadVideo() {
  const { watch, reset } = useHeaderUploadVideoController();

  console.log(watch("videos"));

  return (
    <header className="flex justify-between h-8">
      <H4>Upload</H4>
      <div className="max-h-8 flex gap-4">
        <Button
          className="h-full underline text-red-500 dark:hover:bg-red-500 dark:hover:text-black"
          variant={"ghost"}
          disabled={
            watch("videos") !== undefined && watch("videos").length > 0
              ? false
              : true
          }
          onClick={() => reset()}
        >
          Limpar lista
        </Button>
        <Button
          className="h-full"
          disabled={
            watch("videos") !== undefined && watch("videos").length > 0
              ? false
              : true
          }
        >
          Enviar todos
        </Button>
      </div>
    </header>
  );
}
