import { HeartPulse, ShieldCheck, Star, CheckCircle } from "lucide-react";

const USP_DATA = [
  { title: "Formula Herbal Tinggi", icon: <HeartPulse />, desc: "Racikan herbal lebih tinggi dibanding produk serupa." },
  { title: "Tanpa Bau Amis", icon: <ShieldCheck />, desc: "Teknologi modern untuk rasa gurih alami yang enak." },
  { title: "Legal & Aman", icon: <Star />, desc: "Izin resmi BPOM RI dan sertifikasi Halal MUI." },
  { title: "Rendah Gula", icon: <CheckCircle />, desc: "Aman dikonsumsi harian bahkan untuk diet." },
];

export default function USP() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tighter text-slate-800">Kenapa Memilih Kami?</h2>
          <div className="h-1.5 w-20 md:w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {USP_DATA.map((item, i) => (
            <div key={i} className="text-center p-6 md:p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6 transform group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold mb-3 text-slate-800 text-sm leading-tight">{item.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}