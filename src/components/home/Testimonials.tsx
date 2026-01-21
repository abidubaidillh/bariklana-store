export default function Testimonials() {
  const images = [
    "/testimoni-1.jpg", "/testimoni-2.jpg", "/testimoni-3.jpg", 
    "/testimoni-4.jpg", "/testimoni-5.jpg", "/testimoni-6.jpg", 
    "/testimoni-7.jpg", "/testimoni-9.jpg", "/testimoni-10.jpg", 
    "/testimoni-11.jpg", "/testimoni-12.jpg", "/testimoni-13.jpg"
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tighter text-green-900">Bukti Nyata Khasiat</h2>
        <div className="h-1.5 w-20 md:w-24 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden border-y border-slate-50 bg-slate-50/50">
        <div className="py-8 md:py-12 animate-marquee flex whitespace-nowrap gap-4 md:gap-6">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="w-48 md:w-80 flex-shrink-0 bg-white rounded-2xl md:rounded-3xl p-2 md:p-3 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <img src={src} alt={`Testimoni ${index + 1}`} className="w-full h-auto rounded-xl md:rounded-2xl object-cover aspect-[3/4] shadow-inner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}