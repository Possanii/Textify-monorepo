import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@ui/src/lib/utils";

// O componente Avatar que inclui funcionalidade de upload
const FotoPerfil = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    onImageChange?: (file: File) => void; // Callback para quando uma imagem é escolhida
  }
>(({ className, onImageChange, ...props }, ref) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Função chamada quando o input de arquivo muda
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageChange) {
      onImageChange(file);
    }
  };

  // Função para abrir o seletor de arquivos ao clicar no avatar
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full cursor-pointer",
        className,
      )}
      onClick={handleAvatarClick}
      {...props}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      {props.children}
    </AvatarPrimitive.Root>
  );
});
FotoPerfil.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { FotoPerfil, AvatarFallback, AvatarImage };
