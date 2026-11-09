// TIDAK ADA "use client" DI SINI. Ini murni Server Component.
import { HeroSection } from "@/components/client/sections/hero-section";
import { FeaturedProducts } from "@/components/client/sections/featured-products";
import { PackageBundles } from "@/components/client/sections/package-bundles";
import { WhyChooseUs } from "@/components/client/sections/why-choose-us";
import { GoogleMapReview } from "@/components/client/sections/google-map-review";
import { CTAFooter } from "@/components/client/sections/cta-footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-background">
      {/* Client Component: Memuat Animasi & Gambar */}
      <HeroSection />
      
      {/* Server Component: Memuat Data dari Supabase */}
      <FeaturedProducts />
      
      {/* Client/Static Component: Memuat Paket Bundling */}
      <PackageBundles />
      <WhyChooseUs />
      <GoogleMapReview />
      <CTAFooter />
    </main>
  );
}
