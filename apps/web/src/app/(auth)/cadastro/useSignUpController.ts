import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { UseAuth } from "../../../hooks/useAuth";
import { authServices } from "../../../services/auth";

const schema = z.object({
  name: z.string().min(3, "O nome deve ter 3 ou mais letras"),
  email: z.string().email("Email incorreto"),
  password: z.string().min(8, "Senha deve ter 8 dígitos"),
  confirmPassword: z.string().min(8, "Senha deve ter 8 dígitos"),
});

type formData = z.infer<typeof schema>;

export function useSignUpController() {
  const { signin } = UseAuth();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isLoading, errors },
    reset,
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: formData) => await authServices.signup(data),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      if (accessToken) {
        toast.success("Account successfully registered");
        reset();
        signin(accessToken.accessToken);
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        switch (error.response!.status) {
          case 409:
            toast.error("Email already registered");
            break;
          case 422:
            toast.error("Invalid Input");
            break;
          default:
            toast.error("Something went wrong");
            break;
        }
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
