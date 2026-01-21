export default function ProductGallery({ image, name, category }: { image: string, name: string, category: string }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-green-50 rounded-[2.5rem] md:rounded-[3.5rem] -rotate-2 transition-transform group-hover:rotate-0"></div>
      <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 aspect-square flex items-center justify-center overflow-hidden border border-slate-100 shadow-xl shadow-green-900/5">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-6 left-6 md:top-8 md:left-8 bg-green-700 text-white px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
          {category}
        </span>
      </div>
    </div>
  );
}