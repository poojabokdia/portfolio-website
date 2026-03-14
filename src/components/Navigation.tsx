"use client";

import Link from "next/link";
import { LayoutGrid, Coffee, PenTool, MousePointerClick, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between text-sm font-medium tracking-tight transition-transform duration-500 ${
          isTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-extrabold text-xl transition-transform group-hover:rotate-12">
              P.
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-nav-link font-semibold">
            <Link href="#home" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="#experience" className="hover:text-foreground transition-colors">Experience</Link>
            <Link href="#work" className="hover:text-foreground transition-colors">Work</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'summer' ? 'winter' : 'summer')}
              className="p-2.5 rounded-full bg-border-subtle hover:bg-border-strong text-foreground transition-colors flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'summer' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          )}
          <Link href="#contact" className="px-5 py-2.5 bg-border-subtle text-foreground hover:bg-foreground hover:text-background border border-border-strong rounded-lg transition-all duration-300">
            Say Hello
          </Link>
        </div>
      </nav>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] hidden md:flex items-center gap-2 p-2 glass-nav rounded-2xl shadow-2xl">
        <div className="flex items-center gap-1 pr-4 border-r border-border-strong">
          <Link href="#home" className="p-3 hover:bg-border-subtle rounded-xl transition-all group relative" title="Home">
             <MousePointerClick className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="#about" className="p-3 hover:bg-border-subtle rounded-xl transition-all group relative" title="About">
            <Coffee className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="#experience" className="p-3 hover:bg-border-subtle rounded-xl transition-all group relative" title="Experience">
             <PenTool className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="#work" className="p-3 hover:bg-border-subtle rounded-xl transition-all group relative" title="Work">
            <LayoutGrid className="w-5 h-5 text-foreground" />
          </Link>
        </div>
        <Link href="#contact" className="px-6 py-3 bg-accent hover:opacity-90 text-white font-bold text-sm tracking-wide uppercase rounded-xl transition-all">
          Contact
        </Link>
      </div>
    </>
  );
}
