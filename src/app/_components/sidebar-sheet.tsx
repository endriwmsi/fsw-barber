import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { quickSearchOptions } from "../_constants/quickSearchOptions";
import Image from "next/image";
import Link from "next/link";

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar className="rounded-full border-2 border-primary">
          <AvatarImage
            src="https://www.endriwmsi.com/assets/endriw-DWKK9I3f.jpg"
            className="object-cover"
          />
        </Avatar>

        <div className="flex flex-col">
          <p className="font-bold">Endriw Schiavenato</p>
          <p className="text-xs text-gray-400">endriwmsi@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            variant="ghost"
            key={option.title}
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
