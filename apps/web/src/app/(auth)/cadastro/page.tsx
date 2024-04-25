"use client";

import { Button } from "@ui/components/ui/Button";
import { Input } from "@ui/components/ui/Input";
import Link from "next/link";
import Logo from "../../../../public/Logo_with_black_text.png";
import { useSignUpController } from "./useSignUpController";

export default function Cadastro() {
  const { register, handleSubmit, errors, isLoading } = useSignUpController();

  return (
    <div className="bg-slate-700 min-h-screen flex p-4 items-center justify-center bg-gradient-to-br from-black">
      <div className="max-w-md mx-auto bg-white border border-black p-8 w-full shadow-xl backdrop-blur-sm  ">
        <img src={Logo.src} alt="Textify Logo" className="mx-auto mb-6" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              label="Nome de usuário"
              id="username"
              placeholder="Insira seu nome de usuário"
              required
              {...register("name")}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              id="email"
              placeholder="Insira seu endereço de email"
              required
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              id="password"
              placeholder="Insira sua senha"
              type="password"
              required
              {...register("password")}
              error={errors.password?.message}
            />
            <Input
              label="Repita a senha"
              id="confirmPassword"
              placeholder="Repita sua senha"
              type="password"
              required
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>
          <Button type="submit" loading={isLoading}>
            Criar conta
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Já possui uma conta?{" "}
          <Link href="/login" className="text-black hover:text-slate-700 hover:underline">
            Realizar login
          </Link>
        </p>
      </div>
    </div>
  );
}
