# Lentera Outdoor - PRD & Design System
**Version:** 1.2 (Mobile-first Priority)

## 1. Product Overview & Architecture
- **Target Platform:** Web Application (Mobile-first for Clients, Responsive Desktop for Admin Dashboard).
- **Tech Stack:** Next.js (App Router), Supabase, Tailwind CSS, Shadcn UI, and Framer Motion.
- **Client-Side Scope:** Product catalog with filters, product details with real-time stock badges, date-based booking/cart system, simplified checkout (WhatsApp/Transfer), and order history.
- **Admin-Side Scope:** Statistics overview, complete product CRUD (including stock and active toggles), order processing tables, and customer management[cite: 5].

## 2. Core Vibe & Design Philosophy
- **Aesthetic:** Minimalist, clean, modern, and eye-catching.
- **Focus on Content:** Product images must be high quality with clean or transparent backgrounds[cite: 5]. Use moody/dark photography for hero sections.
- **Mobile-First Whitespace:** On mobile, enforce a 16px gutter, 12px card padding, 12px gaps, and 40-48px spacing between sections[cite: 5]. Expand padding (e.g., `p-8` or `gap-6`) starting from tablet/desktop breakpoints so mobile layouts remain scannable[cite: 5].
- **Clear Actions:** On any single mobile screen, limit the UI to exactly one dominant **Blaze Orange** button to ensure a strong, immediate Call-to-Action[cite: 5]. 

## 3. Color Palette (Tailwind Configuration)
Implement these exact variables in your `globals.css` and Tailwind config:
- **Blaze Orange (`#FF5B04`):** Primary Call-to-Action buttons, active states, active icons, and attention indicators[cite: 5].
- **Warm White (`#FCFBF8`):** Main application background for a bright, clean surface[cite: 5].
- **Mirage (`#16232A`):** Foreground/Main text (headings and body) and secondary buttons[cite: 5].
- **Deep Sea Green (`#075056`):** Accent color for navigation elements and special status badges[cite: 5].
- **Wild Sand (`#E4EEF0`):** Secondary backgrounds or soft highlights[cite: 5].
- **Pure White (`#FFFFFF`):** Product cards and testimonial cards[cite: 5].

## 4. Typography (next/font/google)
- **Headings (h1 - h6):** `Outfit`[cite: 5]. Used for Text logos, Headings, Product Titles, and Price numbers[cite: 5].
- **Body Text:** `Plus Jakarta Sans`[cite: 5]. Used for paragraphs, descriptions, form labels, and button text[cite: 5].

## 5. Mobile-First Acceptance Criteria (Crucial for AI)
- **Dimensions:** Design for 320px, 360px, 390px, and 430px widths first[cite: 5]. Horizontal scrolling is strictly forbidden except for the category list[cite: 5].
- **Thumb Navigation:** Implement a bottom navigation bar for clients with a minimum 44x44px touch target (Tabs: Home, Catalog, Packages, Help)[cite: 5]. Ensure main page content has bottom padding to clear this navigation and iOS safe areas[cite: 5].
- **Catalog Layout:** Use a 2-column grid on mobile with a 12px gap[cite: 5]. Truncate product names to a maximum of 2 lines[cite: 5]. Read physical stock from the `products.stock` column[cite: 5].
- **Forms & Inputs:** Checkout/booking forms must be a single column with visible labels[cite: 5]. Use a minimum `16px` font size for inputs to prevent iOS auto-zoom[cite: 5].
- **Accessibility:** Support browser zoom, clear visible keyboard focus, clear contrast, and respect `prefers-reduced-motion`[cite: 5]. Do NOT rely on hover states for critical actions[cite: 5].

## 6. Technical Implementation Snippets

### A. Font Setup (`src/app/layout.tsx`)[cite: 5]
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
