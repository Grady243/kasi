import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: "Home",
      stats: "Stats",
      why: "Why KasiPOS",
      features: "Features",
      how: "How it works",
      customers: "Customers",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Modern Point Of Sales",
      title: "Simplify your sales with KasiPOS",
      desc: "A modern point-of-sale system to manage sales, inventory and reports effortlessly — across every device, in every store.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Explore features",
    },
    socialProof: {
      badge: "Trusted by merchants",
      title: "Numbers that speak for themselves",
      desc: "From neighborhood shops to growing chains — KasiPOS keeps commerce running fast, reliable and always on.",
    },
    whyKasiPOS: {
      badge: "Why KasiPOS",
      title: "Why businesses choose KasiPOS",
      desc: "Six reasons merchants of every size move their day-to-day operations onto KasiPOS — and stay.",
    },
    features: {
      badge: "Features",
      title: "Everything you need to run your shop",
      desc: "Built for merchants who want clarity, speed and control without the bloat.",
      items: {
        sales: {
          title: "Sales Management",
          desc: "Track every sale in real time with a clean, fast register.",
          benefit: "Close more transactions per hour without losing a single line item.",
        },
        inventory: {
          title: "Inventory Tracking",
          desc: "Stock levels update automatically with each sale or restock.",
          benefit: "Never oversell again — get low-stock alerts before you run out.",
        },
        analytics: {
          title: "Analytics & Reports",
          desc: "Daily, weekly and monthly insights on revenue and performance.",
          benefit: "Make decisions backed by data, not guesswork.",
        },
        checkout: {
          title: "Fast Checkout System",
          desc: "Optimised flow that gets customers paid in under five seconds.",
          benefit: "Shorter queues, happier customers, more revenue per shift.",
        },
        sync: {
          title: "Multi-device Sync",
          desc: "Phone, tablet, desktop — your data stays in perfect sync.",
          benefit: "Run your business from anywhere, switch devices instantly.",
        },
        security: {
          title: "Secure Payments",
          desc: "End-to-end encryption with PCI-DSS compliant infrastructure.",
          benefit: "Sleep well knowing every transaction is protected.",
        }
      }
    },
    stats: {
      merchants: {
        label: "Active Merchants",
        desc: "Shops growing with KasiPOS every day.",
      },
      uptime: {
        label: "System Uptime",
        desc: "Reliable infrastructure you can count on.",
      },
      monitoring: {
        label: "Sales Monitoring",
        desc: "Always-on visibility across every register.",
      },
      transactions: {
        label: "Transactions",
        desc: "Processed securely, every single week.",
      }
    },
    whyItems: {
      checkout: {
        title: "Ultra-fast checkout",
        desc: "Process sales in under 5 seconds with a register built for speed.",
      },
      inventory: {
        title: "Real-time inventory",
        desc: "Stock updates the instant a sale closes — across every device.",
      },
      dashboard: {
        title: "Intuitive dashboard",
        desc: "A clean interface that surfaces what matters, hides what doesn't.",
      },
      devices: {
        title: "Works on every device",
        desc: "Tablet, phone or laptop — same experience, same data.",
      },
      secure: {
        title: "Secure by default",
        desc: "Bank-grade encryption, daily backups and full audit trails.",
      },
      scale: {
        title: "Built to scale",
        desc: "From a single shop to a chain of stores, without changing tools.",
      }
    },
    steps: {
      step1: {
        title: "Create Your Store",
        desc: "Set up your store quickly with a simple onboarding process.",
      },
      step2: {
        title: "Add Your Products",
        desc: "Manage inventory and organize products in real time.",
      },
      step3: {
        title: "Start Selling Instantly",
        desc: "Process payments and monitor sales live.",
      }
    },
    testimonials: {
      badge: "Customers",
      title: "Loved by merchants worldwide",
      desc: "Real teams, real shops, real numbers. Here's what they say about KasiPOS.",
      items: {
        amina: {
          quote: "KasiPOS changed the way we manage our store. Everything is faster — checkout, restocking, reports.",
          role: "Store Manager",
        },
        marcus: {
          quote: "We switched from a clunky legacy POS and never looked back. The dashboard alone saves me hours every week.",
          role: "Owner",
        },
        sofia: {
          quote: "Multi-device sync is flawless. I can ring up a sale on a tablet, then check the books from my laptop at home.",
          role: "Co-founder",
        },
        david: {
          quote: "Inventory used to be our biggest headache. With KasiPOS we know exactly what's on the shelf in real time.",
          role: "Operations Lead",
        }
      }
    },
    footer: {
      copy: "© 2026 KasiPOS. Built for modern commerce.",
      github: "GitHub",
      docs: "Documentation",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      stats: "Stats",
      why: "Pourquoi KasiPOS",
      features: "Fonctions",
      how: "Fonctionnement",
      customers: "Clients",
      getStarted: "Démarrer",
    },
    hero: {
      badge: "Point de vente moderne",
      title: "Simplifiez vos ventes avec KasiPOS",
      desc: "Un système de point de vente moderne pour gérer vos ventes, vos stocks et vos rapports sans effort — sur tous vos appareils, dans tous vos magasins.",
      ctaPrimary: "Démarrer",
      ctaSecondary: "Explorer les fonctions",
    },
    socialProof: {
      badge: "Approuvé par les commerçants",
      title: "Des chiffres qui parlent d'eux-mêmes",
      desc: "Des boutiques de quartier aux chaînes en pleine croissance — KasiPOS assure un commerce rapide, fiable et toujours opérationnel.",
    },
    whyKasiPOS: {
      badge: "Pourquoi KasiPOS",
      title: "Pourquoi les entreprises choisissent KasiPOS",
      desc: "Six raisons pour lesquelles les commerçants de toutes tailles confient leurs opérations quotidiennes à KasiPOS — et y restent.",
    },
    features: {
      badge: "Fonctionnalités",
      title: "Tout ce dont vous avez besoin pour gérer votre boutique",
      desc: "Conçu pour les commerçants qui veulent de la clarté, de la rapidité et du contrôle sans fioritures.",
      items: {
        sales: {
          title: "Gestion des ventes",
          desc: "Suivez chaque vente en temps réel avec une caisse propre et rapide.",
          benefit: "Concluez plus de transactions par heure sans perdre une seule ligne.",
        },
        inventory: {
          title: "Suivi des stocks",
          desc: "Les niveaux de stock se mettent à jour automatiquement à chaque vente.",
          benefit: "Ne vendez plus jamais à découvert — recevez des alertes de stock bas.",
        },
        analytics: {
          title: "Analyses et rapports",
          desc: "Aperçus quotidiens, hebdomadaires et mensuels sur vos revenus.",
          benefit: "Prenez des décisions basées sur des données, pas sur des suppositions.",
        },
        checkout: {
          title: "Paiement rapide",
          desc: "Flux optimisé pour que vos clients paient en moins de cinq secondes.",
          benefit: "Files d'attente plus courtes, clients plus heureux, plus de revenus.",
        },
        sync: {
          title: "Synchronisation multi-appareils",
          desc: "Téléphone, tablette, ordinateur — vos données restent synchronisées.",
          benefit: "Gérez votre entreprise de n'importe où, changez d'appareil instantanément.",
        },
        security: {
          title: "Paiements sécurisés",
          desc: "Chiffrement de bout en bout avec infrastructure conforme PCI-DSS.",
          benefit: "Dormez tranquille en sachant que chaque transaction est protégée.",
        }
      }
    },
    stats: {
      merchants: {
        label: "Commerçants actifs",
        desc: "Des boutiques qui grandissent chaque jour avec KasiPOS.",
      },
      uptime: {
        label: "Disponibilité système",
        desc: "Une infrastructure fiable sur laquelle vous pouvez compter.",
      },
      monitoring: {
        label: "Suivi des ventes",
        desc: "Visibilité 24/7 sur chaque registre.",
      },
      transactions: {
        label: "Transactions",
        desc: "Traitées en toute sécurité, chaque semaine.",
      }
    },
    whyItems: {
      checkout: {
        title: "Paiement ultra-rapide",
        desc: "Traitez les ventes en moins de 5 secondes avec une caisse conçue pour la vitesse.",
      },
      inventory: {
        title: "Inventaire en temps réel",
        desc: "Le stock est mis à jour dès qu'une vente est conclue — sur tous les appareils.",
      },
      dashboard: {
        title: "Tableau de bord intuitif",
        desc: "Une interface claire qui affiche l'essentiel et cache le superflu.",
      },
      devices: {
        title: "Fonctionne sur tout appareil",
        desc: "Tablette, téléphone ou ordinateur — même expérience, mêmes données.",
      },
      secure: {
        title: "Sécurisé par défaut",
        desc: "Chiffrement bancaire, sauvegardes quotidiennes et journaux d'audit complets.",
      },
      scale: {
        title: "Conçu pour évoluer",
        desc: "D'une boutique unique à une chaîne de magasins, sans changer d'outils.",
      }
    },
    steps: {
      step1: {
        title: "Créez votre magasin",
        desc: "Configurez votre boutique rapidement avec un processus simple.",
      },
      step2: {
        title: "Ajoutez vos produits",
        desc: "Gérez l'inventaire et organisez vos produits en temps réel.",
      },
      step3: {
        title: "Vendez instantanément",
        desc: "Traitez les paiements et surveillez vos ventes en direct.",
      }
    },
    testimonials: {
      badge: "Clients",
      title: "Aimé par les commerçants du monde entier",
      desc: "De vraies équipes, de vraies boutiques, de vrais chiffres. Voici ce qu'ils disent de KasiPOS.",
      items: {
        amina: {
          quote: "KasiPOS a changé notre façon de gérer le magasin. Tout est plus rapide — paiement, réapprovisionnement, rapports.",
          role: "Gérante",
        },
        marcus: {
          quote: "Nous avons quitté un ancien POS lourd et nous ne l'avons jamais regretté. Le tableau de bord me fait gagner des heures.",
          role: "Propriétaire",
        },
        sofia: {
          quote: "La synchro multi-appareils est parfaite. Je peux faire une vente sur tablette, puis vérifier les comptes chez moi.",
          role: "Co-fondatrice",
        },
        david: {
          quote: "L'inventaire était notre plus gros casse-tête. Avec KasiPOS, nous savons exactement ce qu'il y a en rayon.",
          role: "Responsable des opérations",
        }
      }
    },
    finalCta: {
      title: "Arrêtez de vous battre avec votre POS. Commencez à faire croître votre entreprise.",
      desc: "Rejoignez des milliers de commerçants utilisant KasiPOS pour des opérations plus rapides, plus légères et plus claires — dès aujourd'hui, sans frais d'installation.",
      ctaPrimary: "Essai gratuit",
      ctaSecondary: "Voir les fonctions",
    },
    footer: {
      copy: "© 2026 KasiPOS. Conçu pour le commerce moderne.",
      github: "GitHub",
      docs: "Documentation",
    },
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
