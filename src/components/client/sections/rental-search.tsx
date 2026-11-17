"use client";

import { useState } from "react";
import { CalendarDays, Search } from "lucide-react";
import styles from "./home-hero.module.css";

function returnDate(pickup: string, duration: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(pickup) || !/^[1-7]$/.test(duration)) return "";
  const date = new Date(`${pickup}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  date.setDate(date.getDate() + Number(duration));
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

export function RentalSearch({ query, pickup, duration }: { query: string; pickup: string; duration: string }) {
  const [pickupDate, setPickupDate] = useState(pickup);
  const [rentalDuration, setRentalDuration] = useState(duration);
  const deadline = returnDate(pickupDate, rentalDuration);

  return (
    <form action="/#katalog" method="get" role="search" aria-label="Cari perlengkapan sewa" className={styles.search}>
      <div className={styles.field}>
        <label htmlFor="rental-pickup">Tanggal Ambil</label>
        <input id="rental-pickup" name="pickup" type="date" value={pickupDate} onChange={(event) => setPickupDate(event.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="rental-duration">Durasi</label>
        <select id="rental-duration" name="duration" value={rentalDuration} onChange={(event) => setRentalDuration(event.target.value)}>
          <option value="">Pilih durasi</option>
          {[1, 2, 3, 4, 5, 6, 7].map((days) => <option key={days} value={days}>{days} hari</option>)}
        </select>
      </div>
      <div className={styles.field}>
        <span id="return-date-label" className={styles.label}>Maks. Pengembalian</span>
        <output aria-labelledby="return-date-label" aria-live="polite" className={styles.returnDate}>
          <CalendarDays aria-hidden="true" />{deadline || "Tanggal kembali"}
        </output>
      </div>
      <div className={styles.field}>
        <label htmlFor="rental-query">Cari</label>
        <input id="rental-query" name="q" type="search" placeholder="Cari peralatan…" defaultValue={query} />
      </div>
      <button type="submit" aria-label="Cari perlengkapan" className={styles.searchButton}><Search aria-hidden="true" /><span className="sm:sr-only">Cari perlengkapan</span></button>
    </form>
  );
}
