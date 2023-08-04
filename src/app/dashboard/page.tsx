"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <>
      <section className="container h-[85vh] flex flex-col justify-center items-center">
        <h1 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Bem vindo, {user?.firstName} {user?.lastName}
        </h1>
      </section>
    </>
  );
}
