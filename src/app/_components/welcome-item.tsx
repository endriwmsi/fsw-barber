"use client";

import { useSession } from "next-auth/react";
import { formatDate } from "../_lib/utils";

const WelcomeItem = () => {
  const { data } = useSession();
  const today = formatDate(new Date());

  return (
    <>
      {data?.user ? (
        <>
          <h2 className="text-xl">
            Olá,
            <strong> {data?.user?.name ?? ""}!</strong>
          </h2>
          <p>{today}</p>
        </>
      ) : (
        <>
          <h2 className="text-xl">
            Olá,
            <strong> visitante!</strong>
          </h2>
          <p>{today}</p>
        </>
      )}
    </>
  );
};

export default WelcomeItem;
