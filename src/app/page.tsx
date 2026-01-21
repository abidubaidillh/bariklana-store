"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import USP from "@/components/home/USP";
import Testimonials from "@/components/home/Testimonials";
import Education from "@/components/home/Education";

export default function LandingPage() {
  return (
    <div className="bg-white font-sans text-slate-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <USP />
        <Testimonials />
        <Education />
      </main>
      <Footer />
    </div>
  );
}