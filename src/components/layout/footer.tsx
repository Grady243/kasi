import { Github, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 KasiPOS. Built for modern commerce.</p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <BookOpen className="h-4 w-4" /> Documentation
          </a>
        </div>
      </div>
    </footer>
  );
}
