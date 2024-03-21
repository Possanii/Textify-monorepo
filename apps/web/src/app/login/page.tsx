import React from "react";
import Logo from "../login/Logo_with_black_text.png";
import Header from "../header/header";
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';


const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    
        <img src={Logo.src} alt="Textify Logo" className="mx-auto mb-6" />
    
        <form action="/login" method="post">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <InputField
            label="Senha"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <LoginButton text="Login" />

          <div className="text-center py-3">
            <p className="text-black w-full px-4 py-2 mb-4 rounded">
              Não possui cadastro?{' '}
              <a
                href="/cadastro"
                className="text-green-500 rounded p-2 mb-4 hover:underline"
              >
                Realizar cadastro
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
