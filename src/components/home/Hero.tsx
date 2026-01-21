import { DISTRIBUTOR_INFO } from "@/constants/products";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-green-900 to-green-700 text-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 md:w-96 md:h-96 bg-green-500 rounded-full blur-[80px] md:blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 md:w-96 md:h-96 bg-amber-500 rounded-full blur-[80px] md:blur-[120px] opacity-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Keajaiban Susu Kambing Etawa Plus Herbal: Solusi Sehat Alami.
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Hadirkan kesegaran dan manfaat terapi alami dari Gomilk & Hitawa. Pelopor susu kambing etawa plus herbal pertama di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#katalog" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Cek Produk Kami
            </a>
            <a href={`https://wa.me/${DISTRIBUTOR_INFO.phone}`} className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm">
              <MessageCircle size={18} /> Hubungi Admin
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <div className="relative flex items-end justify-center scale-90 md:scale-125">
            <img src="/bariklana-gomilk-200gr.png" alt="Gomilk" className="relative z-20 w-40 md:w-56 drop-shadow-2xl animate-[bounce_4s_infinite_ease-in-out]" />
            <img src="/bariklana-hitawa-200gr.png" alt="Hitawa" className="relative z-10 w-32 md:w-48 -ml-8 md:-ml-12 mb-4 drop-shadow-2xl animate-[bounce_5s_infinite_ease-in-out]" />
          </div>
        </div>
      </div>
    </header>
  );
}