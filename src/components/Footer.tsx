
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="flex items-center gap-2">
        <img src="/lovable-uploads/f056ca2f-ca0c-43d0-b947-e623a1ea6fff.png" alt="YROS Icon" className="h-5" />
        <p className="text-xs text-muted-foreground">
          © {currentYear} YROS Consultoria. Todos os direitos reservados.
        </p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Termos de Serviço
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Privacidade
        </a>
      </nav>
    </footer>
  );
};

