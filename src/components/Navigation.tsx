"use client";

import Link from "next/link";
import { LayoutGrid, Coffee, PenTool, MousePointerClick } from "lucide-react";

export function Navigation() {
  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-between text-sm font-medium tracking-tight">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-extrabold text-xl transition-transform group-hover:rotate-12">
              P.
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-[#888888]">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link href="#contact" className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#333333] rounded-lg transition-all duration-300">
            Say Hello
          </Link>
        </div>
      </nav>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] hidden md:flex items-center gap-2 p-2 glass-nav rounded-2xl shadow-2xl">
        <div className="flex items-center gap-1 pr-4 border-r border-[#333333]">
          <Link href="#home" className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Home">
             <MousePointerClick className="w-5 h-5 text-white" />
          </Link>
          <Link href="#about" className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="About">
            <Coffee className="w-5 h-5 text-white" />
          </Link>
          <Link href="#experience" className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Experience">
             <PenTool className="w-5 h-5 text-white" />
          </Link>
          <Link href="#work" className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Work">
            <LayoutGrid className="w-5 h-5 text-white" />
          </Link>
        </div>
        <Link href="#contact" className="px-6 py-3 bg-[#FF6B50] hover:bg-[#E55A40] text-black font-bold text-sm tracking-wide uppercase rounded-xl transition-all">
          Contact
        </Link>
      </div>
    </>
  );
}
