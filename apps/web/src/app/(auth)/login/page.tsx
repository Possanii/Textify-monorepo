"use client";

import { Button } from "@ui/components/ui/Button";
import { Input } from "@ui/components/ui/Input";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../../../../public/Logo_with_black_text.png";
import { useLoginController } from "./useLoginController";

export default function Login() {
  const { register, handleSubmit, errors } = useLoginController();

  return (
    <motion.div
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className=" bg-slate-700 min-h-screen flex items-center justify-center bg-gradient-to-br from-black"
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

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
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
          <Button type="submit">Acessar</Button>
        </form>

        <div className="text-center py-3">
          <p className="text-slate-700 w-full px-4 py-2 mb-4 rounded">
            Não possui cadastro?{" "}
            <Link
              href="/cadastro"
              className="text-black hover:text-slate-700 rounded p-1 mb-4 hover:underline"
            >
              Realizar cadastro
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
