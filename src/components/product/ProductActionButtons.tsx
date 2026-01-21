import { ShoppingCart, MessageCircle } from "lucide-react";
import { DISTRIBUTOR_INFO } from "@/constants/products";

export default function ProductActionButtons({ name, waLink }: { name: string, waLink: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sticky bottom-6 sm:relative sm:bottom-0 z-40 bg-white/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-0 p-4 sm:p-0 -mx-4 sm:mx-0 rounded-t-3xl sm:rounded-none border-t sm:border-t-0 border-slate-100 sm:border-transparent">
      <a 
        href={waLink} 
        className="flex-[2] bg-green-700 hover:bg-green-800 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-green-900/20 transition-all active:scale-95 text-sm md:text-base lg:text-lg uppercase tracking-widest"
      >
        <ShoppingCart size={22} /> Pesan Sekarang
      </a>
      <a 
        href={`https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Halo+Admin,+saya+ingin+tanya+detail+mengenai+produk+${name}`}
        className="flex-1 bg-slate-900 hover:bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 text-[10px] md:text-sm uppercase"
      >
        <MessageCircle size={20} /> Konsultasi
      </a>
    </div>
  );
}