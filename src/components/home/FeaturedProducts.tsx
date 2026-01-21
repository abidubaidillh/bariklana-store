import { PRODUCTS } from "@/constants/products";
import { formatIDR } from "@/lib/utils";
import { ShoppingCart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(
    (p) => p.id === "gomilk" || p.id === "bariklanahitawa200gr"
  );

  return (
    <section id="katalog" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tighter text-green-900">Mengenal Produk Unggulan</h2>
        <div className="h-1.5 w-20 md:w-24 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
        {featured.map((p) => (
          <div key={p.id} className="group border border-slate-100 rounded-[2rem] p-6 md:p-8 hover:shadow-2xl hover:shadow-green-900/10 transition-all bg-white relative flex flex-col">
            <div className="bg-slate-50 h-56 md:h-72 rounded-2xl mb-6 md:mb-8 flex items-center justify-center overflow-hidden p-4 md:p-6">
              <img src={p.image} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-green-600 font-bold text-xs md:text-sm uppercase tracking-widest">{p.tagline}</span>
            <h3 className="text-2xl md:text-3xl font-black my-2 text-slate-800">{p.name}</h3>
            <p className="text-slate-500 mb-6 md:mb-8 leading-relaxed line-clamp-3 text-sm">{p.description}</p>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4 mb-8 md:mb-10">
              {p.benefits.slice(0, 3).map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-50 pt-6 md:pt-8 mt-auto gap-6 sm:gap-2">
              <div className="w-full sm:w-auto">
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-wider">Harga Resmi</p>
                <span className="text-xl md:text-2xl font-black text-green-700">{formatIDR(p.price)}</span>
              </div>
              <div className="flex w-full sm:w-auto gap-2">
                  <Link href={`/katalog/${p.id}`} className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold transition-all text-sm">Detail</Link>
                  <a href={p.waLink} className="flex-1 sm:flex-none bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all text-sm">
                    <ShoppingCart size={16} /> Pesan
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <Link href="/katalog" className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white border-2 border-green-700 text-green-700 rounded-2xl font-bold hover:bg-green-50 transition-all group shadow-sm text-sm md:text-base">
          Lihat Katalog Lengkap
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}