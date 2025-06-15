
export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <a className="flex items-center justify-center" href="#">
        <img src="/lovable-uploads/a402bdd3-f510-4732-b0f4-a2dcfbcd0582.png" alt="YROS Logo" className="h-8" />
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

