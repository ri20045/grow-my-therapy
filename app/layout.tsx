import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica & California",
  description:
    "Therapy for adults navigating anxiety, stress, trauma, burnout, and perfectionism in Santa Monica and through secure California telehealth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
