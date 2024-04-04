"use client";

import { cn } from "@ui/src/lib/utils";
import { AlertCircleIcon, EyeIcon, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { PSmall } from "../typography";
import { Label } from "./Label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const [togglePassword, setTogglePassword] = useState(false);

    return (
      <div className="w-full flex flex-col gap-2 relative">
        <Label>{label}</Label>
        <input
          type={togglePassword ? "text" : type}
          className={cn(
            "flex h-14 w-full rounded-md border border-input bg-background p-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <div
            className={cn(
              "absolute bottom-5 right-4 cursor-pointer",
              error && "bottom-12",
            )}
          >
            {!togglePassword && (
              <EyeIcon
                className="h-4 w-4"
                onClick={() => setTogglePassword((state) => !state)}
              />
            )}
            {togglePassword && (
              <EyeOff
                className="h-4 w-4"
                onClick={() => setTogglePassword((state) => !state)}
              />
            )}
          </div>
        )}
        {error && (
          <div className="flex gap-2 items-center mr-4">
            <AlertCircleIcon className="h-[14px] w-[14px] text-red-500" />
            <PSmall className="text-red-500">{error}</PSmall>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
