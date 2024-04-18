import { useFormContext } from "react-hook-form";
import { IUploadVideo } from "../../useUploadPageController";

export function useHeaderUploadVideoController() {
  const { watch } = useFormContext<IUploadVideo>();

  return {
    watch,
  };
}
