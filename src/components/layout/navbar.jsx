import logo from "@/assets/file.png";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src={logo} alt="logo kasipos" width="30px" />
            KasiPOS
          </a>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#home" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#stats" className="hover:text-foreground transition-colors">
            Stats
          </a>
          <a href="#why" className="hover:text-foreground transition-colors">
            Why KasiPOS
          </a>
          <a href="#features" className="hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how" className="hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">
            Customers
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#cta"
            className="bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
