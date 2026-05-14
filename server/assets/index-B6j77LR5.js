import { jsx, jsxs } from "react/jsx-runtime";
import { Twitter, Instagram, Linkedin, Github, Mail, Sun, Moon, ShoppingCart, Package, BarChart3, Zap, MonitorSmartphone, ShieldCheck, Check, ArrowRight, BookOpen, UserPlus, PackagePlus, Rocket, Users, Activity, Clock, TrendingUp, Star, Gauge, RefreshCw, Lock } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: "/src/assets/file.png", alt: "KasiPOS logo", className: "h-8 w-8" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold tracking-tight", children: "KasiPOS" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-muted-foreground", children: "Modern point-of-sale software designed for merchants who want speed, clarity and control across every device." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
              children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
              children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
              children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary",
              children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-foreground", children: "How it works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#testimonials", className: "hover:text-foreground", children: "Customers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#cta", className: "hover:text-foreground", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Careers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-foreground", children: "Stay updated" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-muted-foreground", children: "Get product updates, tips and news directly in your inbox." }),
        /* @__PURE__ */ jsxs("form", { className: "mt-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email address",
                className: "h-11 w-full border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "h-11 bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
              children: "Join"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 KasiPOS. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
}
const STORAGE_KEY = "kasipos-theme";
function getInitial() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}
function useTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const initial = getInitial();
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  const toggle = useCallback(() => {
    setTheme((t) => t === "dark" ? "light" : "dark");
  }, []);
  return { theme, toggle, setTheme };
}
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex h-9 w-9 items-center justify-center border border-border text-foreground hover:border-primary transition-colors",
      children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
function Nav() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 font-semibold tracking-tight", children: [
      /* @__PURE__ */ jsx("img", { src: "/src/assets/file.png", alt: "logo kasipos", width: "30px" }),
      "KasiPOS"
    ] }) }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "#home", className: "hover:text-foreground transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "#stats", className: "hover:text-foreground transition-colors", children: "Stats" }),
      /* @__PURE__ */ jsx("a", { href: "#why", className: "hover:text-foreground transition-colors", children: "Why KasiPOS" }),
      /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-foreground transition-colors", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "How it works" }),
      /* @__PURE__ */ jsx("a", { href: "#testimonials", className: "hover:text-foreground transition-colors", children: "Customers" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#cta",
          className: "bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
          children: "Get Started"
        }
      )
    ] })
  ] }) });
}
const features = [
  {
    icon: ShoppingCart,
    title: "Sales Management",
    desc: "Track every sale in real time with a clean, fast register.",
    benefit: "Close more transactions per hour without losing a single line item."
  },
  {
    icon: Package,
    title: "Inventory Tracking",
    desc: "Stock levels update automatically with each sale or restock.",
    benefit: "Never oversell again — get low-stock alerts before you run out."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Daily, weekly and monthly insights on revenue and performance.",
    benefit: "Make decisions backed by data, not guesswork."
  },
  {
    icon: Zap,
    title: "Fast Checkout System",
    desc: "Optimised flow that gets customers paid in under five seconds.",
    benefit: "Shorter queues, happier customers, more revenue per shift."
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-device Sync",
    desc: "Phone, tablet, desktop — your data stays in perfect sync.",
    benefit: "Run your business from anywhere, switch devices instantly."
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "End-to-end encryption with PCI-DSS compliant infrastructure.",
    benefit: "Sleep well knowing every transaction is protected."
  }
];
function Features() {
  return /* @__PURE__ */ jsx("section", { id: "features", className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Features" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold tracking-tight md:text-5xl", children: "Everything you need to run your shop" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Built for merchants who want clarity, speed and control without the bloat." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group bg-background p-8 transition-colors hover:bg-surface",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-6 text-lg font-semibold", children: f.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-start gap-2 pt-4", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", children: f.benefit })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsx("section", { id: "cta", className: "border-b border-border bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-balance text-4xl font-semibold tracking-tight text-secondary-foreground md:text-5xl", children: "Stop fighting your POS. Start growing your business." }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-secondary-foreground/80", children: "Join thousands of merchants using KasiPOS to run faster, leaner and clearer operations — starting today, with zero setup fees." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#",
          className: "inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
          children: [
            "Start free trial ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#features",
          className: "inline-flex items-center gap-2 border border-secondary-foreground/30 px-6 py-3 text-sm font-medium text-secondary-foreground hover:border-primary transition-colors",
          children: "See features"
        }
      )
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "home", className: "border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-2 bg-primary/10 px-3 py-1 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 bg-primary" }),
      "Modern Point Of Sales"
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "text-balance text-5xl font-semibold tracking-tight md:text-7xl", children: [
      "Simplify your sales with ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "KasiPOS" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground", children: "A modern point-of-sale system to manage sales, inventory and reports effortlessly — across every device, in every store." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#cta",
          className: "inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
          children: [
            "Get Started ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#features",
          className: "inline-flex items-center gap-2 border border-border-strong px-5 py-3 text-sm font-medium text-foreground hover:border-primary transition-colors",
          children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }),
            " View documentation"
          ]
        }
      )
    ] })
  ] }) }) });
}
const steps = [
  {
    n: "01",
    title: "Create Your Store",
    desc: "Set up your store quickly with a simple onboarding process.",
    icon: UserPlus
  },
  {
    n: "02",
    title: "Add Your Products",
    desc: "Manage inventory and organize products in real time.",
    icon: PackagePlus
  },
  {
    n: "03",
    title: "Start Selling Instantly",
    desc: "Process payments and monitor sales live.",
    icon: Rocket
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "border-b border-border bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold tracking-tight md:text-5xl", children: "Up and running in three steps" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From signup to first sale in less than an hour. No installer, no training day." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-px bg-border md:grid-cols-3", children: steps.map((s) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative overflow-hidden bg-background p-8 transition-all duration-300 hover:bg-surface-2",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute right-8 top-8 text-6xl font-bold leading-none text-muted-foreground/10 md:text-7xl", children: s.n }),
          /* @__PURE__ */ jsx("div", { className: "inline-flex h-18 w-18 items-center justify-center rounded-xl bg-primary/0 text-primary", children: /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7", strokeWidth: 1.8 }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold tracking-tight", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-20 max-w-xs text-sm leading-relaxed text-muted-foreground", children: s.desc })
          ] })
        ]
      },
      s.n
    )) })
  ] }) });
}
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Merchants",
    desc: "Shops growing with KasiPOS every day."
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "System Uptime",
    desc: "Reliable infrastructure you can count on."
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Sales Monitoring",
    desc: "Always-on visibility across every register."
  },
  {
    icon: TrendingUp,
    value: "10K+",
    label: "Transactions",
    desc: "Processed securely, every single week."
  }
];
function SocialProof() {
  return /* @__PURE__ */ jsx("section", { id: "stats", className: "border-b border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Trusted by merchants" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold tracking-tight md:text-4xl", children: "Numbers that speak for themselves" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From neighborhood shops to growing chains — KasiPOS keeps commerce running fast, reliable and always on." })
      ] }),
      " "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 border border-border sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group relative bg-background p-8 transition-colors hover:bg-surface ${i < stats.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""} ${i < 2 ? "sm:border-b sm:border-border" : ""} ${i % 2 === 0 ? "sm:border-r sm:border-border lg:border-r" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
              "0",
              i + 1
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 text-5xl font-semibold tracking-tight text-foreground", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-foreground", children: s.label }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-8 bg-[#03ab3a] transition-all duration-300 group-hover:w-16" })
        ]
      },
      s.label
    )) })
  ] }) });
}
const testimonials = [
  {
    quote: "KasiPOS changed the way we manage our store. Everything is faster — checkout, restocking, reports.",
    name: "Amina Ndlovu",
    role: "Store Manager",
    company: "Urban Threads"
  },
  {
    quote: "We switched from a clunky legacy POS and never looked back. The dashboard alone saves me hours every week.",
    name: "Marcus Lee",
    role: "Owner",
    company: "Lee & Sons Grocery"
  },
  {
    quote: "Multi-device sync is flawless. I can ring up a sale on a tablet, then check the books from my laptop at home.",
    name: "Sofia Carvalho",
    role: "Co-founder",
    company: "Noma Coffee Bar"
  },
  {
    quote: "Inventory used to be our biggest headache. With KasiPOS we know exactly what's on the shelf in real time.",
    name: "David Okafor",
    role: "Operations Lead",
    company: "Bright Pharmacy"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { id: "testimonials", className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Customers" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold tracking-tight md:text-5xl", children: "Loved by merchants worldwide" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Real teams, real shops, real numbers. Here's what they say about KasiPOS." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-px bg-border md:grid-cols-2", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-surface p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-primary", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 text-base leading-relaxed text-foreground", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3 pt-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center bg-secondary text-sm font-semibold text-secondary-foreground", children: t.name.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
            t.role,
            " · ",
            t.company
          ] })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
const whyItems = [
  {
    icon: Gauge,
    title: "Ultra-fast checkout",
    desc: "Process sales in under 5 seconds with a register built for speed."
  },
  {
    icon: RefreshCw,
    title: "Real-time inventory",
    desc: "Stock updates the instant a sale closes — across every device."
  },
  {
    icon: BarChart3,
    title: "Intuitive dashboard",
    desc: "A clean interface that surfaces what matters, hides what doesn't."
  },
  {
    icon: MonitorSmartphone,
    title: "Works on every device",
    desc: "Tablet, phone or laptop — same experience, same data."
  },
  {
    icon: Lock,
    title: "Secure by default",
    desc: "Bank-grade encryption, daily backups and full audit trails."
  },
  {
    icon: Rocket,
    title: "Built to scale",
    desc: "From a single shop to a chain of stores, without changing tools."
  }
];
function WhyKasiPOS() {
  return /* @__PURE__ */ jsx("section", { id: "why", className: "border-b border-border bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary", children: "Why KasiPOS" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-4xl font-semibold tracking-tight md:text-5xl", children: "Why businesses choose KasiPOS" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Six reasons merchants of every size move their day-to-day operations onto KasiPOS — and stay." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-px bg-border md:grid-cols-3", children: whyItems.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-background p-8 transition-colors hover:bg-surface-2",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 text-base font-semibold", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.desc })
        ]
      },
      item.title
    )) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(SocialProof, {}),
    /* @__PURE__ */ jsx(WhyKasiPOS, {}),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
