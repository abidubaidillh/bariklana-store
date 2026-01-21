import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { formatIDR } from "@/lib/utils";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-green-900/10 transition-all flex flex-col">
      <Link href={`/katalog/${product.id}`} className="block flex-grow">
        <div className="aspect-square bg-slate-50 p-4 md:p-6 flex items-center justify-center relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-green-700 shadow-sm uppercase tracking-widest border border-green-100">
              {product.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="bg-white text-green-700 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-xl flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                <Search size={20} strokeWidth={3} />
             </div>
          </div>
        </div>
        
        <div className="p-4 md:p-5 flex flex-col">
          <p className="text-[9px] md:text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1 opacity-70">
            Bariklana Indonesia
          </p>
          <h3 className="font-bold text-slate-800 text-xs md:text-base mb-2 group-hover:text-green-700 transition-colors line-clamp-2 leading-tight h-8 md:h-12">
            {product.name}
          </h3>
          <p className="text-green-700 font-black text-base md:text-lg">
            {formatIDR(product.price)}
          </p>
        </div>
      </Link>

      <div className="px-4 md:px-5 pb-5 md:pb-6 mt-auto">
        <a 
          href={product.waLink} 
          className="w-full bg-slate-900 text-white py-3 md:py-3.5 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg active:scale-95"
        >
          <ShoppingCart size={14} /> <span className="hidden xs:inline">Pesan</span>
        </a>
      </div>
    </div>
  );
}