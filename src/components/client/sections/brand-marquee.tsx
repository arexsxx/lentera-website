"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import styles from "./home-hero.module.css";

const BRANDS = [
  { name: "Greenforest", file: "greenforest.png", className: styles.greenforest },
  { name: "Antarestar", file: "antarestar.png", className: styles.antarestar },
  { name: "Zarventure", file: "za.jpg", className: styles.zarventure },
  { name: "Credifox", file: "credifox.png", className: styles.credifox },
  { name: "Seekday", file: "seekday.jpg", className: styles.seekday },
];

export function BrandMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="brands-title" className={styles.brands}>
      <div className={styles.brandsHeading}>
        <h2 id="brands-title">Our Rent Product</h2>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track} data-paused={paused}>
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className={styles.brandGroup}>
              {BRANDS.map((brand) => (
                <li key={brand.name} className={styles.brandSlot}>
                  <div className={`${styles.brandImage} ${brand.className}`}>
                    <Image src={`/brand/${brand.file}`} alt={copy === 0 ? brand.name : ""} fill sizes="180px" className="object-contain" />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
