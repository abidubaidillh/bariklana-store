import { formatIDR } from "@/lib/utils";

interface InfoProps {
  name: string;
  price: number;
  tagline: string;
  description: string;
  stock: string | number;
}

export default function ProductInfo({ name, price, tagline, description, stock }: InfoProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-px w-8 bg-amber-500"></div>
        <p className="text-amber-600 font-black tracking-[0.2em] uppercase text-[9px] md:text-[10px]">
          {tagline}
        </p>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
        {name}
      </h1>
      <div className="flex items-center gap-6 mb-8">
        <span className="text-3xl md:text-4xl font-black text-green-700 tracking-tighter">
          {formatIDR(price)}
        </span>
        <div className="flex flex-col">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[9px] font-black uppercase text-center">
            Tersedia
          </span>
          <span className="text-[10px] text-slate-400 font-bold mt-1 ml-1">Stok: {stock}</span>
        </div>
      </div>
      <p className="text-slate-500 leading-relaxed text-base md:text-lg border-l-4 border-slate-100 pl-6 py-2">
        {description}
      </p>
    </div>
  );
}