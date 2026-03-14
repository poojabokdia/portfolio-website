import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Pooja Bokdia | Portfolio",
  description: "Portfolio of Pooja Bokdia, demonstrating experience, work, and hobbies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection-coral overflow-x-hidden bg-[#050505] text-[#ebebeb]">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
