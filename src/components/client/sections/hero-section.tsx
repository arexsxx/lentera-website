import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { RentalSearch } from "./rental-search";
import styles from "./home-hero.module.css";

export function HeroSection({ query = "", pickup = "", duration = "" }: {
  query?: string;
  pickup?: string;
  duration?: string;
}) {
  return (
    <section id="beranda" aria-labelledby="hero-title" className={styles.hero}>
      <Image src="/images/hero-bg.jpg" alt="" fill preload sizes="100vw" className={styles.background} />
      <div className={styles.shade} />
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>LENTERA<br />OUTDOOR</h1>
        <ul className={styles.benefits}>
          {["Stock Lengkap", "Praktis", "Layanan khusus Kediri Raya"].map((benefit) => (
            <li key={benefit}><CircleCheck aria-hidden="true" />{benefit}</li>
          ))}
        </ul>
        <RentalSearch query={query} pickup={pickup} duration={duration} />
      </div>
      <div className={styles.hiker}>
        <Image src="/images/hero2.png" alt="" fill sizes="(max-width: 767px) 65vw, 38vw" className="object-contain object-bottom" />
      </div>
    </section>
  );
}
