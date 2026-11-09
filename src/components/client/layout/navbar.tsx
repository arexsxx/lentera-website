"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, ShoppingBasket, User, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";

const NAV_LINKS = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Katalog", href: "/#katalog" },
  { name: "Paket sewa", href: "/#paket" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 font-jakarta",
        isScrolled
          ? "bg-[#0a1114]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent border-transparent",
      )}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF5B04] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* TOP BAR  */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, height: 44 }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex w-full text-white/80 px-4 md:px-12 items-center justify-start gap-10 text-[13px] border-b border-white/10 bg-transparent"
          >
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
              <Phone className="h-3.5 w-3.5 group-hover:text-[#FF5B04] transition-colors" />
              <span>085706072574</span>
            </div>
            <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
              <Mail className="h-3.5 w-3.5 group-hover:text-[#FF5B04] transition-colors" />
              <span>lenteraoutdoor@gmail.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN NAVBAR */}
      <div
        className={cn(
          "container mx-auto px-4 md:px-12 flex items-center justify-between transition-all duration-500",
          isScrolled ? "py-3 md:py-4" : "py-3 md:py-5",
        )}
      >
        <Logo className="text-white hover:opacity-90" />

        {/* NAVIGASI MENU UTAMA */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-jakarta text-[15px] font-medium tracking-wide transition-colors py-2 text-white/90 hover:text-[#FF5B04]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* AKSI DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-xl px-5 h-10 font-jakarta font-semibold transition-all group bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
          >
            <User className="mr-2 h-4.5 w-4.5 transition-colors" />
            Masuk
          </Button>

          <Button
            size="icon"
            className="rounded-xl h-10 w-11.5 bg-[#FF5B04] text-white hover:bg-[#FF5B04]/90 hover:scale-105 transition-all shadow-none"
          >
            <ShoppingBasket className="h-5.5 w-5.5" />
          </Button>
        </div>

        {/* AKSI MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="rounded-xl h-11 w-11 text-white hover:bg-white/10"
          >
            <a href="https://wa.me/6285706072574" aria-label="Hubungi Lentera melalui WhatsApp"><Phone aria-hidden="true" className="h-5 w-5" /></a>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-full h-11 w-11 text-white hover:bg-white/10",
              )}
              aria-label="Buka Menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] bg-background border-l-border/20 px-5 pt-12 pb-[calc(24px+env(safe-area-inset-bottom))]"
            >
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <nav className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-heading font-medium transition-colors border-b border-foreground/10 pb-4 text-foreground hover:text-[#FF5B04]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
