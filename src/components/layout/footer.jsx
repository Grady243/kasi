import logo from "@/assets/file.png";
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src={logo} alt="KasiPOS logo" className="h-8 w-8" />

              <span className="text-lg font-semibold tracking-tight">KasiPOS</span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Modern point-of-sale software designed for merchants who want speed, clarity and
              control across every device.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>

              <li>
                <a href="#how" className="hover:text-foreground">
                  How it works
                </a>
              </li>

              <li>
                <a href="#testimonials" className="hover:text-foreground">
                  Customers
                </a>
              </li>

              <li>
                <a href="#cta" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-foreground">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay updated
            </h3>

            <p className="mt-5 text-sm text-muted-foreground">
              Get product updates, tips and news directly in your inbox.
            </p>

            <form className="mt-5 flex items-center gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="email"
                  placeholder="Email address"
                  className="h-11 w-full border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="h-11 bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 KasiPOS. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
