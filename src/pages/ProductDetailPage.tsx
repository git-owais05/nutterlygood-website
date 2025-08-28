import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("/src/assets/bestsellers.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === Number(id));
        setProduct(found || null);
      });
  }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="p-8 max-w-2xl mx-auto">Product not found.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Product Image */}
          <div className="flex-1 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-80 h-80 object-contain rounded shadow" />
          </div>
          {/* Product Info */}
          <div className="flex-1 mt-12">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="text-lg font-semibold mb-2">₹ {product.price.toLocaleString()} <span className="text-sm text-muted-foreground">Including taxes / 250g / Unit</span></div>
             
            <div className="flex gap-4 mb-4">
                
              <button onClick={() => window.location.href = '/contact'} className="bg-primary text-white px-4 py-2 rounded shadow">Contact Us</button>
              
            </div>
            <div className="text-sm text-muted-foreground mb-2">Size: 250gm</div>
            <div className="text-xs text-muted-foreground mb-2">Terms and Conditions</div>
            <div className="text-xs text-muted-foreground mb-2">30-day money-back guarantee</div>
            <div className="text-xs text-muted-foreground mb-2">Shipping: 2-3 Business Days</div>
          </div>
        </div>
        {/* Description Section */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2">Premium Classic - Old is Gold</h3>
          <p className="mb-4 text-muted-foreground">Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond the unique flavor, smoked almonds offer the relevant nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the bestseller.</p>
        </div>
        {/* Customer Reviews Section */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
          <div className="text-muted-foreground">No reviews yet.</div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
