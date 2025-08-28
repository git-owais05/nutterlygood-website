import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section header animation
    gsap.fromTo('.products-header', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.products-header',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stagger animation for product cards
    gsap.fromTo('.product-grid .product-card', 
      { opacity: 0, y: 80, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.product-grid',
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/public/bestsellers.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleViewProduct = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-background" id="bestsellers">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="products-header text-center mb-16 space-y-6 mt-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-sm font-medium">Best Products</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Check out what's new in our company!
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium nuts and dry fruits, sourced from the finest suppliers and processed with care.
          </p>

          <Button onClick={() => navigate("/products")}
            variant="outline" 
            className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            See all
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard
          {...product}
          onAddToCart={() => handleViewProduct(product.id)}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-3xl p-12 space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to taste the goodness?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Join thousands of happy customers who trust us for their daily dose of healthy snacking.
            </p>
            <Button onClick={() => navigate("/contact")}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};