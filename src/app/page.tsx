import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      {/* header */}
      <Header />

      {/* texto */}
      <div className="p-5">
        <h2 className="text-xl">
          Olá,
          <strong>Endriw!</strong>
        </h2>
        <p>Segunda-feira, 08 de agosto.</p>

        {/* busca */}
        <div className="mt-6 flex items-center gap-2 space-x-2">
          <Input placeholder="Faça sua busca..." />

          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* busca rapida */}
        <div className="mt-6 flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image alt="Cabelo" src="/cabelo.svg" width={16} height={16} />
            <span>Cabelo</span>
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="Barba" src="/barba.svg" width={16} height={16} />
            <span>Barba</span>
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="Sobrancelha"
              src="/sobrancelha.svg"
              width={16}
              height={16}
            />
            <span>Sobrancelha</span>
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="Acabamento"
              src="/acabamento.svg"
              width={16}
              height={16}
            />
            <span>Acabamento</span>
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="Massagem" src="/massagem.svg" width={16} height={16} />
            <span>Massagem</span>
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              alt="Hidratação"
              src="/hidratacao.svg"
              width={16}
              height={16}
            />
            <span>Hidratação</span>
          </Button>
        </div>

        {/* banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* agendamentos */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>

        {/* recomendados */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* populares */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024
              <strong> FSW Barber.</strong>
              Todos os direitos reservados.
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;
