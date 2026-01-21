import { ShoppingCart } from "lucide-react";

interface EmptyStateProps {
  activeCategory: string;
  resetFilter: () => void;
}

export default function EmptyState({ activeCategory, resetFilter }: EmptyStateProps) {
  return (
    <div className="text-center py-24 md:py-32 bg-white rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-slate-100">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
          <ShoppingCart size={40} />
      </div>
      <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-xs md:text-sm px-4">
        Produk belum tersedia
      </p>
      <p className="text-slate-400 text-[10px] md:text-xs mt-2 px-6">
        Nantikan koleksi terbaik kami di kategori <span className="font-bold text-slate-500">{activeCategory}</span>.
      </p>
      <button 
        onClick={resetFilter}
        className="mt-8 text-green-700 font-bold text-sm underline hover:text-green-800 transition-colors"
      >
        Lihat Semua Produk
      </button>
    </div>
  );
}