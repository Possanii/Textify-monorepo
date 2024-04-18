import { useFormContext } from "react-hook-form";
import { IUploadVideo } from "../../useUploadPageController";

export function useUploadController() {
  const { register, control } = useFormContext<IUploadVideo>();

  return {
    register,
    control,
  };
}
