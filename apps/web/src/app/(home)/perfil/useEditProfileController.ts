import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { UseAuth } from "../../../hooks/useAuth";
import { IUser } from "../../../interfaces/IUser";
import { authServices } from "../../../services/auth";

const schema = z
  .object({
    //file: z.instanceof(File),
    name: z.string(),
    email: z.string().email("Email incorreto"),
    password: z.union([
      z.string().min(8, "Senha deve ter 8 dígitos"),
      z.string().refine((value) => value === ""),
    ]),
    newPassword: z.union([
      z.string().min(8, "Senha deve ter no minimo 8 digitos"),
      z.string().refine((value) => value === ""),
    ]),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      } else {
        return true;
      }
    },
    { path: ["newPassword"], message: "Informe a nova senha" },
  );

type formData = z.infer<typeof schema>;

export function useEditProfileController() {
  const { signin } = UseAuth();
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData<{ userInfo: IUser }>(["user", "me"]);

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isLoading, errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.userInfo.name,
      email: user?.userInfo.email,
      password: undefined,
      newPassword: undefined,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ name, email, password, newPassword }: formData) =>
      await authServices.updateprofile({ name, email, password, newPassword }),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success("Perfil atualizado");
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        switch (error.response.status) {
          case 404:
            toast.error("Informações inválidas");
            break;
          default:
            toast.error("Algo deu errado. Tente novamente mais tarde.");
            break;
        }
      } else {
        toast.error("Algo deu errado. Tente novamente mais tarde.");
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
