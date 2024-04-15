import { H4 } from "@ui/src/components/typography";
import { Button } from "@ui/src/components/ui/Button";
import { UploadSessionComponent } from "./uploadSession";

export default function UploadVideo() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between h-8">
        <H4>Upload</H4>
        <div className="max-h-8 flex gap-4">
          <Button
            className="h-full underline text-red-500 dark:hover:bg-red-500 dark:hover:text-black"
            variant={"ghost"}
          >
            Limpar lista
          </Button>
          <Button className="h-full">Enviar todos</Button>
        </div>
      </header>
      <UploadSessionComponent />
    </div>
  );
}
