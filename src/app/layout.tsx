import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import type { Viewport } from "next";
import { cn } from "@/lib/utils";
import "./globals.css"; // Pastikan CSS global diimpor di root layout

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#16232A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn(outfit.variable, plusJakarta.variable)}>
      <body className="font-jakarta text-foreground bg-background antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
