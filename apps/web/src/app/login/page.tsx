"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Logo_with_black_text.png";
import InputLogin from "../components/InputLogin";
import LoginButton from "../components/LoginButton";

export default function Login() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className=" bg-slate-100 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400"
    >
      <div className="bg-white p-8 rounded border border-black shadow-md w-full max-w-md backdrop-contrast-100">
        <motion.img
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5, delay: 0.3 }}
          src={Logo.src}
          alt="Textify Logo"
          className="mx-auto mb-6"
        />

        <form action="/login" method="post">
          <InputLogin
            label="Email"
            type="email"
            name="email"
            placeholder="Insira seu email"
            required
          />
          <InputLogin
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            required
          />
          <LoginButton text="Login" />

          <div className="text-center py-3">
            <p className="text-black w-full px-4 py-2 mb-4 rounded">
              Não possui cadastro?{" "}
              <a
                href="/cadastro"
                className="text-green-500 rounded p-1 mb-4 hover:underline"
              >
                Realizar cadastro
              </a>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
