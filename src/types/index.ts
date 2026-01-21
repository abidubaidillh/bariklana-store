// src/types/index.ts
export type Category = "Susu" | "Madu" | "Suplemen" | "Bodycare" | "Kopi";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  tagline: string;
  category: Category;
  description: string;
  image: string;
  benefits: string[];
  advantages: string[];
  waLink: string;
}