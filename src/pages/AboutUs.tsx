import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutUs: React.FC = () => (
  <main className="min-h-screen bg-background mt-12">
    <Header />
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-2">NutterlyGood is dedicated to bringing you the finest quality nuts, roasted and seasoned to perfection. Our mission is to provide healthy, delicious snacks for every occasion.</p>
      <p>We source our nuts from trusted farms and use only natural ingredients. Taste the difference with NutterlyGood!</p>
    </div>
    <Footer />
  </main>
);

export default AboutUs;
