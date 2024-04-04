import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IDisplay extends ComponentProps<"h1"> {}

export function Display({ children, className }: IDisplay) {
  return (
    <h1
      className={cn(
        "font-manrope font-bold text-[56px] leading-[1.2]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
