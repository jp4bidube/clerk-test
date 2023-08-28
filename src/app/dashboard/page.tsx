"use client";

import { useUser } from "@clerk/nextjs";
import { Crisp } from "crisp-sdk-web";

export default function DashboardPage() {
  Crisp.configure("177b2ac2-8894-4063-9bf2-47b5aad04c2c", { autoload: true });
  const { user, isLoaded } = useUser();

  Crisp.load();
  Crisp.session.onLoaded(() => {
    let crispUser = Crisp.user.setEmail(
      user?.primaryEmailAddress?.emailAddress || ""
    );
    Crisp.user.setNickname(user?.fullName || "");
    Crisp.user.setAvatar(user?.imageUrl || "");

    Crisp?.session?.setData({
      user: crispUser,
      user_id: user?.id || "123",
      plan: "free",
    });
  });

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
