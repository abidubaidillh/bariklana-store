import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 md:py-24 bg-green-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 rotate-12 shadow-2xl">
          <GraduationCap className="text-green-900 w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">Susu Kambing vs Susu Sapi</h2>
        <div className="h-1 w-20 bg-amber-500 mb-10 md:mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full text-left">
          {[
            "Struktur protein lebih halus, jauh lebih mudah dicerna oleh lambung sensitif.",
            "Kandungan Fluorine 100x lebih tinggi sebagai antiseptik alami tubuh.",
            "Rendah laktosa, solusi bagi Anda yang sering mulas saat minum susu sapi."
          ].map((text, i) => (
            <div key={i} className="p-6 md:p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/15 transition-colors">
              <p className="text-xs md:text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}