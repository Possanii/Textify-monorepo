"use client";
import React from "react";
import Logo from "../../../public/Logo_with_black_text.png";
import InputCadastro from "../components/InputCadastro";
import Button from "../components/CadastroButton";
import { useSignUpController } from "./useSignUpController";

export default function Cadastro() {
  const { register, handleSubmit, errors } = useSignUpController();
  console.log(errors);

  return (
    <div className="bg-slate-100 min-h-screen flex p-4 items-center justify-center bg-gradient-to-br from-green-400">
      <div className="max-w-md mx-auto bg-white border border-black p-8 w-full shadow-xl backdrop-blur-sm  ">
        <img src={Logo.src} alt="Textify Logo" className="mx-auto mb-6" />

        <form onSubmit={handleSubmit}>
          <InputCadastro
            label="Nome de usuário"
            id="username"
            placeholder="Insira seu nome de usuário"
            required
            {...register("name")}
            error={errors.name?.message}
          />
          <InputCadastro
            label="Email"
            id="email"
            placeholder="Insira seu endereço de email"
            required
            {...register("email")}
            error={errors.email?.message}
          />
          <InputCadastro
            label="Senha"
            id="password"
            placeholder="Insira sua senha"
            type="password"
            required
            {...register("password")}
            error={errors.password?.message}
          />
          <InputCadastro
            label="Repita a senha"
            id="confirmPassword"
            placeholder="Repita sua senha"
            type="password"
            required
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <Button text="Criar conta" type="submit" />
          <p className="mt-4 text-center text-gray-600">
            Já possui uma conta?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Realizar login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
