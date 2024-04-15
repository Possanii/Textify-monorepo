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

type formData = z.infer<typeof schema>;

export function useUploadController() {
  const { register, control } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    control,
  };
}
