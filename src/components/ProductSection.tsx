import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const ProductSection = () => {

const bestsellers = [
  {
    "id": 1,
    "name": "Premium Classic",
    "image": "/src/assets/almonds-classic.jpg",
    "description": "Almonds are a true nutritional marvel, offering a rich tapestry of health benefits in every crunchy bite. These versatile nuts are an excellent source of Vitamin E, a potent antioxidant that helps protect your cells from damage, contributing to healthy skin and a robust immune system. Beyond their antioxidant prowess, almonds are packed with healthy monounsaturated fats, which are known to support heart health by helping to lower bad cholesterol levels. They also provide a significant amount of dietary fiber, aiding in digestion and promoting a feeling of fullness, which can be beneficial for weight management. Furthermore, almonds are a good source of magnesium, crucial for muscle and nerve function, blood sugar control, and blood pressure regulation, and protein, essential for building and repairing tissues. Enjoy them as a satisfying snack, sprinkle them over your yogurt or salad, or incorporate them into your baking for a delicious and nutritious boost.",
    "isBestseller": true,
    "price": 400,
    "originalPrice": 450,
    "rating": 4.5,
    "reviews": 124
  },
  {
    "id": 2,
    "name": "Premium Salted Almonds",
    "image": "/src/assets/almonds-peri-peri.jpg",
"description": "Pamper your taste buds with Premium Salted almonds Sometimes, simplicity is key, and our Almonds Salted deliver just that – a perfect balance of natural almond flavor with a touch of savory sea salt. These almonds are lightly salted to enhance their inherent nutty taste, making them an incredibly satisfying snack. Almonds are naturally packed with biotin, which is great for healthy hair and nails, and magnesium, which supports muscle and nerve function. The judicious use of sea salt highlights the natural sweetness of the almond without excessive sodium often found in other salted snacks. Our Salted Almonds offer a pure, unadulterated taste and a convenient way to fuel your body with essential nutrients.",
    "isBestseller": true,
    "price": 410,
    "originalPrice": 480,
    "rating": 4.4,
    "reviews": 203
  },
  {
    "id": 3,
    "name": "Peri Peri Almonds",
    "image": "https://nutterlygood.odoo.com/web/image/product.product/5/image_512",
    "description": "Spice up Peri Peri Ignite your taste buds with our Almonds Peri Peri. These almonds are roasted to perfection and infused with a fiery and tangy peri-peri spice blend, creating an irresistible crunch with a delightful kick. While offering an exciting flavor, these almonds retain their nutritional integrity, providing essential minerals like manganese, which plays a role in bone health and metabolism, and copper, important for iron absorption. The capsaicin in peri-peri can also offer metabolic benefits. When compared to other spicy snacks often high in artificial flavors and unhealthy oils, our Peri Peri Almonds offer a natural and flavorful alternative that doesn't compromise on nutrition.",
    "isBestseller": true,
    "price": 410,
    "originalPrice": 430,
    "rating": 4.3,
    "reviews": 89
  },
  {
    "id": 4,
    "name": "Smoked Almonds",
    "image": "/src/assets/almonds-smoked.jpg",
    "description": "Premium Classic - Old is Gold Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond their unique flavor, smoked almonds offer the inherent nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the market.",
    "isBestseller": true,
    "price": 410,
    "originalPrice": 450,
    "rating": 4.6,
    "reviews": 156
  },
    {
    "id": 5,
    "name": "Dark Chocolate Almonds",
    "image": "https://nutterlygood.odoo.com/web/image/product.product/4/image_512",
    "description": "Premium Classic - Old is Gold Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond their unique flavor, smoked almonds offer the inherent nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the market.",
    "isBestseller": true,
    "price": 410,
    "originalPrice": 430,
    "rating": 4.6,
    "reviews": 156
  },
{
    "id": 6,
    "name": "Milk Chocolate Almonds",
    "image": "https://nutterlygood.odoo.com/web/image/product.product/3/image_512",
    "description": "Premium Classic - Old is Gold Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond their unique flavor, smoked almonds offer the inherent nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the market.",
    "isBestseller": true,
    "price": 410,
    "originalPrice": 450,
    "rating": 4.6,
    "reviews": 156
  },
  {
    "id": 6,
    "name": "Coffee Mocha Almonds",
    "image": "https://nutterlygood.odoo.com/web/image/product.product/2/image_512",
    "description": "Premium Classic - Old is Gold Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond their unique flavor, smoked almonds offer the inherent nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the market.",
    "isBestseller": true,
    "price": 550,
    "originalPrice": 650,
    "rating": 4.6,
    "reviews": 156
  }
]



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
     setProducts(bestsellers);
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