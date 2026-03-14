import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden transition-colors duration-500">
        <ThemeProvider attribute="data-theme" defaultTheme="winter" enableSystem={false} themes={['winter', 'summer']}>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
