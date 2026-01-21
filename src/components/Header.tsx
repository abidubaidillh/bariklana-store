// src/components/Header.tsx
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group">
          <h3 className="text-slate-900 font-black text-xl tracking-tighter transition-colors group-hover:text-green-700">
            BARIKLANA<span className="text-amber-500 group-hover:text-green-600 transition-colors">STORE</span>
          </h3>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="/" className="hover:text-green-700 transition-colors">Beranda</Link>
          <Link href="/katalog" className="hover:text-green-700 transition-colors">Produk</Link>
          <Link href="#kemitraan" className="hover:text-green-700 transition-colors">Kemitraan</Link>
        </div>

        {/* ACTION */}
        <Link 
          href="/katalog" 
          className="bg-green-700 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 active:scale-95"
        >
          <ShoppingBag size={16} />
          <span className="hidden sm:inline">Belanja Sekarang</span>
        </Link>
      </div>
    </nav>
  );
}