import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { UseAuth } from "../../../hooks/useAuth";
import { authServices } from "../../../services/auth";

const schema = z.object({
  email: z.string().email("Email incorreto"),
  password: z.string().min(8, "Senha deve ter 8 dígitos"),
});

type formData = z.infer<typeof schema>;

export function useLoginController() {
  const { signin } = UseAuth();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isLoading, errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ email, password }: formData) =>
      await authServices.signin({ email, password }),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken.accessToken);
    } catch (err) {
      const error = err as AxiosError;
      switch (error.response!.status) {
        case 404:
          toast.error("Invalid e-mail or password");
          break;
        default:
          toast.error("Something went wrong");
          break;
      }
    }
  });

  return {
    register,
    handleSubmit,
    isLoading: isLoading || isPending,
    errors,
  };
}
