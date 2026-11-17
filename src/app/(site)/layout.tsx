import { Navbar } from "@/components/client/layout/navbar";
import { MobileNav } from "@/components/client/layout/mobile-nav";
import { Footer } from "@/components/client/layout/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative pb-[calc(76px+env(safe-area-inset-bottom))] md:pb-0">
      <a href="#konten-utama" className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-white px-4 py-3 text-foreground focus:not-sr-only">Lewati ke konten utama</a>
      <Navbar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}
