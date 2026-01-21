import { DISTRIBUTOR_INFO } from "@/constants/products";
import { MessageCircle, Instagram, Facebook, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16 md:py-20 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-b border-slate-900 pb-12 md:pb-16 text-center md:text-left">
        
        {/* BRAND & ALAMAT */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-black text-2xl mb-6 tracking-tighter">
            BARIKLANA<span className="text-amber-500">STORE</span>
          </h3>
          <p className="text-sm leading-relaxed mb-4 italic font-medium">PT Bariklana Insan Herba</p>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
            {DISTRIBUTOR_INFO.address}
          </p>
        </div>
        
        {/* SOSIAL MEDIA */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Ikuti Kami</h3>
          <ul className="space-y-4 text-sm flex flex-col items-center md:items-start">
            <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer group">
              <Instagram size={18} className="text-slate-600 group-hover:text-amber-500" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer group">
              <Facebook size={18} className="text-slate-600 group-hover:text-amber-500" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-500 transition-colors cursor-pointer group">
              <Smartphone size={18} className="text-slate-600 group-hover:text-amber-500" />
              <span>TikTok</span>
            </li>
          </ul>
        </div>
        
        {/* CTA HUBUNGI */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-bold text-lg mb-6">Layanan Konsumen</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Butuh bantuan atau info peluang kemitraan? Chat Admin kami sekarang:
          </p>
          <a 
            href={`https://wa.me/${DISTRIBUTOR_INFO.phone}`} 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-bold bg-green-600 px-8 py-4 rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-900/20 active:scale-95"
          >
            <MessageCircle size={20} />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
      
      {/* COPYRIGHT & LINKS */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
        <div className="text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 {DISTRIBUTOR_INFO.name}
          </p>
          <p className="text-[9px] uppercase tracking-[0.1em] mt-1 opacity-50">
            Seluruh Hak Cipta Dilindungi.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] uppercase tracking-[0.15em] font-bold">
          <span className="hover:text-white transition-colors cursor-pointer">Tentang</span>
          <span className="hover:text-white transition-colors cursor-pointer">Kemitraan</span>
          <span className="hover:text-white transition-colors cursor-pointer">Kontak</span>
        </div>
      </div>
    </footer>
  );
}