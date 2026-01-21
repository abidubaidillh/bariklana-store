import { Category } from "@/types";

const CATEGORIES: Category[] = ["Susu", "Madu", "Suplemen", "Bodycare", "Kopi"];

interface FilterProps {
  activeCategory: Category | "Semua";
  setActiveCategory: (cat: Category | "Semua") => void;
}

export default function KatalogFilter({ activeCategory, setActiveCategory }: FilterProps) {
  return (
    <div className="bg-white border-b sticky top-[65px] z-40 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">
            Katalog <span className="text-green-700">Produk</span>
          </h1>
          
          <div className="overflow-x-auto flex gap-2 no-scrollbar pb-2 md:pb-0">
            <FilterButton 
              label="Semua" 
              isActive={activeCategory === "Semua"} 
              onClick={() => setActiveCategory("Semua")} 
            />
            {CATEGORIES.map((cat) => (
              <FilterButton 
                key={cat}
                label={cat} 
                isActive={activeCategory === cat} 
                onClick={() => setActiveCategory(cat)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
        isActive 
        ? 'bg-green-700 text-white border-green-700 shadow-md shadow-green-900/20' 
        : 'bg-white text-slate-500 border-slate-200 hover:border-green-300'
      }`}
    >
      {label}
    </button>
  );
}