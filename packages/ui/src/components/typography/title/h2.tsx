import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH2 extends ComponentProps<"h2"> {}

export function H2({ children, className }: IH2) {
  return (
    <h2
      className={cn(
        "font-manrope font-semibold text-[40px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
