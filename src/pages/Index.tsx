import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductSection } from '@/components/ProductSection';
import { Footer } from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.set("html", { scrollBehavior: "smooth" });

    // Page load animations
    gsap.fromTo('body', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <Footer />
    </main>
  );
};

export default Index;
