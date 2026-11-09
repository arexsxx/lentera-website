"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Compass, Tent, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_LINKS = [
  { name: "Beranda", href: "/#beranda", section: "beranda", icon: Home },
  { name: "Katalog", href: "/#katalog", section: "katalog", icon: Compass },
  { name: "Paket", href: "/#paket", section: "paket", icon: Tent },
  { name: "Bantuan", href: "https://wa.me/6285706072574", section: null, icon: MessageCircle },
];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    for (const link of MOBILE_LINKS) {
      const section = link.section && document.getElementById(link.section);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Navigasi utama ponsel" className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 bg-white/95 backdrop-blur-md border-t border-border pb-[env(safe-area-inset-bottom)] px-2">
      {MOBILE_LINKS.map((link) => {
        const isActive = activeSection === link.section;
        const Icon = link.icon;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "min-h-16 min-w-11 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors",
              isActive ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-foreground"
            )}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
            <span className="font-jakarta text-xs font-semibold">
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
