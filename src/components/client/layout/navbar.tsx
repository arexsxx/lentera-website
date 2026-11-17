"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Menu, Phone, ShoppingBasket, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { STORE_CONTACT } from "@/lib/store-contact";

const NAV_LINKS = [
  { name: "Home", href: "/#beranda", section: "beranda" },
  { name: "Catalog", href: "/#katalog", section: "katalog" },
  { name: "Cara sewa", href: "/#paket", section: "paket" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 });
    for (const link of NAV_LINKS) {
      const section = document.getElementById(link.section);
      if (section) observer.observe(section);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinkClass = (active: boolean) => cn(
    "relative inline-flex min-h-11 items-center border-b-2 px-0.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary active:text-primary",
    active ? "border-primary text-primary" : "border-transparent text-white/90",
  );

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 text-white transition-colors duration-150 [--ring:#FFFFFF]", isScrolled ? "bg-foreground" : "bg-black/65")}>
      <div className="hidden border-b border-white/30 px-4 md:block">
        <div className="mx-auto flex min-h-10 max-w-6xl flex-wrap items-center gap-x-8 text-xs text-white/85">
          <a href={`tel:+62${STORE_CONTACT.phone.slice(1)}`} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-primary">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />{STORE_CONTACT.phone}
          </a>
          <a href={`mailto:${STORE_CONTACT.email}`} className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-primary">
            <Mail aria-hidden="true" className="h-4 w-4" />{STORE_CONTACT.email}
          </a>
        </div>
      </div>
      <div className="px-4">
        <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 py-3 md:grid md:min-h-[76px] md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Logo compact className="w-fit" />
          <nav aria-label="Navigasi utama" className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.section} href={link.href} aria-current={activeSection === link.section ? "location" : undefined} onClick={() => setActiveSection(link.section)} className={navLinkClass(activeSection === link.section)}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center justify-end gap-2">
            <Button disabled variant="outline" title="Login belum tersedia" className="hidden gap-2 border-white/60 px-3 text-white disabled:opacity-70 md:inline-flex">
              <UserRound aria-hidden="true" className="h-4 w-4" />
              Masuk <span className="text-[10px] font-normal">Segera</span>
            </Button>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger aria-label="Buka keranjang sewa" className={cn(buttonVariants({ size: "icon" }), "h-[44px] w-[44px]")}>
                <ShoppingBasket aria-hidden="true" className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[90%] border-l-border bg-background px-5 pb-[calc(24px+env(safe-area-inset-bottom))] pt-16 text-foreground [--ring:#16232A]">
                <SheetTitle className="font-heading text-2xl font-semibold">Keranjang sewa</SheetTitle>
                <p className="text-sm leading-7 text-muted-foreground">Belum ada perlengkapan di keranjang. Untuk pemesanan saat ini, pilih perlengkapan di katalog dan hubungi kami melalui WhatsApp.</p>
                <Button asChild variant="outline"><Link href="/#katalog" onClick={() => setIsCartOpen(false)}>Lihat Perlengkapan</Link></Button>
                <Button asChild><a href={STORE_CONTACT.whatsappUrl}>Sewa via WhatsApp</a></Button>
              </SheetContent>
            </Sheet>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-[44px] w-[44px] text-white hover:bg-primary/10 hover:text-primary md:hidden")} aria-label="Buka menu">
                <Menu aria-hidden="true" className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] border-l-border bg-background px-5 pb-[calc(24px+env(safe-area-inset-bottom))] pt-16 text-foreground [--ring:#16232A]">
                <SheetTitle className="mb-6 font-heading text-xl font-semibold">Menu Lentera</SheetTitle>
                <nav aria-label="Menu ponsel" className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <Link key={link.section} href={link.href} onClick={() => { setIsMobileMenuOpen(false); setActiveSection(link.section); }} aria-current={activeSection === link.section ? "location" : undefined} className="flex min-h-12 items-center border-b-2 border-border py-3 font-medium text-foreground decoration-primary underline-offset-8 transition-colors hover:border-primary hover:underline aria-[current=location]:border-primary">
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
