import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const categoryFileMap: Record<string, string> = {
  'dry-fruits': 'Dry Fruits.json',
  'chips': 'Chips.json',
  'mixes': 'Mixes.json',
  'others': 'Others.json',
  'mouth-fresheners': 'Mouth Fresheners.json',
};

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fileName = categoryFileMap[categoryName ?? ''];
    if (!fileName) {
      setError('Category not found');
      setLoading(false);
      return;
    }
    fetch(`/public/${fileName}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName?.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            {product.image && (
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
            )}
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-700 font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
