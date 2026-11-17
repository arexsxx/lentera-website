import Link from "next/link";
import { Button } from "@/components/ui/button";
import { STORE_CONTACT } from "@/lib/store-contact";

export function CTAFooter() {
  return (
    <section id="mulai-sewa" className="scroll-mt-24 bg-background px-4 pb-12 md:pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-xl bg-foreground px-5 py-8 text-white [--ring:#FFFFFF] md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-lg">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Siap berangkat?</h2>
          <p className="mt-3 text-sm leading-7 text-white/80">Ceritakan tujuan dan jumlah rombonganmu. Kami bantu pilih perlengkapan untuk perjalananmu.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
          <Button asChild size="lg">
            <a href={STORE_CONTACT.whatsappUrl}>Sewa via WhatsApp</a>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <Link href="/#katalog">Lihat Katalog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
