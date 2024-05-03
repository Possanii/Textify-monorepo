"use client";

import { Button } from "@ui/components/ui/Button";
import { Input } from "@ui/components/ui/Input";
import { motion } from "framer-motion";
import { useEditProfileController } from "./useEditProfileController";

export default function EditarPerfil() {
  const { register, handleSubmit, errors } = useEditProfileController();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black"
    >
      <div className="bg-white p-8 rounded border border-black shadow-md w-full max-w-md backdrop-contrast-100">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              label="Nome de usuário"
              placeholder="Insira seu nome de usuário"
              required
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              placeholder="Insira seu email"
              required
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Insira sua senha"
              required
              {...register("password")}
              error={errors.password?.message}
            />
          </div>
          <Button type="submit">Atualizar Perfil</Button>
        </form>
      </div>
    </motion.div>
  );
}
