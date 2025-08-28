import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-nuts-image.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial hero animations
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, 
      '-=0.4'
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.3'
    )
    .fromTo('.hero-button', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.3'
    )
    .fromTo('.hero-image', 
      { opacity: 0, x: 100, scale: 0.9 }, 
      { opacity: 1, x: 0, scale: 1, duration: 1.2 }, 
      '-=0.8'
    );

    // Parallax effect for hero image
    gsap.to(imageRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Floating animation for hero image
    gsap.to('.hero-image', {
      y: 10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-20"
    >
      

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-badge inline-block">
              <span className="text-secondary font-medium text-xl">Flavor & Freshness</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-primary-foreground">
                <span className="hero-title block">Your Everyday Treat of</span>
                <span className="hero-title block">
                  Tasty <span className="text-secondary">Goodness</span>. Online
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="hero-description text-lg text-primary-foreground/90 max-w-lg leading-relaxed">
              From ancient Ayurvedic roots to modern wellness trends, dry fruits and mouth fresheners have always been a part of India's rich culinary heritage.
            </p>

            {/* CTA Button */}
            <div className="hero-button">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-200 shadow-lg group"
              >
                Start Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-2 pt-12">
            <div className="relative">
              <img
                ref={imageRef}
                src={heroImage}
                alt="Premium nuts and dry fruits"
                className="hero-image w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};