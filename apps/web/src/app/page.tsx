"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../../public/Logo_with_black_text.png";

const LogoAnimation = () => {
  const router = useRouter();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAnimationComplete) {
      router.push("/login");
    }
  }, [isAnimationComplete, router]);

  return (
    <div className=" bg-slate-100 flex justify-center items-center h-screen border bg-gradient-to-br from-green-500">
      <img
        className={`transition-transform duration-1000 ${isAnimationComplete ? "-translate-y-full" : ""}`}
        src={Logo.src}
        alt="Textify Logo"
      />
    </div>
  );
};

export default LogoAnimation;
