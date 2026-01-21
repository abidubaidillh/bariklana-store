import { PRODUCTS, DISTRIBUTOR_INFO } from "@/constants/products";
import { formatIDR } from "@/lib/utils";
import { 
  ArrowLeft, 
  ShoppingCart, 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  MessageCircle,
  Star,
  Zap
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Definisikan tipe params sebagai Promise untuk Next.js 15
interface Props {
  params: Promise<{ id: string }>;
}

export default async function DetailProdukPage({ params }: Props) {
  // Unwrapping params (Standar Next.js 15)
  const { id } = await params;

  // Mencari produk berdasarkan ID dari URL
  const product = PRODUCTS.find((p) => p.id === id);

  // Jika produk tidak ditemukan
  if (!product) {
    notFound();
  }

  // Logika pengecekan apakah ada data keunggulan (advantages) yang valid
  const hasValidAdvantages = 
    product.advantages && 
    product.advantages.length > 0 && 
    product.advantages[0] !== "-";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. HEADER UTAMA */}
      <Header />

      {/* 2. BREADCRUMB / NAVIGASI KECIL */}
      <nav className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link href="/" className="hover:text-green-700 transition-colors">Beranda</Link>
          <span>/</span>
          <Link href="/katalog" className="hover:text-green-700 transition-colors">Katalog</Link>
          <span>/</span>
          <span className="text-green-700">{product.name}</span>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        {/* Tombol Kembali Mobile-Friendly */}
        <Link 
          href="/katalog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-green-700 transition-colors font-bold text-sm mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Katalog
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* BAGIAN KIRI: GAMBAR PRODUK */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-50 rounded-[3.5rem] -rotate-2 transition-transform group-hover:rotate-0"></div>
            <div className="relative bg-white rounded-[3rem] p-10 aspect-square flex items-center justify-center overflow-hidden border border-slate-100 shadow-xl shadow-green-900/5">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-8 left-8 bg-green-700 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
                {product.category}
              </span>
            </div>
          </div>

          {/* BAGIAN KANAN: INFO PRODUK */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-amber-500"></div>
                <p className="text-amber-600 font-black tracking-[0.2em] uppercase text-[10px]">
                  {product.tagline}
                </p>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-4xl font-black text-green-700 tracking-tighter">
                  {formatIDR(product.price)}
                </span>
                <div className="flex flex-col">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase text-center">
                    Tersedia
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold mt-1 ml-1">Stok: {product.stock}</span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg border-l-4 border-slate-100 pl-6 py-2">
                {product.description}
              </p>
            </div>

            {/* KELEBIHAN PRODUK (Hanya tampil jika ada data valid) */}
            {hasValidAdvantages && (
              <div className="mb-10">
                <h3 className="font-black text-slate-800 mb-5 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <Zap className="text-amber-500 fill-amber-500" size={16} />
                  Fitur Unggulan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.advantages.map((adv, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-amber-200 transition-all">
                      <Star className="text-amber-500 fill-amber-500 shrink-0" size={14} />
                      <span className="text-xs font-bold text-slate-700 leading-tight">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MANFAAT UTAMA */}
            <div className="bg-green-50/50 rounded-[2.5rem] p-8 lg:p-10 mb-10 border border-green-100">
              <h3 className="font-black text-green-900 mb-6 flex items-center gap-3 uppercase tracking-widest text-xs">
                <CheckCircle className="text-green-600" size={20} />
                Manfaat Kesehatan
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-[1.5rem] shadow-sm border border-green-100/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-1.5 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-sm font-bold text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TRUST MARK */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { icon: <ShieldCheck size={20} />, text: "BPOM & Halal" },
                { icon: <Leaf size={20} />, text: "Bahan Alami" },
                { icon: <Truck size={20} />, text: "Kirim Cepat" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-green-700 mb-2">{item.icon}</div>
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter">{item.text}</span>
                </div>
              ))}
            </div>

            {/* TOMBOL AKSI */}
            <div className="flex flex-col sm:flex-row gap-4 sticky bottom-6 sm:relative sm:bottom-0 z-40">
              <a 
                href={product.waLink} 
                className="flex-[2] bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl shadow-green-900/30 transition-all active:scale-95 text-base lg:text-lg uppercase tracking-widest"
              >
                <ShoppingCart size={22} /> Pesan Sekarang
              </a>
              <a 
                href={`https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Halo+Admin,+saya+ingin+tanya+detail+mengenai+produk+${product.name}`}
                className="flex-1 bg-slate-900 hover:bg-black text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 text-sm uppercase"
              >
                <MessageCircle size={20} /> Konsultasi
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}