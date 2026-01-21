"use client";

import { PRODUCTS, DISTRIBUTOR_INFO } from "@/constants/products";
import { formatIDR } from "@/lib/utils";
import { 
  ShoppingCart, 
  CheckCircle, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  HeartPulse, 
  GraduationCap, 
  ArrowRight,
  Quote
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LandingPage() {
  const featuredProducts = PRODUCTS.filter(
    (p) => p.id === "gomilk" || p.id === "bariklanahitawa200gr"
  );

  // Daftar Gambar Testimoni Lengkap (.jpg)
  const testimonialImages = [
    "/testimoni-1.jpg", "/testimoni-2.jpg", "/testimoni-3.jpg", 
    "/testimoni-4.jpg", "/testimoni-5.jpg", "/testimoni-6.jpg", 
    "/testimoni-7.jpg", "/testimoni-9.jpg", "/testimoni-10.jpg", 
    "/testimoni-11.jpg", "/testimoni-12.jpg", "/testimoni-13.jpg"
  ];

  return (
    <div className="bg-white font-sans text-slate-900 scroll-smooth">
      <Header />
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-gradient-to-br from-green-900 to-green-700 text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-left mb-16 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Keajaiban Susu Kambing Etawa Plus Herbal: Solusi Sehat Alami untuk Keluarga Anda.
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-lg leading-relaxed">
              Hadirkan kesegaran dan manfaat terapi alami dari Gomilk & Hitawa. Pelopor susu kambing etawa plus herbal pertama di Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#katalog" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2">
                Cek Produk Kami
              </a>
              <a href={`https://wa.me/${DISTRIBUTOR_INFO.phone}`} className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl font-bold transition flex items-center gap-2">
                <MessageCircle size={20} /> Hubungi Admin
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative scale-110 md:scale-125">
            <div className="relative flex items-end justify-center">
              <img src="/bariklana-gomilk-200gr.png" alt="Gomilk" className="relative z-20 w-48 md:w-56 drop-shadow-2xl animate-[bounce_4s_infinite_ease-in-out]" />
              <img src="/bariklana-hitawa-200gr.png" alt="Hitawa" className="relative z-10 w-40 md:w-48 -ml-12 mb-4 drop-shadow-2xl animate-[bounce_5s_infinite_ease-in-out]" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. PRODUK UNGGULAN */}
      <section id="katalog" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-2 uppercase tracking-tighter text-green-900">Mengenal Produk Unggulan</h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {featuredProducts.map((p) => (
            <div key={p.id} className="group border border-slate-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-green-900/10 transition-all bg-white relative flex flex-col">
              <div className="bg-slate-50 h-72 rounded-2xl mb-8 flex items-center justify-center overflow-hidden p-6">
                <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-green-600 font-bold text-sm uppercase tracking-widest">{p.tagline}</span>
              <h3 className="text-3xl font-black my-2 text-slate-800">{p.name}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed line-clamp-3 text-sm">{p.description}</p>
              
              <div className="grid grid-cols-1 gap-4 mb-10">
                {p.benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-auto">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Harga</p>
                  <span className="text-2xl font-black text-green-700">{formatIDR(p.price)}</span>
                </div>
                <div className="flex gap-2">
                    <Link href={`/katalog/${p.id}`} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold transition-all text-sm">Detail</Link>
                    <a href={p.waLink} className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all text-sm">
                      <ShoppingCart size={18} /> Pesan
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/katalog" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-green-700 text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all group shadow-sm">
            Lihat Katalog Lengkap
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. USP */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-2 uppercase tracking-tighter text-slate-800">Kenapa Memilih Bariklana?</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Formula Herbal Tinggi", icon: <HeartPulse />, desc: "Racikan herbal lebih tinggi dibanding produk serupa." },
              { title: "Tanpa Bau Amis", icon: <ShieldCheck />, desc: "Teknologi modern untuk rasa gurih alami yang enak." },
              { title: "Legal & Aman", icon: <Star />, desc: "Izin resmi BPOM RI dan sertifikasi Halal MUI." },
              { title: "Rendah Gula", icon: <CheckCircle />, desc: "Aman dikonsumsi harian bahkan untuk diet." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-3 text-slate-800 text-sm leading-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONI (Marquee) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-2 uppercase tracking-tighter text-green-900">Bukti Nyata Khasiat</h2>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Marquee Row */}
        <div className="relative flex overflow-x-hidden border-y border-slate-50 bg-slate-50/50">
          <div className="py-12 animate-marquee flex whitespace-nowrap gap-6">
            {[...testimonialImages, ...testimonialImages].map((src, index) => (
              <div 
                key={index} 
                className="w-64 md:w-80 flex-shrink-0 bg-white rounded-3xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt={`Testimoni ${index + 1}`} 
                  className="w-full h-auto rounded-2xl object-cover aspect-[3/4] shadow-inner"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDUKASI */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center mb-8 rotate-12 shadow-2xl">
            <GraduationCap size={40} className="text-green-900" />
          </div>
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">Susu Kambing vs Susu Sapi</h2>
          <div className="h-1 w-20 bg-amber-500 mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8 w-full text-left">
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] hover:bg-white/15 transition-colors">
              <p className="text-sm leading-relaxed">Struktur protein lebih halus, jauh <strong>lebih mudah dicerna</strong> oleh lambung sensitif.</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] hover:bg-white/15 transition-colors">
              <p className="text-sm leading-relaxed">Kandungan Fluorine 100x lebih tinggi sebagai <strong>antiseptik alami</strong> tubuh.</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] hover:bg-white/15 transition-colors">
              <p className="text-sm leading-relaxed"><strong>Rendah laktosa</strong>, solusi bagi Anda yang sering mulas saat minum susu sapi.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}