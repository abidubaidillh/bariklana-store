// src/components/Footer.tsx
import { DISTRIBUTOR_INFO } from "@/constants/products";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 border-b border-slate-900 pb-16">
        <div className="col-span-1">
          <h3 className="text-white font-black text-2xl mb-6 tracking-tighter">
            BARIKLANA<span className="text-amber-500">STORE</span>
          </h3>
          <p className="text-sm leading-relaxed mb-6 italic">PT Bariklana Insan Herba</p>
          <p className="text-sm leading-relaxed text-slate-400">
            Alamat: {DISTRIBUTOR_INFO.address}
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Media Sosial</h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Instagram</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Facebook</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">TikTok</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Hubungi Distributor</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Punya pertanyaan atau ingin bermitra? Chat kami sekarang:
          </p>
          <a 
            href={`https://wa.me/${DISTRIBUTOR_INFO.phone}`} 
            className="inline-flex items-center gap-2 text-white font-bold bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20"
          >
            <MessageCircle size={20} /> +{DISTRIBUTOR_INFO.phone}
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 text-[10px] uppercase tracking-[0.2em] font-bold">
        <p>© 2026 {DISTRIBUTOR_INFO.name}. Seluruh Hak Cipta Dilindungi.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="hover:text-white transition-colors cursor-pointer">Tentang Kami</span>
          <span className="hover:text-white transition-colors cursor-pointer">Peluang Kemitraan</span>
          <span className="hover:text-white transition-colors cursor-pointer">Kontak Kami</span>
        </div>
      </div>
    </footer>
  );
}