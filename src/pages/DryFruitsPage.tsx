import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

// Define the DryFruits type
interface DryFruits {
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

export default function DryFruitsPage() {
  const [dryfruits, setDryfruits] = useState<DryFruits[]>([]);
  const navigate = useNavigate();

    const drfruits: DryFruits[] = [
   {
      "id": 8,
      "name": "Coffee Mocha Almonds",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/2/image_1024/Coffee%20Mocha%20Almonds%20",
      "description": "For Coffee lovers - Coffee Mocha Almonds Indulge in the rich aroma of coffee and the deep flavor of mocha with our Almonds Coffee Mocha. Each almond is meticulously coated, offering a delightful crunch that perfectly complements the sophisticated taste profile. Beyond their exquisite flavor, these almonds are a powerhouse of nutrition. They are an excellent source of Vitamin E, a potent antioxidant that supports skin health and boosts immunity. Additionally, they provide healthy fats, protein, and fiber, contributing to satiety and digestive wellness. Unlike many other coffee-flavored snacks on the market that are laden with artificial ingredients and excessive sugar, our Almonds Coffee Mocha offers a guilt-free indulgence, providing authentic flavor and genuine nutritional benefits.",
      "isBestseller": true,
      "price": 550.00,
      "originalPrice": 560.00,
      "rating": 4.6,
      "reviews": 122
    },
    {
      "id": 9,
      "name": "Milk Chocolate Almonds",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/3/image_1024/Milk%20Chocolate%20Almonds",
      "description": "More about Milk Chocolate Almonds Experience the classic combination of creamy milk chocolate and wholesome almonds with our Almonds Milk Almonds Chocolate. This timeless treat offers a satisfying sweetness balanced by the natural nuttiness of the almonds. These chocolate-covered almonds are not just a delicious snack; they also deliver a good dose of magnesium, crucial for muscle and nerve function, and iron, vital for energy production. The fiber content helps in maintaining a healthy digestive system. Many commercially available chocolate-covered nuts often use low-quality chocolate and fillers, but our product prioritizes premium milk chocolate and high-quality almonds, ensuring a superior taste and a more wholesome snacking experience.",
      "isBestseller": true,
      "price": 450.00,
      "originalPrice": 480.00,
      "rating": 4.5,
      "reviews": 110
    },
    {
      "id": 10,
      "name": "Dark Chocolate Almonds",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/4/image_1024/Dark%20Chocolate%20Almonds",
      "description": "Great combination of health and taste!! For the true connoisseur, our Almonds Dark Chocolate offers a sophisticated and intense flavor profile. The bitterness of premium dark chocolate beautifully contrasts with the subtle sweetness and crunch of the almonds. Dark chocolate, especially in higher cocoa percentages, is renowned for its antioxidant properties, which can help combat free radicals in the body. Paired with almonds, which are rich in healthy monounsaturated fats and Vitamin E, this snack becomes a powerful ally for heart health and overall well-being. Unlike many sugary confectioneries, our Dark Chocolate Almonds provide a satisfying treat with tangible health benefits, making them a smart choice for a conscious indulgence.",
      "isBestseller": true,
      "price": 450.00,
      "originalPrice": 480.00,
      "rating": 4.5,
      "reviews": 12
    },
    {
      "id": 11,
      "name": "Rose Petal Cashews",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/9/image_1024/Rose%20Petal%20Cashews",
      "description": "Flavorful Cashews!! Delight your senses with our unique Cashews Rose Petal.  Rose Petal Cashews are a luxurious fusion of creamy cashews and fragrant sun-dried rose petals, offering a sweet, floral twist on traditional snacking. Each bite delivers a delicate crunch with aromatic elegance — perfect for gifting, indulgent moments, or adding a gourmet touch to your day. These cashews are gently infused with the delicate essence of rose petals, creating a subtly floral and delightfully aromatic experience. Beyond their enchanting flavor, cashews themselves are a great source of healthy fats, particularly monounsaturated fats, and are rich in minerals like zinc, important for immune function, and copper, which aids in energy production. This innovative flavor offers a refreshing change from typical sweet or savory snacks, providing a sophisticated and unique taste profile while still delivering the inherent nutritional benefits of cashews.",
      "isBestseller": true,
      "price": 340.00,
      "originalPrice": 360.00,
      "rating": 4.5,
      "reviews": 104
    },
    {
      "id": 12,
      "name": "Premium Salted Cashew",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/10/image_1024/Premium%20Salted%20Cashew",
      "description": "Premium Bhi, Salted Bhi Enjoy the classic, comforting crunch of our Premium Salted Cashews. These cashews are dry-roasted to perfection, enhancing their natural sweetness and creating a satisfyingly crisp texture. Salted cashews are a fantastic source of plant-based protein and healthy fats, contributing to satiety and sustained energy throughout the day. They also provide essential minerals like magnesium, phosphorus, and zinc. Unlike many commercially roasted nuts that might use excessive oils or additives, our Cashews Roasted are prepared with a focus on natural flavor and health, offering a pure and wholesome snacking option that is both delicious and nutritious.",
      "isBestseller": true,
      "price": 320.00,
      "originalPrice": 370.00,
      "rating": 4.5,
      "reviews": 12
    },
    {
      "id": 13,
      "name": "Premium Classis Cashews",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/11/image_1024/Premium%20Classis%20Cashews",
      "description": "Simplicity is new Wow!! Discover the creamy, buttery perfection of our Cashews Plain. These raw cashews are a naturally soft and incredibly versatile nut, perfect for snacking or culinary use. Plain cashews are a powerhouse of healthy fats, protein, and dietary fiber. They are also rich in essential minerals like magnesium, zinc, and copper, which are crucial for various bodily functions including bone health and immunity. Our Plain Cashews offer the purest form of this delicious nut, free from any additives, ensuring you receive all their natural goodness and creamy texture, making them a superior choice for healthy snacking and cooking.",
      "isBestseller": true,
      "price": 320.00,
      "originalPrice": 350.00,
      "rating": 4.5,
      "reviews": 124
    },
    {
      "id": 14,
      "name": "Punjabi Tadka Cashews",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/12/image_1024/Punjabi%20Tadka%20Cashews",
      "description": "Sadda Punjabi Tadka Cashews Punjabi Tadka are a fiery fusion of premium roasted cashews and bold North Indian spices. Each bite bursts with the warmth of chili, garlic, and aromatic masalas — delivering a crunchy, flavorful experience that' s both satisfying and addictive. These cashews are coated with an authentic Punjabi spice blend, featuring a savory and aromatic mix of traditional Indian spices. This unique flavor profile adds an exciting twist to the humble cashew. Cashews, even with this bold seasoning, still provide valuable nutrients such as healthy fats and protein, contributing to a feeling of fullness. The spices used in Punjabi Tadka often have their own health benefits, contributing to digestion. Compared to other artificially flavored snacks, our Punjabi Tadka Cashews offer a genuine taste of India with real spices and real nutritional value.",
      "isBestseller": true,
      "price": 400.00,
      "originalPrice": 450.00,
      "rating": 4.5,
      "reviews": 150
    },
    {
      "id": 15,
      "name": "Pizza Cashews",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/13/image_1024/Pizza%20Cashews",
      "description": "Desi flavor for Pizza lovers Pizza Cashews are a bold and savory snack that combines the creamy crunch of roasted cashews with the irresistible flavor of classic pizza. Seasoned with a blend of Italian herbs, tangy tomato, and a hint of cheese, each bite delivers a gourmet twist that’s perfect for spice lovers and snack enthusiasts alike. These cashews are seasoned with a delicious pizza-inspired blend of herbs and spices, creating a savory and addictive snack that perfectly captures the essence of pizza. While providing an exciting taste, these cashews still offer the nutritional benefits of the nut itself, including heart-healthy fats and essential minerals like magnesium and zinc. This unique flavor allows you to enjoy the taste of pizza in a healthier, more convenient form, free from the excessive oils and processed ingredients often found in traditional pizza snacks, offering a truly distinctive and satisfying alternative.",
      "isBestseller": true,
      "price": 350.00,
      "originalPrice": 370.00,
      "rating": 4.5,
      "reviews": 124
    },
    {
      "id": 16,
      "name": "Rose Kishmish",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/15/image_1024/Rose%C2%A0Kishmish",
      "description": "Kishmish in its new avatar! Indulge in the delicate and aromatic sweetness of our Rose Kishmish, also known as Rose Raisins. These plump, sun-dried raisins are subtly infused with the exquisite essence of rose, offering a unique and elegant twist to a classic snack. Beyond their enchanting flavor, our Rose Kishmish are a natural source of energy, packed with beneficial sugars and dietary fiber that aid in digestion and promote a feeling of fullness. They also contain antioxidants, which help protect your body from cellular damage. Unlike many flavored dried fruits that rely on artificial essences and excessive added sugars, Rose Kishmish offers a genuinely sophisticated taste experience with real rose notes and pure, unadulterated goodness, making them a perfect guilt-free treat or a delightful addition to your culinary creations.",
      "isBestseller": true,
      "price": 270.00,
      "originalPrice": 290.00,
      "rating": 4.5,
      "reviews": 121
    },
    {
      "id": 17,
      "name": "Kala Khatta Kishmish",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/16/image_1024/Kala%20Khatta%20Kishmish",
      "description": "Enjoy authentic Kala Khatta Awaken your taste buds with the intriguing tangy and sweet notes of our Kala Khatta Kishmish. These dark, luscious raisins are given a zesty kick, reminiscent of the beloved Indian 'Kala Khatta' flavor. Not only are they incredibly delicious, but these raisins are also rich in iron, vital for healthy blood circulation and energy levels, and potassium, which supports proper muscle function. Their natural fiber content aids in digestive health. While many similar products on the market might use artificial colorings and flavor enhancers, our Kala Khatta Kishmish uses natural ingredients to achieve its distinctive taste, providing a vibrant and healthy snack that stands out from the ordinary and offers a truly unique flavor adventure.",
      "isBestseller": true,
      "price": 300.00,
      "originalPrice": 350.00,
      "rating": 4.5,
      "reviews": 68
    },
    {
      "id": 18,
      "name": "Afghani Kishmish",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/18/image_1024/Afghani%20Kishmish",
      "description": "Premium Afgani Kishmish Savor the robust and natural sweetness of our Kishmish Afghani. These large, succulent raisins, sourced directly from Afghanistan, are known for their exceptional quality and rich, concentrated flavor. They are sun-dried to perfection, preserving their natural sugars and a wealth of nutrients. Afghani Kishmish are an excellent source of natural energy, dietary fiber for digestive health, and valuable antioxidants. They also contain potassium, which is important for maintaining healthy blood pressure. In a market often saturated with mass-produced raisins, our Afghani Kishmish stands apart due to its superior size, intense natural sweetness, and authentic origin, offering a truly premium and wholesome snacking experience without any added sugars or artificial ingredients.",
      "isBestseller": true,
      "price": 280.00,
      "originalPrice": 310.00,
      "rating": 4.5,
      "reviews": 14
    },
    {
      "id": 19,
      "name": "Premium Salted Pistachio",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/21/image_1024/Premium%20Salted%20Pistachio",
      "description": "The Vibrant Green Gem Discover the irresistible crunch and savory satisfaction of our Salted Pistachios. Indulge in the vibrant flavor and impressive health benefits of pistachios. These delightful nuts are not only incredibly tasty but also a powerhouse of nutrition. Pistachios are rich in antioxidants, including lutein and zeaxanthin, which are particularly beneficial for eye health, helping to protect against age-related macular degeneration. They are also an excellent source of protein, making them a satisfying and energizing snack. What's more, pistachios offer a good amount of dietary fiber, promoting digestive health and helping to regulate blood sugar levels. Their unique combination of healthy fats, fiber, and protein contributes to a feeling of satiety, potentially aiding in weight management. Enjoy them shelled as a snack, add them to your trail mix, or use them to enhance your culinary creations with their distinct nutty flavor and beautiful green hue.",
      "isBestseller": true,
      "price": 410.00,
      "originalPrice": 450.00,
      "rating": 4.5,
      "reviews": 154
    },
    {
      "id": 20,
      "name": "Masala Cranberry",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/19/image_1024/Masala%20Cranberry",
      "description": "Masala Cranberry for tangy lovers Cranberry Masala is a bold fusion of tangy cranberries and aromatic Indian spices — delivering a sweet, sour, and spicy punch in every bite.  Ignite your palate with the vibrant and tangy zest of our Cranberry Masala. These plump, juicy cranberries are infused with an authentic Indian masala spice blend, creating a harmonious dance of sweet, spicy, and tangy flavors. Cranberries are renowned for their high antioxidant content, particularly proanthocyanidins, which support urinary tract health. They are also a good source of Vitamin C and dietary fiber. Unlike many artificially flavored fruit snacks, our Masala Cranberries offer a bold and natural flavor experience, combining the inherent health benefits of cranberries with the exciting kick of real spices, providing a uniquely flavorful and nutritious alternative to traditional dried fruit.",
      "isBestseller": true,
      "price": 440.00,
      "originalPrice": 460.00,
      "rating": 4.5,
      "reviews": 48
    },
    {
      "id": 22,
      "name": "Premium Classic Cranberry",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/20/image_1024/Premium%20Classic%20Cranberry",
      "description": "The Tangy Superfruit Discover the tart and triumphant taste of cranberries, a superfruit celebrated for its potent health benefits. These small, ruby-red berries are renowned for their high concentration of antioxidants, particularly proanthocyanidins (PACs), which are instrumental in preventing urinary tract infections by inhibiting bacteria from adhering to the bladder wall. Beyond their urinary health benefits, cranberries are also rich in Vitamin C, a vital nutrient for immune system support and skin health. They provide dietary fiber, contributing to digestive wellness, and various other beneficial plant compounds. Whether you enjoy them dried as a snack, in juices, or incorporated into your favorite recipes, cranberries offer a tangy burst of flavor and a wealth of protective nutrients, making them an excellent addition to a healthy lifestyle.",
      "isBestseller": true,
      "price": 350.00,
      "originalPrice": 380.00,
      "rating": 4.5,
      "reviews": 14
    },
    {
      "id": 23,
      "name": "Chilean Walnuts",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/22/image_1024/Chilean%20Walnuts",
      "description": "The Brain's Best Friend!! Unlock the incredible potential of walnuts, often hailed as the 'brain food' due to their exceptional nutritional profile. These distinctively shaped nuts are a superior source of Omega-3 fatty acids, particularly alpha-linolenic acid (ALA), which is vital for brain health, reducing inflammation, and supporting cardiovascular well-being. Walnuts also boast a high concentration of antioxidants, including polyphenols, which help combat oxidative stress and protect your cells from damage. They are a good source of fiber, supporting a healthy digestive system, and protein, contributing to muscle repair and growth. Incorporating walnuts into your diet can help improve cognitive function, support a healthy heart, and provide a wealth of essential nutrients. Enjoy them as a wholesome snack, sprinkle them over your oatmeal, or add them to your baked goods for a nutritious and flavorful boost.",
      "isBestseller": true,
      "price": 410.00,
      "originalPrice": 450.00,
      "rating": 5,
      "reviews": 45
    }
]
   
  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };
  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dry Fruits</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {drfruits.map((product, idx) => (
            <ProductCard key={idx} {...product} onAddToCart={handleViewProduct} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
