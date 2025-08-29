import { useEffect, useState } from 'react';

// Interface for Mouth Fresheners products
export interface MouthFreshenerProduct {
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
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';


export default function MouthFreshenersPage() {
  const [product, setProducts] = useState<MouthFreshenerProduct[]>([]);
  const navigate = useNavigate();
   
  const products: MouthFreshenerProduct[] = [
    // Mouth Fresheners json data 
    {
      "id": 30,
      "name": "Masala Aam Papad",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/38/image_1024/Masala%20Aam%20Papad",
      "description": "Traditional Aam Padad with masala Step back in time and savor the taste of pure nostalgia with our Masala Aam Papad. This isn't just a mouth freshener; it's a cherished memory wrapped in a delightful, chewy bite. We've taken the classic, sun-dried mango leather, beloved for generations, and elevated it with a signature blend of Indian spices. Each piece offers a complex journey of flavors, starting with the deep, sweet taste of ripe mangoes, followed by a tangy kick of dry mango powder (amchur), and finishing with the savory, digestive warmth of black salt (kalanamak) and roasted cumin. A perfect trifecta of sweet, sour, and spicy. The texture is satisfyingly chewy and soft. Mango is a rich source of Vitamins A and C. The accompanying spices like cumin and ginger are renowned in Ayurveda for their digestive properties, helping to soothe the stomach after a heavy meal and improve gut health. This makes our Aam Papad a treat that’s both tasty and beneficial.",
      "isBestseller": true,
      "price": 300,
      "originalPrice": 350,
      "rating": 4.5,
      "reviews": 154
    },
    {
      "id": 31,
      "name": "Jamun Shots",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/40/image_1024/Jamun%20Shots",
      "description": "Chatpata Jamun shots Experience the unique and sophisticated taste of a beloved Indian monsoon fruit with our exquisite Jamun Shots. We have captured the very essence of Jamun (Indian Blackberry) in these delightful, bite-sized candies. Each shot offers the authentic, slightly astringent sweetness that makes the Jamun fruit so special. It's a flavor that is both exotic and deeply familiar, providing a refined and memorable way to cleanse your palate.A distinctive blend of sweet, sour, and astringent notes, perfectly mirroring the taste of a ripe Jamun fruit. Our shots are combined with a touch of cumin seeds (jeera) , pipal (long pepper) , black salt , sommon salt, mixed spices to enhance the fruit's natural flavor. This simple but elegant combination ensures an authentic taste experience.Perfect for those with a discerning palate, our Jamun Shots are a classy and healthy alternative to conventional after-meal mints. Let the elegant taste of Jamun transport you to the lush greenery of the Indian monsoon.",
      "isBestseller": true,
      "price": 400,
      "originalPrice": 450,
      "rating": 4.5,
      "reviews": 137
    },
    {
      "id": 32,
      "name": "Guava Shots",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/41/image_1024/Guava%20Shots",
      "description": "Irresistible Guava Shots Get ready for a tropical flavor explosion with our irresistible Guava Shots! Remember the simple joy of slicing a fresh guava and sprinkling it with salt and chili? We've bottled that exact experience in these fun, flavorful candies. Each shot is bursting with the sweet, musky flavor of ripe pink guava, perfectly complemented by a spicy, salty kick that will leave you wanting more. It’s a playful and zesty treat that instantly refreshes your mouth and your mood.Whether you're looking for a post-meal palate cleanser or to share with friends, our Guava Shots are the perfect choice. It's a pinch of sunshine and spice, guaranteed to bring a smile to your face.",
      "isBestseller": true,
      "price": 400,
      "originalPrice": 450,
      "rating": 4.5,
      "reviews": 124
    },
    {
      "id": 33,
      "name": "Rajwadi",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/43/image_1024/Rajwadi",
      "description": "Rajwadi - The Royals' choice Indulge in an experience of pure opulence with our Rajwadi Mukhwas. The name \"Rajwadi\" means \"Royal,\" and this blend is truly fit for kings. Crafted for the most discerning palate, this is our most luxurious and complex mouth freshener, designed to turn the end of your meal into a regal affair. Each spoonful is a symphony of rich flavors, premium ingredients, and exquisite textures that speaks of heritage and grandeur. A rich, sweet, and deeply aromatic mix with multiple layers of flavor. You'll experience the sweetness of dates and rose, the nutty crunch of seeds and nuts, and the fragrant aroma of cardamom and saffron Our Rajwadi Mukhwas features a majestic blend of sesame seeds, saunf, coriander seeds, sugar coated saunt, mint and black salt. Elevate your dining experience and treat yourself like royalty. Our Rajwadi Mukhwas is the ultimate expression of luxury and tradition, perfect for special occasions or when you simply desire the absolute best.",
      "isBestseller": true,
      "price": 390,
      "originalPrice": 450,
      "rating": 4.1,
      "reviews": 130
    },
    {
      "id": 34,
      "name": "Paan Shot",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/47/image_1024/Paan%20Shot",
      "description": "Paan Shot, on-the-go freshness!!. Get ready for an instant explosion of paan flavor with our revolutionary Pan Shot! We've captured the entire essence—the sweetness, the coolness, the aroma—of a freshly made paan and packed it into a single, convenient, mess-free candy. This is the modern answer to a timeless craving. A magic-filled shot that bursts in your mouth, it delivers the complete, juicy experience of paan rasa (juice) without any of the chewing. A delightful blast of sweet and minty liquid, filled with the aromatic notes of rose, cardamom, and fennel. It's an intense, liquid-centered burst followed by a sweet candy finish.  The liquid heart of our Pan Shot is a masterful concoction of rose petal preserve (gulkand) extract, powerful menthol, fennel (saunf) extract, and cardamom flavor, all encased in a delicate sugar shell. Perfect for on-the-go freshness or when you want that paan kick instantly. Why wait when you can have your favorite paan flavor in one explosive shot?",
      "isBestseller": true,
      "price": 410,
      "originalPrice": 450,
      "rating": 4.3,
      "reviews": 112
    }
    ];

  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mouth Fresheners</h1>
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
