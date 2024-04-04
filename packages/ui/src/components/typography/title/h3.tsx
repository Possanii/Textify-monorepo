import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH3 extends ComponentProps<"h3"> {}

export function H3({ children, className }: IH3) {
  return (
    <h3
      className={cn(
        "font-manrope font-semibold text-[32px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
