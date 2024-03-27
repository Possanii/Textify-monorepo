import React from "react";
import Logo from "../../../public/Logo_with_black_text.png";
import InputCadastro from "../components/InputCadastro";
import Button from "../components/CadastroButton";

const Cadastro = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex p-4 items-center justify-center bg-gradient-to-br from-green-400">
      <div className="max-w-md mx-auto bg-white border border-black p-8 w-full shadow-xl backdrop-blur-sm  ">
     
      <img src={Logo.src} alt="Textify Logo" className="mx-auto mb-6" />

      <InputCadastro
        label="Email"
        id="email"
        name="email"
        placeholder="Insira seu endereço de email"
        required
      />
      <InputCadastro
        label="Senha"
        id="password"
        name="password"
        placeholder="Insira sua senha"
        type="password"
        required
      />
      <InputCadastro
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
