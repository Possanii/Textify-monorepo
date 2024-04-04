import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH6 extends ComponentProps<"h6"> {}

export function H6({ children, className }: IH6) {
  return (
    <h6
      className={cn(
        "font-manrope font-semibold text-[16px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h6>
  );
}
