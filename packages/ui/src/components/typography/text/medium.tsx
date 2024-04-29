import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IPMedium extends ComponentProps<"p"> {}

export function PMedium({ children, className }: IPMedium) {
  return (
    <p
      className={cn(
        "font-manrope font-normal text-[16px] leading-[1.5] truncate",
        className,
      )}
    >
      {children}
    </p>
  );
}
