
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  isBestseller: boolean;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  badge?: string;
}

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/bestsellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Bestseller Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price ?? 0}
              originalPrice={product.originalPrice ?? 0}
              rating={product.rating ?? 0}
              reviews={product.reviews ?? 0}
              badge={product.badge}
              onAddToCart={() => handleViewProduct(product.id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
