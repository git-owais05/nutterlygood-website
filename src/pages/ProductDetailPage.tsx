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
    "image": "https://nutterlygood.odoo.com/web/image/product.product/8/image_512",
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
    "image": "https://nutterlygood.odoo.com/web/image/product.product/7/image_512",
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
    "image": "https://nutterlygood.odoo.com/web/image/product.product/6/image_512",
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
  },
  // Dry Fruits json data

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
    },
    // chips json data
    {
      "id": 24,
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
      "id": 25,
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
      "id": 26,
      "name": "Makhana Chips",
      "image": "https://nutterlygood.odoo.com/web/image/product.product/31/image_1024/Makhana%20Chips",
      "description": "Genuinely wholesome!! Crunch into wellness with our vibrant Makhana Chips. Made from roasted fox nuts (makhana), these chips are a testament to how delicious and satisfying healthy snacking can be. Unlike greasy potato chips laden with unhealthy fats and artificial ingredients, our Makhana Chips are naturally light, airy, and packed with incredible nutritional benefits. Makhana are renowned for their low calorie and fat content, making them an excellent choice for mindful munching. They are also a good source of plant-based protein, dietary fiber for digestive wellness, and essential minerals like calcium and magnesium, which support bone health. Enjoy a genuinely wholesome and uniquely flavorful chip that offers a guilt-free crunch and a powerful boost of nutrients.",
      "isBestseller": true,
      "price": 420,
      "originalPrice": 480,
      "rating": 4.5,
      "reviews": 124
    },
    // mixes json data 
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
    },
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
    },
    // others json data 
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
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="mb-4 text-muted-foreground">{product.description}</p>
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
