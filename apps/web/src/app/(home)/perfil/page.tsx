"use client";

import { Button } from "@ui/components/ui/Button";
import { Input } from "@ui/components/ui/Input";
import {
  AvatarFallback,
  AvatarImage,
  FotoPerfil,
} from "../../../../../../packages/ui/src/components/ui/FotoPerfil";
import Logo from "../../../../public/Logo_with_black_text.png";
import { useEditProfileController } from "./useEditProfileController";

export default function EditarPerfil() {
  const { register, handleSubmit, errors } = useEditProfileController();

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto border border-black">
        <div className="bg-white p-8 border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center mt-8">
              <div className="relative">
                <FotoPerfil className="w-24 h-24 rounded-full border">
                  <AvatarImage
                    className="object-cover hover:bg-opacity-30"
                    src={Logo.src}
                  />
                  <AvatarFallback className="text-center hover:underline">
                    Alterar Imagem
                  </AvatarFallback>
                </FotoPerfil>
              </div>
            </div>
            <div>
              <Input
                label="Nome de usuário"
                id="username"
                {...register("name")}
                className="mt-1 block w-full border border-black p-2 rounded-md"
                error={errors.name?.message}
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                id="email"
                {...register("email")}
                className="mt-1 block w-full border border-black p-2 rounded-md"
                error={errors.email?.message}
              />
            </div>
            <div>
              <Input
                type="password"
                label="Nova senha"
                id="password"
                {...register("newPassword")}
                className="mt-1 block w-full border border-black p-2 rounded-md"
                error={errors.password?.message}
              />
            </div>
            <div>
              <Input
                type="password"
                label="Senha antiga"
                id="password"
                {...register("password")}
                className="mt-1 block w-full border border-black p-2 rounded-md"
                error={errors.newPassword?.message}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-900"
              >
                Atualizar Perfil
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
