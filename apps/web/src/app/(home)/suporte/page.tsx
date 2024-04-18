import React from "react";
import Logo from "../../../../public/Logo_with_black_text.png";

const Suporte = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Suporte</h1>
        {/* <img src={Logo.src} alt="Textify" className="mt-14 justify-center rounded-3xl" /> */}
        <p className="text-lg mt-14">
          Bem-vindo à nossa página de suporte. Estamos aqui para ajudá-lo! Caso
          tenha alguma dúvida, entre em contato conosco
        </p>
        <p className="text-lg text-center mt-14">
          Pelo e-mail:
          <a href="textify@suporte.com" className="underline text-green-400 hover:text-green-600"> textify@suporte.com</a>
        </p>
      </div>
    </div>
  );
};

export default Suporte;
