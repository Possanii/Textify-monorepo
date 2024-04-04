import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IH5 extends ComponentProps<"h5"> {}

export function H5({ children, className }: IH5) {
  return (
    <h5
      className={cn(
        "font-manrope font-semibold text-[20px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h5>
  );
}
