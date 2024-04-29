import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IPLarger extends ComponentProps<"p"> {}

export function PLarge({ children, className }: IPLarger) {
  return (
    <p
      className={cn(
        "font-manrope font-normal text-[18px] leading-[1.5] truncate",
        className,
      )}
    >
      {children}
    </p>
  );
}
