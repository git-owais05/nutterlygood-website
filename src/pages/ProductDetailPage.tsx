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

  const bestsellers: Product[] = [
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
      "id": 7,
      "name": "Coffee Mocha Almonds",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/2/image_512",
      "description": "Premium Classic - Old is Gold Savor the deep, earthy, and aromatic flavor of our Almonds Smoked. These almonds are expertly smoked to impart a distinctive and rich taste that is both comforting and sophisticated. Beyond their unique flavor, smoked almonds offer the inherent nutritional benefits of plain almonds, including protein, healthy fats, and dietary fiber, all essential for sustained energy and digestive health. This smoking process is carefully managed to enhance the natural flavor without adding unhealthy additives. Unlike many heavily processed savory snacks, our Smoked Almonds offer a natural, wholesome, and flavorful alternative that stands out in the market.",
      "isBestseller": true,
      "price": 550,
      "originalPrice": 650,
      "rating": 4.6,
      "reviews": 156
    }
  ];

  useEffect(() => {
    const found = bestsellers.find((p) => p.id === Number(id));
    setProduct(found || null);
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
