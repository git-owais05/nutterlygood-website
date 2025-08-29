import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

interface OthersProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  isBestseller: boolean;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}



export default function OthersPage() {
    const [product, setProducts] = useState<OthersProduct[]>([]);
    const navigate = useNavigate();
     
    const products: OthersProduct[] = [
      // Mouth Fresheners json data 
       {

      "id": 35,
      "name": "Coffee Brittle",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/34/image_1024/Coffee%20Brittle",
      "description": "",
      "isBestseller": true,
      "price": 420.00,
      "originalPrice": 480.00,
      "rating": 4.5,
      "reviews": 157
    },
    {
      "id": 36,
      "name": "Chocolate Brittle",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/35/image_1024/Chocolate%20Brittle",
      "description": "",
      "isBestseller": true,
      "price": 400,
      "originalPrice": 5000,
      "rating": 4.5,
      "reviews": 130
    },
    {
      "id": 37,
      "name": "Chocolate Almond Dates",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/36/image_1024/Chocolate%20Almond%20Dates",
      "description": "",
      "isBestseller": true,
      "price": 420,
      "originalPrice": 600,
      "rating": 4.5,
      "reviews": 164
    },
    {
      "id": 38,
      "name": "Choco Almond Date Brittle",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/37/image_1024/Choco%20Almond%20Date%20Brittle",
      "description": "",
      "isBestseller": true,
      "price": 400,
      "originalPrice": 450,
      "rating": 4.5,
      "reviews": 141
    }
      ];
  
  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Others</h1>
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
