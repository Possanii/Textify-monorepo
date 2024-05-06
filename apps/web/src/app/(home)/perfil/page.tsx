"use client";

import { Button } from "@ui/components/ui/Button";
import { Input } from "@ui/components/ui/Input";
import { useEditProfileController } from "./useEditProfileController";
import { useState } from "react";
import {AvatarImage, AvatarFallback, FotoPerfil} from '../../../../../../packages/ui/src/components/ui/FotoPerfil'

export default function EditarPerfil() {
  const { register, handleSubmit, errors } = useEditProfileController();
  const [profilePic, setProfilePic] = useState("http://github.com/shadcn.png")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Pega o primeiro arquivo selecionado pelo usuário
    const file = e.target.files && e.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfilePic(reader.result.toString());
        }
        // Reset do campo input após o processamento do arquivo
        e.target.value = ''; // Adicionando esta linha para resetar o campo
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione um arquivo de imagem válido.');
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto border border-black">
        <div className="bg-white p-8 border">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center mt-8">
              <div className="relative">
                <FotoPerfil className="w-24 h-24 rounded-full border">
                  <AvatarImage className="object-cover hover:bg-opacity-30" src={profilePic} />
                  <input
                    type="file"
                    onChange={handleImageChange}
                    //{...register("file")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <AvatarFallback className="text-center hover:underline">Alterar Imagem</AvatarFallback>
                </FotoPerfil>
              </div>
            </div>
            <div>
              <Input
                type="text"
                label="Nome de usuário"
                id="username"
                value={name}
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <Input
                type="email"
                label="Email"
                id="email"
                value={email}
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                label="Nova senha"
                id="password"
                value={password}
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-black p-2 rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                label="Senha antiga"
                id="password"
                value={newPassword}
                {...register("newPassword")}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full border border-black p-2 rounded-md"
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
