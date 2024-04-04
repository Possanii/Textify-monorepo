import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH1 extends ComponentProps<"h1"> {}

export function H1({ children, className }: IH1) {
  return (
    <h1
      className={cn(
        "font-manrope font-bold text-[48px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
