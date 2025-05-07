'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const json = await res.json();

        if (!res.ok) throw new Error(json.error || 'Failed to fetch products');
        console.log(json.products);

        setProducts(json.products);
      } catch (err: any) {
        setError(err.message);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
