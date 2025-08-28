import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, ShoppingCart, User, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '@/assets/nutterlygood.svg';

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Header animation on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP animation for header appearance
    gsap.fromTo('.header-logo', 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
    );

    gsap.fromTo('.header-nav', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4, stagger: 0.1 }
    );

    gsap.fromTo('.header-actions', 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 0.8, delay: 0.6 }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Best Sellers', to: '/products' },
    { label: 'About Us', to: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
            <Link to="/" className="header-logo flex items-center space-x-2">
            <img src={logo} alt="Nutterly Good" className="h-10 w-auto" />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 header-nav">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions flex items-center space-x-4">
            {/* Phone */}
            <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 74162 85566</span>
            </div>
            

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pt-3 border-t border-border">
                
                <Link to="/contact" className="flex-1">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};