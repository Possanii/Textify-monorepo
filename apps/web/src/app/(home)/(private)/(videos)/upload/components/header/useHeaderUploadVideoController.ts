import { useFormContext } from "react-hook-form";
import { IUploadVideo } from "../../useUploadPageController";

export function useHeaderUploadVideoController() {
  const { watch, reset } = useFormContext<IUploadVideo>();

  return {
    watch,
    reset,
  };
}
