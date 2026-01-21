import { PRODUCTS } from "@/constants/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductFeatureList from "@/components/product/ProductFeatureList";
import ProductActionButtons from "@/components/product/ProductActionButtons";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DetailProdukPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      
      {/* BREADCRUMB */}
      <nav className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link href="/" className="hover:text-green-700 transition-colors">Beranda</Link>
          <span>/</span>
          <Link href="/katalog" className="hover:text-green-700 transition-colors">Katalog</Link>
          <span>/</span>
          <span className="text-green-700">{product.name}</span>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-8 md:py-12">
        <Link 
          href="/katalog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-green-700 transition-colors font-bold text-sm mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Katalog
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ProductGallery image={product.image} name={product.name} category={product.category} />
          
          <div className="flex flex-col">
            <ProductInfo 
              name={product.name} 
              price={product.price} 
              tagline={product.tagline} 
              description={product.description} 
              stock={product.stock} 
            />
            
            <ProductFeatureList 
              advantages={product.advantages} 
              benefits={product.benefits} 
            />
            
            <ProductActionButtons 
              name={product.name} 
              waLink={product.waLink} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}