import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { UseAuth } from "../../../hooks/useAuth";
import { authServices } from "../../../services/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";


const schema = z.object({
  //file: z.instanceof(File),
  name: z.string(),
  email: z.string().email("Email incorreto"),
  password: z.string().min(8, "Senha deve ter 8 dígitos"),
  newPassword: z.string().min(8, "Senha deve ter no minimo 8 digitos")
});

type formData = z.infer<typeof schema>;

export default function Perfil(){
  const router = useRouter();
  const {isSignedIn} = UseAuth();


  useEffect(() => {
    if (isSignedIn){
      router.replace('/login');
    }
  }, [isSignedIn]
)
}

export function useEditProfileController() {
  const { signin } = UseAuth();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { isLoading, errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({name, email, password, newPassword}: formData) =>
      await authServices.updateprofile({name, email, password, newPassword}),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    if (data.password === data.newPassword) {
      toast.error("A nova senha não pode ser a mesma que a senha atual.");
      return;
    }
  
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
      toast.success("Perfil atualizado");
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        switch (error.response.status) {
          case 404:
            toast.error("Invalid username, email or password");
            break;
          default:
            toast.error("Something went wrong");
            break;
        }
      } else {
        toast.error("Something went wrong");
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
