import { useEffect, useState } from 'react';

// Interface for Mixes products
export interface MixProduct {
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
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';

export default function MixesPage() {
  const [mixedfruits, setMixedFruits] = useState<MixProduct[]>([]);
  const navigate = useNavigate();
  const products: MixProduct[] = [
     {
      "id": 27,
      "name": "Mix Vegetable Chips",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/33/image_1024/Mix%20Vegetable%20Chips",
      "description": "Genuine Plant Based Goodness Transform your snacking habits with our wholesome Vegetable Chips. A colorful medley of real, thinly sliced vegetables, gently prepared to preserve their natural goodness and create an irresistible crunch. Unlike conventional potato chips that offer minimal nutritional value, our Vegetable Chips are a convenient way to enjoy the vitamins, minerals, and dietary fiber found in a variety of vegetables. Each chip delivers authentic vegetable flavor and a satisfying texture, without excessive oils or artificial additives. It’s the perfect, guilt-free solution for satisfying your chip cravings while nourishing your body with genuine, plant-based goodness.",
      "isBestseller": true,
      "price": 400,
      "originalPrice": 450,
      "rating": 4.5,
      "reviews": 124
    },

    {
      "id": 28,
      "name": "Beetroot Masala Chips",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/32/image_1024/Beetroot%20Masala%20Chips",
      "description": "Guilt free snacking!! Experience the light, airy, and incredibly satisfying crunch of our Beetroot Masala Chips. Made from real beetroot, these chips are a revelation in healthy snacking. Unlike fried or heavily processed chips, beetroot chips are naturally low in calories and fat, making them an ideal choice for mindful munching. They are also a good source of plant-based protein, dietary fiber for digestive wellness, and essential minerals like calcium and magnesium, which support bone health. Our Beetroot Masala Chips are seasoned to perfection, offering a delicate flavor that's both comforting and uniquely delicious. It's the perfect guilt-free alternative to traditional chips, providing a truly wholesome and delightful snacking experience.",
      "isBestseller": true,
      "price": 380,
      "originalPrice": 420,
      "rating": 4.5,
      "reviews": 124
    },
    {
      "id": 29,
      "name": "Makhana Chips",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/31/image_1024/Makhana%20Chips",
      "description": "Genuinely wholesome!! Crunch into wellness with our vibrant Makhana Chips. Made from roasted fox nuts (makhana), these chips are a testament to how delicious and satisfying healthy snacking can be. Unlike greasy potato chips laden with unhealthy fats and artificial ingredients, our Makhana Chips are naturally light, airy, and packed with incredible nutritional benefits. Makhana are renowned for their low calorie and fat content, making them an excellent choice for mindful munching. They are also a good source of plant-based protein, dietary fiber for digestive wellness, and essential minerals like calcium and magnesium, which support bone health. Enjoy a genuinely wholesome and uniquely flavorful chip that offers a guilt-free crunch and a powerful boost of nutrients.",
      "isBestseller": true,
      "price": 420,
      "originalPrice": 480,
      "rating": 4.5,
      "reviews": 124
    }
 
]


  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mixes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={handleViewProduct} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
