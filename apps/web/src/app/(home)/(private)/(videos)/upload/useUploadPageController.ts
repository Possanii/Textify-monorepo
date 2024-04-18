import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  videos: z.array(
    z
      .instanceof(File)
      .refine(
        (file) => file.size < 15 * 1024 * 1024,
        "File must be less than 15 MB",
      ),
  ),
});

export type IUploadVideo = z.infer<typeof schema>;

export function useUploadPageController() {
  const useFormMethods = useForm<IUploadVideo>({
    resolver: zodResolver(schema),
  });

  return {
    useFormMethods,
  };
}
