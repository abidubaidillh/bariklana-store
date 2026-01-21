"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { DISTRIBUTOR_INFO } from "@/constants/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi untuk menutup menu saat link diklik (khusus mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`sticky top-0 z-[100] border-b transition-colors duration-300 ${
      isOpen ? "bg-white border-transparent" : "bg-white/90 backdrop-blur-md border-slate-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-[110]">
        {/* LOGO */}
        <Link href="/" className="group" onClick={closeMenu}>
          <h3 className="text-slate-900 font-black text-xl tracking-tighter transition-colors group-hover:text-green-700">
            BARIKLANA<span className="text-amber-500 group-hover:text-green-600 transition-colors">STORE</span>
          </h3>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="/" className="hover:text-green-700 transition-colors">Beranda</Link>
          <Link href="/katalog" className="hover:text-green-700 transition-colors">Produk</Link>
          <Link href="#kemitraan" className="hover:text-green-700 transition-colors">Kemitraan</Link>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <Link 
            href="/katalog" 
            className="bg-green-700 text-white px-4 md:px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 active:scale-95"
            onClick={closeMenu}
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Belanja</span>
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={toggleMenu}
            className="p-2 text-slate-600 hover:text-green-700 md:hidden transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} className="text-slate-900" /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`
        fixed inset-0 bg-white z-[100] flex flex-col p-8 pt-28 transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? "opacity-100 translate-y-0 visibility-visible" : "opacity-0 -translate-y-full pointer-events-none"}
      `}>
        <div className="flex flex-col gap-8 text-2xl font-black text-slate-800">
          <Link 
            href="/" 
            onClick={closeMenu}
            className="flex items-center justify-between group"
          >
            <span className="group-hover:text-green-700 transition-colors">Beranda</span>
            <div className="h-1 w-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link 
            href="/katalog" 
            onClick={closeMenu}
            className="flex items-center justify-between group"
          >
            <span className="group-hover:text-green-700 transition-colors">Produk</span>
            <div className="h-1 w-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link 
            href="#kemitraan" 
            onClick={closeMenu}
            className="flex items-center justify-between group"
          >
            <span className="group-hover:text-green-700 transition-colors">Kemitraan</span>
            <div className="h-1 w-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>

        <div className="mt-auto pb-10">
          <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Butuh Bantuan?</p>
            <a 
              href={`https://wa.me/${DISTRIBUTOR_INFO.phone}`}
              className="flex items-center justify-center gap-3 bg-green-700 p-4 rounded-xl font-bold text-white shadow-lg shadow-green-900/20 active:scale-95 transition-transform"
            >
              Hubungi CS Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}