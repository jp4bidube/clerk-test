import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Preços simples e transparentes
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Desbloqueie todos os recursos, incluindo postagens ilimitadas para o
          seu blog.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            O que está incluído no plano PRO
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Mensagens ilimitadas
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Usuários Ilimitados
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Atendimento personalizado
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Análise do Painel
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Acesso ao Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Suporte Premium
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">R$ 190</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Cobrado mensalmente
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Iniciar
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Neuro Help,{" "}
          <strong>Você pode testar por 7 dias e não será cobrado.</strong>
        </p>
      </div>
    </section>
  );
}
