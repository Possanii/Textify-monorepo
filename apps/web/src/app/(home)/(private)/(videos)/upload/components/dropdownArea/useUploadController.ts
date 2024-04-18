import { useFormContext } from "react-hook-form";

export function useUploadController() {
  const { register, control } = useFormContext();

  return {
    register,
    control,
  };
}
