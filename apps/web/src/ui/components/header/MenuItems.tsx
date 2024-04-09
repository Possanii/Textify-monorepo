import { Button } from "@ui/components/ui/Button";
import { cn } from "@ui/src/lib/utils";
import Link from "next/link";

interface IMenuItemProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export default function MenuItem({ children, to, className }: IMenuItemProps) {
  return (
    <Link href={to}>
      <Button
        variant={"ghost"}
        className={cn("text-white dark:hover:bg-zinc-700", className)}
      >
        {children}
      </Button>
    </Link>
  );
}
