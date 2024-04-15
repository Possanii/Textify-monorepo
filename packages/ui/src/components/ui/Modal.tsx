import * as RdxModal from "@radix-ui/react-dialog";
import { cn } from "@ui/src/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  className?: string;
  onClose?(): void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({
  open,
  className,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <RdxModal.Root open={open} onOpenChange={onClose}>
      <RdxModal.Portal>
        <RdxModal.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
        <RdxModal.Content
          className={cn(
            "data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 space-y-10 bg-white rounded-2xl z-50",
            "w-full max-w-[500px] outline-none",
            className,
          )}
        >
          {title && (
            <header className="h-12 flex justify-center items-center text-light-yellow">
              <button
                className="absolute w-12 h-12 flex items-center left-8 outline-none"
                onClick={onClose}
              >
                <X className="w-6 h-6" />
              </button>
              <span className="text-2xl font-bold">{title}</span>
            </header>
          )}
          <div>{children}</div>
        </RdxModal.Content>
      </RdxModal.Portal>
    </RdxModal.Root>
  );
}
