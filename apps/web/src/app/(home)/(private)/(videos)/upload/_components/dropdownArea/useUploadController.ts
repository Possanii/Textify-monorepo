import { useFormContext } from "react-hook-form";
import { IUploadVideo } from "../../useUploadPageController";

export function useUploadController() {
  const {
    register,
    control,
    formState: { isSubmitting },
  } = useFormContext<IUploadVideo>();

  return {
    register,
    control,
    isSubmitting,
  };
}
