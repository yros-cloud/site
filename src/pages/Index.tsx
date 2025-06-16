import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, ServerCog, ShieldCheck, Rocket, TrendingUp, Clock,  Mail, MessageCircle, Calendar } from "lucide-react";

const services = [
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Consultoria em Cloud",
    description: "Otimize sua infraestrutura, reduza custos e aumente a escalabilidade com nossos especialistas em nuvem.",
    href: "/services/cloud",
  },
  {
    icon: <ServerCog className="h-10 w-10 text-primary" />,
    title: "DevOps & SRE",
    description: "Automatize seus pipelines, melhore a confiabilidade e acelere o tempo de entrega de software.",
    href: "/services/devops-sre",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Plataforma & FinOps",
    description: "Construa plataformas internas robustas e tenha total controle sobre seus gastos na nuvem.",
    href: "/services/finops",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Plantão 24x7",
    description: "Suporte especializado e proativo para garantir que seus sistemas estejam sempre operacionais.",
    href: "/services/plantao",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Projetos de Inovação",
    description: "Transforme suas ideias em realidade com nossa equipe de desenvolvimento e gestão de projetos.",
    href: "/services/inovacao",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Produtos B2B & B2C",
    description: "Em breve, soluções inovadoras para otimizar processos e impulsionar o crescimento do seu negócio.",
    href: "/services/produtos",
  },
];


const Index = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500">
                    Entregamos resultados com confiabilidade, automação e suporte especializado.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                    A YROS oferece consultoria especializada em Cloud, FinOps, DevOps, SRE e Plataforma para elevar sua empresa ao próximo nível.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <a href="#contact">Fale com um Especialista</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#services">Nossos Serviços</a>
                  </Button>
                </div>
              </div>
              <img
                alt="DevOps"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last animate-scale-in"
                src="video-home.gif"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Nossos Serviços</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluções Completas para sua Empresa</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos um portfólio completo de serviços para garantir a eficiência, segurança e inovação da sua infraestrutura.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
              {services.map((service, index) => (
                <Card key={service.title} className="bg-background/80 hover:bg-background/95 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 100}ms`}}>
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Sobre Nós</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Seu Parceiro Estratégico em Tecnologia</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa missão é garantir que sua empresa utilize as melhores ferramentas e práticas para alcançar o sucesso, com uma equipe sênior e suporte proativo.
              </p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                    <ShieldCheck className="h-8 w-8 mt-1 flex-shrink-0 text-primary"/>
                    <div>
                        <h3 className="text-lg font-bold">Expertise Comprovada</h3>
                        <p className="text-muted-foreground">Equipe sênior com vasta experiência em projetos de alta complexidade em diversas indústrias.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Clock className="h-8 w-8 mt-1 flex-shrink-0 text-primary"/>
                    <div>
                        <h3 className="text-lg font-bold">Suporte Proativo 24x7</h3>
                        <p className="text-muted-foreground">Monitoramento e suporte contínuo para garantir a máxima disponibilidade e performance.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Rocket className="h-8 w-8 mt-1 flex-shrink-0 text-primary"/>
                    <div>
                        <h3 className="text-lg font-bold">Foco em Inovação e Resultados</h3>
                        <p className="text-muted-foreground">Buscamos constantemente as melhores soluções para otimizar custos e impulsionar seus objetivos.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vamos construir o futuro juntos.</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Pronto para transformar sua infraestrutura e acelerar seu crescimento? Entre em contato e vamos conversar sobre seu próximo projeto.
              </p>
            </div>
;

<div className="mx-auto w-full max-w-sm space-y-2">
  <div className="flex flex-col gap-2 sm:flex-row">
    <Button size="lg" variant="outline" asChild className="w-full flex items-center gap-2">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@yros.cloud&su=Contato%20via%20site&body=Olá,%20gostaria%20de%20falar%20com%20vocês"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="h-5 w-5" />
        Enviar E-mail
      </a>
    </Button>
    <Button size="lg" variant="outline" asChild className="w-full flex items-center gap-2">
      <a
        href="https://wa.me/5548988501975?text=Olá,%20gostaria%20de%20falar%20com%20a%20YROS%20CLOUD%20sobre%20consultoria."
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-5 w-5" />
        Falar no WhatsApp
      </a>
    </Button>
  </div>

  {/* Botão azul com pulse e badge */}
  <div className="relative">
    <Button
      size="lg"
      variant="default"
      asChild
      className="w-full flex items-center gap-2 animate-pulse"
    >
      <a
        href="https://calendly.com/yros/kickoff"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Calendar className="h-5 w-5" />
        Agendar Reunião de Kickoff
      </a>
    </Button>
  </div>
</div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
