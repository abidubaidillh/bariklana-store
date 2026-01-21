"use client";

import { useState } from "react";
import { PRODUCTS } from "@/constants/products";
import { Category } from "@/types";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KatalogFilter from "@/components/katalog/KatalogFilter";
import ProductCard from "@/components/katalog/ProductCard";
import EmptyState from "@/components/katalog/EmptyState";

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "Semua">("Semua");

  const filteredProducts = activeCategory === "Semua" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      {/* Filter Kategori (Sub-Header) */}
      <KatalogFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Grid Produk */}
      <main className="flex-grow max-w-6xl mx-auto px-6 mt-10 mb-20 w-full">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState 
            activeCategory={activeCategory} 
            resetFilter={() => setActiveCategory("Semua")} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}