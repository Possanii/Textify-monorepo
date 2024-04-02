import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(3,"O nome deve ter 3 ou mais letras"),
    email: z.string().email("Email incorreto"),
    password: z.string().min(8, "Senha deve ter 8 digitos"),
    confirmPassword: z.string().min(8, "Senha deve ter 8 digitos"),
})

type formData = z.infer<typeof schema>

export function useSignUpController(){
    
    const {register, handleSubmit:hookFormHandleSubmit, formState:{isLoading, errors}} = useForm<formData>({
        resolver: zodResolver(schema),
    });
    

const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data)
})

    return {
        register,
        handleSubmit,
        isLoading,
        errors,
    }
}