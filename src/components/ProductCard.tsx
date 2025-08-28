import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  onAddToCart?: (id: number) => void;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  badge,
  onAddToCart 
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Scroll trigger animation
    gsap.fromTo(card, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, { 
        y: -8, 
        duration: 0.3, 
        ease: "power2.out" 
      });
      gsap.to(card.querySelector('.product-image'), { 
        scale: 1.05, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { 
        y: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      });
      gsap.to(card.querySelector('.product-image'), { 
        scale: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-secondary text-secondary' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <Card 
      ref={cardRef}
      className="group overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted/30 aspect-square ">
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
            {badge}
          </div>
        )}
        
        <img
          src={image}
          alt={name}
          className="product-image w-full h-full object-cover transition-transform duration-300"
        />
         
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button 
          variant="outline" 
          className="w-full bg-primary text-primary-foreground group-hover:border-primary transition-all duration-200"
          onClick={() => onAddToCart?.(id)}
        >
          View Product
        </Button>
      </div>
    </Card>
  );
};