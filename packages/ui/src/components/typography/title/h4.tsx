import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH4 extends ComponentProps<"h4"> {}

export function H4({ children, className }: IH4) {
  return (
    <h4
      className={cn(
        "font-manrope font-semibold text-[24px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h4>
  );
}
