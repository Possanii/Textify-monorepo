import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/ui/Avatar";
import { Button } from "@ui/components/ui/Button";
import Link from "next/link";
import Logo from "../../../../public/textify-text-white.png";
import MenuItem from "./MenuItems";
import { NavigationItems } from "./navigation";

export function Header() {
  return (
    <div className="w-full fixed bg-zinc-900">
      <div className="flex justify-between items-center h-20 w-full max-w-screen-xl mx-auto">
        <div className="flex gap-10 items-center">
          <Link href={"/"}>
            <img src={Logo.src} className="h-16 w-18" />
          </Link>
          <div className="flex gap-4">
            {NavigationItems.map((item) => (
              <MenuItem key={item.menu} to={item.to}>
                {item.menu}
              </MenuItem>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={"/upload"}>
            <Button className="dark:bg-white/80 dark:hover:bg-white">
              Carregar vídeo
            </Button>
          </Link>
          <Link href={"/perfil"}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
}
