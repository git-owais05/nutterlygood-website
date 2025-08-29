import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/nutterlygood.svg';

gsap.registerPlugin(ScrollTrigger);

import { useState } from 'react';

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    gsap.fromTo('.footer-content',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.footer-content',
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="footer-content space-y-6">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <img src={logo} alt="Nutterly Good" className="h-12 w-auto" />
              <span className="text-2xl font-bold"></span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              From ancient Ayurvedic roots to modern wellness trends, we bring you the finest quality nuts and dry fruits.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-content space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Best Sellers</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="footer-content space-y-6">
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/dry-fruits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Dry Fruits</Link>
              </li>
              {/* <li> */}
                {/* <Link to="/category/chips" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Chips</Link> */}
              {/* </li> */}
              <li>
                <Link to="/category/mixes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Mixes</Link>
              </li>
              <li>
                <Link to="/category/mouth-fresheners" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Mouth Fresheners</Link>
              </li>
              <li>
                <Link to="/category/others" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">Others</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-content space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+91 74162 85566</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">contact@nutterlygood.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <span className="text-primary-foreground/80">
                  CS-09, Etna Block, Rajapushpa Atria<br/>
                  Golden Mile Road, Kokapet,<br/>
                  Hyderabad, Telangana, 500075
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Nutterly Good. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-4 z-50 bg-secondary text-green-900 font-bold px-4 py-2 rounded-full shadow-lg hover:bg-primary-foreground/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </footer>
  );
};