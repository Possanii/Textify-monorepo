import React from "react";
import Logo from "../login/Logo_with_black_text.png";
import Input from "../components/InputCadastro";
import Button from "../components/CadastroButton";

const Cadastro = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex p-4 items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-8 w-full shadow-md">
     
      <img src={Logo.src} alt="Textify Logo" className="mx-auto mb-6" />

      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="Insira seu endereço de email"
        required
      />
      <Input
        label="Senha"
        id="password"
        name="password"
        placeholder="Insira sua senha"
        type="password"
        required
      />
      <Input
        label="Repita a senha"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Repita sua senha"
        type="password"
        required
      />
      <Button text="Criar conta" />
      <p className="mt-4 text-center text-gray-600">
           Já possui uma conta?{" "}
           <a href="/login" className="text-green-500 hover:underline">Realizar login</a>
         </p>
    </div>
    </div>
  );
};

export default Cadastro;
