import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default async function IndexPage() {
  return (
    <>
      <section className="container flex flex-col  lg:flex-row justify-between items-center  space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[50rem] flex-col items-center gap-4 text-center">
          <Link
            href="#"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Acompanhe no Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Consultoria e treinamento de Neurologia
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Realizamos atendimento de forma presencial ou remota, conforma a
            necessidade de cada um.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Iniciar
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contato
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="max-w-[18rem] sm:max-w-[25rem] md:max-w-[50rem]"
            src="https://illustrations.popsy.co/white/customer-support.svg"
            width={400}
            height={400}
            alt="logo"
          />
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Os serviços prestados
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            saepe odit numquam architecto. Ipsum suscipit ipsa voluptatem omnis.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.brain className="h-12 w-12 mb-5"></Icons.brain>
              <div className="space-y-2">
                <h3 className="font-bold">Avaliação Neuropsicológica</h3>
                <p className="text-sm text-muted-foreground">
                  A Avaliação Neuropsicológica é o exame detalhado das funções
                  cognitivas através de um conjunto de testes neuropsicológicos,
                  escalas e observação comportamental.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.book className="h-12 w-12 mb-5"></Icons.book>
              <div className="space-y-2">
                <h3 className="font-bold">
                  Orientação Profissional (Vocacional)
                </h3>
                <p className="text-sm text-muted-foreground">
                  A orientação vocacional é um serviço que visa auxiliar no
                  processo de escolha profissional.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.heart className="h-12 w-12 mb-5"></Icons.heart>
              <div className="space-y-2">
                <h3 className="font-bold">
                  Avaliação Psicológica para Cirurgia Neurológica
                </h3>
                <p className="text-sm text-muted-foreground">
                  A avaliação psicológica pode certificar de que o paciente
                  possui nível intelectual e cognitivo de compreensão acerca dos
                  riscos da operação e cuidados inerentes a esse procedimento no
                  período do pós-operatório imediato e em longo prazo.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.messagesSquare className="h-12 w-12 mb-5"></Icons.messagesSquare>
              <div className="space-y-2">
                <h3 className="font-bold">
                  Terapia Cognitivo-comportamental (TCC)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Psicoterapia breve estruturada, orientada ao presente,
                  direcionada a resolver problemas do presente e modificar
                  pensamentos e/ou comportamentos disfuncionais.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.help className="h-12 w-12 mb-5"></Icons.help>
              <div className="space-y-2">
                <h3 className="font-bold">Estimulação Cognitiva</h3>
                <p className="text-sm text-muted-foreground">
                  Visa trabalhar as dificuldades apresentadas por crianças, tais
                  como problemas de memória, atenção, planejamento, raciocínio
                  lento, linguagem através do treino cognitivo e reconstrução de
                  atividades da vida diária do paciente.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <Icons.users className="h-12 w-12 mb-5"></Icons.users>
              <div className="space-y-2">
                <h3 className="font-bold">Reabilitação Neuropsicológica</h3>
                <p className="text-sm text-muted-foreground">
                  Melhorar a qualidade de vida e a capacidade cognitiva de
                  clientes com lesão cerebral ou em déficit/ declínio cognitivo,
                  promovendo a readaptação aos níveis sociais, ocupacionais e
                  psíquicos do paciente à doença e déficits cognitivos causados.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Lorem ipsum dolor
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            inventore assumenda totam mollitia, provident libero sit quos alias
            officiis.
          </p>
        </div>
      </section>
    </>
  );
}
