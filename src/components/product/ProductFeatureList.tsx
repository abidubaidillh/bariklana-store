import { Zap, Star, CheckCircle, ShieldCheck, Leaf, Truck } from "lucide-react";

export default function ProductFeatureList({ advantages, benefits }: { advantages?: string[], benefits: string[] }) {
  const hasValidAdvantages = advantages && advantages.length > 0 && advantages[0] !== "-";

  return (
    <>
      {hasValidAdvantages && (
        <div className="mb-10">
          <h3 className="font-black text-slate-800 mb-5 flex items-center gap-2 uppercase tracking-widest text-[10px] md:text-xs">
            <Zap className="text-amber-500 fill-amber-500" size={16} />
            Keunggulan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {advantages.map((adv, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-amber-200 transition-all">
                <Star className="text-amber-500 fill-amber-500 shrink-0" size={14} />
                <span className="text-xs font-bold text-slate-700 leading-tight">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-green-50/50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 mb-10 border border-green-100">
        <h3 className="font-black text-green-900 mb-6 flex items-center gap-3 uppercase tracking-widest text-[10px] md:text-xs">
          <CheckCircle className="text-green-600" size={20} />
          Manfaat Kesehatan
        </h3>
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] shadow-sm border border-green-100/50">
              <div className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-1.5 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <span className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-12">
        {[
          { icon: <ShieldCheck size={20} />, text: "BPOM & Halal" },
          { icon: <Leaf size={20} />, text: "Bahan Alami" },
          { icon: <Truck size={20} />, text: "Kirim Cepat" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-3 md:p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-green-700 mb-2">{item.icon}</div>
            <span className="text-[8px] md:text-[9px] font-black uppercase text-slate-400 tracking-tighter leading-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}