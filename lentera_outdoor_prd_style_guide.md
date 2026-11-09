# Product Requirements Document (PRD) & Design System

**Project Name:** Lentera Outdoor Rental Platform

**Document Version:** 1.2 (Prioritas Mobile-first Customer)

**Target Platform:** Web Application (Mobile-first Klien, Responsive Desktop Admin)

**Tech Stack:** Next.js (App Router), Supabase, Tailwind CSS, Shadcn UI, Framer Motion

## 1. Product Overview (Visi & Misi)

Membangun platform terpadu untuk penyewaan alat-alat outdoor (camping, hiking, dll). Sistem ini dirancang dengan pendekatan *mobile-first* untuk mempermudah pelanggan menyewa barang melalui *smartphone*, sekaligus menyediakan *dashboard* desktop yang efisien bagi pengelola (Admin) untuk melacak pesanan dan inventaris dalam satu database (*Supabase*).

### 1.1. Target Pengguna

* **Klien (Customer):** Pendaki, anak muda, atau keluarga yang membutuhkan alat outdoor. Mereka butuh alur pemesanan yang cepat, antarmuka yang ramah sentuhan (layar HP), dan informasi ketersediaan yang akurat.

* **Admin (Pengelola):** Pemilik atau staf toko. Membutuhkan tabel data yang jelas, manajemen status pesanan yang mudah, dan visibilitas stok barang.

## 2. Core Features (Ruang Lingkup Fitur)

### 2.1. Client-Side (Etalase & Transaksi - Mobile First)

* **Katalog Produk:** Menampilkan daftar alat yang bisa difilter berdasarkan kategori (Tenda, Carrier, Memasak, dll).
* **Detail Produk & Ketersediaan:** Menampilkan deskripsi, harga per hari, dan *badge* ketersediaan stok.
* **Sistem Keranjang/Booking:** Pemilihan tanggal sewa (Mulai - Selesai) yang akan mengecek stok secara *real-time*.
* **Checkout:** Pengisian data diri ringkas, metode pembayaran (WhatsApp, Transfer).
* **Profil & Riwayat Pesanan:** Klien dapat melihat status pesanannya.

### 2.2. Admin-Side (Dashboard Pengelolaan)

* **Overview/Statistik:** Menampilkan total pesanan hari ini, barang yang sedang disewa, dan pemasukan.
* **Manajemen Produk (CRUD):** Tambah/edit alat, set harga, set total stok fisik, dan *toggle* status aktif/non-aktif.
* **Manajemen Pesanan:** Tabel untuk memproses pesanan masuk.
* **Manajemen Pelanggan:** Melihat data profil klien.

## 3. Design System & Style Guide (Panduan Desain)

### 3.1. Design Philosophy: Minimalist & Eye-Catching
* **Whitespace (Ruang Kosong):** Sesuaikan ruang dengan ukuran layar. Di HP gunakan gutter 16px, padding kartu 12px, gap 12px, dan jarak antar section 40–48px. Padding besar seperti `p-8` atau `gap-6` digunakan mulai tablet/desktop agar katalog di HP tetap mudah dipindai.
* **Fokus pada Konten:** Gambar produk harus berkualitas tinggi dan memiliki *background* yang bersih (atau transparan).
* **Aksi yang Jelas:** Dalam satu layar ponsel, usahakan hanya ada satu tombol berwana **Blaze Orange** agar mata pengguna langsung tertuju ke sana (Call-to-Action yang kuat).

### 3.2. Color Palette

1. **Blaze Orange (`#FF5B04`) - Primary:** Tombol utama (Call to Action), icon aktif, indikator perhatian.
2. **Warm White (`#FCFBF8`) - Background:** Latar halaman terang dan bersih. Gunakan putih untuk kartu, serta oranye transparan untuk highlight lembut. Wild Sand (`#E4EEF0`) dapat digunakan sebagai warna sekunder seperlunya.
3. **Mirage (`#16232A`) - Foreground / Teks Utama:** Teks utama (heading dan body), tombol sekunder.
4. **Deep Sea Green (`#075056`) - Accent / Tertiary:** Elemen navigasi, *badge* status khusus.

### 3.3. Typography

* **Heading Font:** `Outfit` (Logo teks, H1, H2, H3, Judul Produk, Angka harga).
* **Body Font:** `Plus Jakarta Sans` (Teks paragraf, deksripsi, label form, teks tombol).

## 4. Technical Implementation Guide (Panduan Koding)

### 4.0. Prioritas Mobile-first & Kriteria Penerimaan

Mayoritas customer menggunakan smartphone. Desain dan implementasikan layar HP terlebih dahulu; breakpoint `md:` dan `lg:` memperluas tampilan untuk tablet/desktop. Dashboard admin tetap dioptimalkan untuk desktop.

* **Ukuran acuan:** Verifikasi pada lebar 320, 360, 390, dan 430px, kemudian tablet 768px dan desktop 1280px. Halaman tidak boleh bergeser horizontal; hanya daftar kategori yang boleh digeser mendatar.
* **Navigasi ibu jari:** Sediakan navigasi bawah untuk customer dengan target sentuh minimal 44×44px dan label yang jelas. Saat ini gunakan Beranda, Katalog, Paket, dan Bantuan yang sudah tersedia. Keranjang dan Profil menggantikannya setelah alur tersebut siap. Area konten harus memiliki ruang bawah agar tidak tertutup navigasi, termasuk safe area iPhone.
* **Header & hero:** Header ringkas, hero tidak menghabiskan satu layar HP, teks tidak terpotong, dan satu CTA utama langsung menuju katalog. Gunakan satu tombol oranye dominan dalam satu layar; aksi navigasi lain cukup netral.
* **Katalog:** Dua kolom pada HP, jarak 12px, nama produk hingga dua baris, harga per hari dan stok mudah dibaca. Stok fisik katalog bersumber dari kolom `products.stock`. Kategori ditampilkan dalam satu baris yang dapat digeser, dengan target sentuh minimal 44px. Filter yang ditampilkan harus benar-benar bekerja.
* **Gambar:** Gunakan gambar responsif, lazy loading untuk produk, dan placeholder jika foto belum tersedia. Prioritaskan hanya gambar hero; hindari efek parallax berat pada HP.
* **Form booking/checkout:** Satu kolom, label tetap terlihat, font input minimal 16px, keyboard sesuai jenis input, dan pesan kesalahan dekat field. Ringkasan tanggal, jumlah, dan total harga terlihat sebelum konfirmasi. Cek ketersediaan berdasarkan tanggal sebelum menerima pesanan.
* **Aksesibilitas:** Dukung zoom, focus keyboard yang terlihat, label tombol ikon, kontras teks yang jelas, serta `prefers-reduced-motion`. Jangan mengandalkan hover untuk informasi atau aksi.
* **Validasi:** Uji navigasi, filter kategori, tampilan stok, scroll katalog, dan area aman navigasi pada HP. Pastikan desktop tetap berfungsi. Fitur yang belum siap tidak boleh diarahkan ke halaman 404.

### 4.1. Setup Font di `src/app/layout.tsx`

```tsx
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="font-jakarta text-foreground bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
```

### 4.2. Setup Variabel Warna (Shadcn / Tailwind) di `src/app/globals.css`

```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 40 33% 98%; /* Warm White */
    --foreground: 201 31% 13%; /* Mirage */
    --card: 0 0% 100%;
    --card-foreground: 201 31% 13%;
    --primary: 21 100% 51%; /* Blaze Orange */
    --primary-foreground: 0 0% 100%;
    --accent: 184 85% 18%; /* Deep Sea Green */
    --accent-foreground: 0 0% 100%;
    --border: 201 20% 85%;
    --input: 201 20% 85%;
    --ring: 21 100% 51%;
    --radius: 0.5rem;
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-jakarta), sans-serif;
  }
  h1, h2, h3, h4, h5, h6, .font-heading {
    font-family: var(--font-outfit), sans-serif;
  }
}
```

### 4.3. Implementasi Animasi & Efek Parallax

Untuk menjaga desain tetap minimalis namun *eye-catching*, kita akan menggunakan parallax pada bagian **Hero Section** (Bagian paling atas website) atau pada *banner* pemisah kategori.

**Opsi 1: CSS Murni (Tailwind) - Ringan & Simple**
Gunakan utilitas `bg-fixed` dari Tailwind untuk gambar *background*. Saat di-scroll, gambar akan terlihat diam di tempat sementara konten di bawahnya bergerak menimpa gambar tersebut.
*Catatan:* Pada beberapa *browser* HP (iOS Safari), `bg-fixed` terkadang tidak mulus, disarankan mematikannya di mobile (`bg-local md:bg-fixed`).

```tsx
<section className="relative w-full h-[60vh] bg-[url('/hero-image.jpg')] bg-cover bg-center bg-local md:bg-fixed">
  {/* Overlay transparan agar teks mudah dibaca */}
  <div className="absolute inset-0 bg-mirage/40"></div>
  
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Jelajahi Alam Tanpa Batas</h1>
    <p className="text-lg md:text-xl mb-8">Sewa perlengkapan outdoor berkualitas dengan mudah dan cepat.</p>
    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg shadow-lg">
      Mulai Petualangan
    </Button>
  </div>
</section>
```

**Opsi 2: Parallax Dinamis dengan Framer Motion**
Jika klien ingin teks atau gambar yang bergerak perlahan sesuai dengan kecepatan *scroll* (*true parallax*), kita perlu menginstal `framer-motion`.
*Gunakan ini secukupnya saja agar performa website tidak menurun.*

```bash
npm install framer-motion
```
*(Lihat dokumentasi Framer Motion tentang `useScroll` dan `useTransform` untuk memanipulasi nilai `y` pada elemen saat di-scroll).*
