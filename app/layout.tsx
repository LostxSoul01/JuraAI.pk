import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JuraAI.pk — Pakistan's legal intelligence platform",
  description: "Search Pakistani case law, draft stronger petitions, and work with verified legal intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
