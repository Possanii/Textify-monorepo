import { useMutation } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { storageServices } from "../../../../../../../services/storageServices";
import { IUploadVideo } from "../../useUploadPageController";

export function useHeaderUploadVideoController() {
  const {
    watch,
    reset,
    formState: { isSubmitting },
    handleSubmit: UploadVideoHandleSubmit,
  } = useFormContext<IUploadVideo>();

  const { mutateAsync: UploadVideoMutateAsync } = useMutation({
    mutationFn: async (formData: FormData) =>
      await storageServices.uploadFileToStorage(formData),
  });

  const handleSubmit = UploadVideoHandleSubmit(async (data: IUploadVideo) => {
    try {
      const formData = new FormData();

      for (const file of data.videos) {
        formData.append(file.name + ":public", file);
      }

      await UploadVideoMutateAsync(formData);

      reset();

      toast.success("Video enviado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado. Sinto muito. Tente novamente mais tarde.");
    }
  });

  return {
    watch,
    reset,
    isSubmitting,
    handleSubmit,
  };
}
