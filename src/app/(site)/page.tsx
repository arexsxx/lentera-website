import { HeroSection } from "@/components/client/sections/hero-section";
import { FeaturedProducts } from "@/components/client/sections/featured-products";
import { PackageBundles } from "@/components/client/sections/package-bundles";
import { WhyChooseUs } from "@/components/client/sections/why-choose-us";
import { GoogleMapReview } from "@/components/client/sections/google-map-review";
import { CTAFooter } from "@/components/client/sections/cta-footer";
import { BrandMarquee } from "@/components/client/sections/brand-marquee";

export default async function HomePage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim().slice(0, 120) : "";
  const pickup = typeof params.pickup === "string" && /^\d{4}-\d{2}-\d{2}$/.test(params.pickup) ? params.pickup : "";
  const duration = typeof params.duration === "string" && /^[1-7]$/.test(params.duration) ? params.duration : "";
  return (
    <main id="konten-utama" tabIndex={-1} className="flex min-h-screen w-full flex-col bg-background">
      <HeroSection query={query} pickup={pickup} duration={duration} />
      <BrandMarquee />
      
      <FeaturedProducts searchQuery={query} rentalDatesSelected={Boolean(pickup && duration)} />
      
      <PackageBundles />
      <WhyChooseUs />
      <GoogleMapReview />
      <CTAFooter />
    </main>
  );
}
