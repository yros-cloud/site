
import { Briefcase } from "lucide-react";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <a className="flex items-center justify-center" href="#">
        <Briefcase className="h-6 w-6 text-primary" />
        <span className="ml-3 text-xl font-bold tracking-wider">YROS</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:text-primary transition-colors underline-offset-4" href="#services">
          Serviços
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors underline-offset-4" href="#about">
          Sobre Nós
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors underline-offset-4" href="#contact">
          Contato
        </a>
      </nav>
    </header>
  );
};
