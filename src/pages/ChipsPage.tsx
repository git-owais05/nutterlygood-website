import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';


export default function ChipsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/public/Chips.json')
      .then(res => res.json())
      .then(setProducts);
  }, []);
  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Chips</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} onAddToCart={handleViewProduct} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
