import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IPMedium extends ComponentProps<"p"> {}

export function PFadeSmall({ children, className }: IPMedium) {
  return (
    <p
      className={cn(
        "font-manrope font-light text-[12px] leading-[1.5] text-black/80 truncate",
        className,
      )}
    >
      {children}
    </p>
  );
}
