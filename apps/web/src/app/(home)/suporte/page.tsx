import React from "react";

const Suporte = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-transparent shadow-lg rounded-lg text-white text-center backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-4">Suporte</h1>
        <p className="text-lg">
          Bem-vindo à nossa página de suporte. Estamos aqui para ajudá-lo! Caso
          tenha alguma dúvida, entre em contato conosco.
        </p>
        <p className="text-lg mt-6">
          Pelo e-mail:
          <a href="mailto:textify@suporte.com" className="underline text-green-400 hover:text-green-600"> textify@suporte.com</a>
        </p>
      </div>
    </div>
  );
};

export default Suporte;
