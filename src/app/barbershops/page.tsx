import BarbershopItem from "../_components/barbershop-item";
import Header from "../_components/header";
import SearchItem from "../_components/search-item";
import { db } from "../_lib/prisma";

type BarbershopsPageProps = {
  searchParams: {
    title?: string;
    service?: string;
  };
};

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  });

  return (
    <div>
      <Header />

      <div className="mt-6 px-5">
        <SearchItem />
      </div>

      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados da busca &quot;
          {searchParams?.title || searchParams?.service}&quot;
        </h2>

        <div className="grid grid-cols-2">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarbershopsPage;
