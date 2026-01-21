"use client";

import { useState } from "react";
import { PRODUCTS } from "@/constants/products";
import { formatIDR } from "@/lib/utils";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // Import Header Komponen

const CATEGORIES: Category[] = ["Susu", "Madu", "Suplemen", "Bodycare", "Kopi"];

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "Semua">("Semua");

  const filteredProducts = activeCategory === "Semua" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HEADER UTAMA (Sticky) */}
      <Header />

      {/* 2. SUB-HEADER (Kategori Filter) */}
      <div className="bg-white border-b sticky top-[65px] z-40"> {/* top disesuaikan dengan tinggi Header */}
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">
              Katalog <span className="text-green-700">Produk</span>
            </h1>
            
            {/* Filter Kategori */}
            <div className="overflow-x-auto flex gap-2 no-scrollbar pb-2 md:pb-0">
              <button 
                onClick={() => setActiveCategory("Semua")}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                  activeCategory === "Semua" 
                  ? 'bg-green-700 text-white border-green-700 shadow-md shadow-green-900/20' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-green-300'
                }`}
              >
                Semua
              </button>
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                    activeCategory === cat 
                    ? 'bg-green-700 text-white border-green-700 shadow-md shadow-green-900/20' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-green-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. GRID PRODUK */}
      <main className="flex-grow max-w-6xl mx-auto px-6 mt-10 mb-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-green-900/10 transition-all flex flex-col">
                
                {/* Link ke Detail Produk */}
                <Link href={`/katalog/${p.id}`} className="block flex-grow">
                  <div className="aspect-square bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-green-700 shadow-sm uppercase tracking-widest border border-green-100">
                        {p.category}
                      </span>
                    </div>
                    {/* Visual Overlay */}
                    <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="bg-white text-green-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                          <Search size={20} strokeWidth={3} />
                       </div>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col">
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1 opacity-70">
                      Bariklana Indonesia
                    </p>
                    <h3 className="font-bold text-slate-800 text-sm md:text-base mb-2 group-hover:text-green-700 transition-colors line-clamp-2 leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-green-700 font-black text-lg">
                      {formatIDR(p.price)}
                    </p>
                  </div>
                </Link>

                {/* Tombol Pesan */}
                <div className="px-5 pb-6 mt-auto">
                  <a 
                    href={p.waLink} 
                    className="w-full bg-slate-900 text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg active:scale-95"
                  >
                    <ShoppingCart size={14} /> Pesan
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                <ShoppingCart size={48} />
            </div>
            <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-sm">Produk belum tersedia</p>
            <p className="text-slate-400 text-xs mt-2">Nantikan koleksi terbaik kami di kategori {activeCategory}.</p>
            <button 
              onClick={() => setActiveCategory("Semua")}
              className="mt-8 text-green-700 font-bold text-sm underline"
            >
              Lihat Semua Produk
            </button>
          </div>
        )}
      </main>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}