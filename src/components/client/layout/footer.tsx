import { Logo } from "@/components/shared/logo";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { STORE_CONTACT } from "@/lib/store-contact";

export function Footer() {
  return (
    <footer id="kontak" className="scroll-mt-24 bg-[#0a1114] pt-10 md:pt-16 pb-8 px-4 border-t-2 border-primary/70 text-white/70 font-jakarta">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-16">
          
          {/* Kolom Logo & Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="text-white mb-5 w-fit" />
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Lentera Outdoor adalah platform penyewaan perlengkapan camping dan hiking terlengkap dan terpercaya di wilayah Kediri Raya.
            </p>
            <div className="flex gap-4">
              <a href={STORE_CONTACT.whatsappUrl} aria-label="Hubungi Lentera melalui WhatsApp" className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Kolom Link Bantuan */}
          <div>
            <h4 className="font-heading text-white font-bold text-lg mb-3 md:mb-6">Jelajahi Lentera</h4>
            <ul className="text-sm">
              <li><Link href="/#katalog" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">Katalog Perlengkapan</Link></li>
              <li><Link href="/#paket" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">Paket Sewa</Link></li>
              <li><Link href="/#tentang" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#lokasi-ulasan" className="inline-flex items-center min-h-11 hover:text-primary transition-colors">Lokasi & Ulasan</Link></li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div>
            <h4 className="font-heading text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{STORE_CONTACT.region}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+6285706072574" className="min-h-11 inline-flex items-center hover:text-white">{STORE_CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-3 min-w-0">
                <Mail aria-hidden="true" className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${STORE_CONTACT.email}`} className="min-h-11 inline-flex items-center break-all hover:text-white">{STORE_CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Lentera Outdoor. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={STORE_CONTACT.whatsappUrl} className="min-h-11 inline-flex items-center hover:text-primary transition-colors">Bantuan Sewa</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
