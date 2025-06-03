'use client';

import { useProductStore } from '@/store/productStore';
import { Product } from '@/types/product.types';
import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Page = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');

        const json: { data: { items: Product[] } } = await res.json();
        const { items } = json.data;
        setProducts(items);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div>
      <Table>
        <TableCaption>Product List</TableCaption>
        <TableHeader>
          <TableRow>
            {Object.keys(products[0]).map((key, i) => (
              <TableHead className="w-[100px]" key={i}>
                {key}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              {Object.entries(product).map((value, i) => (
                <TableCell className="font-medium" key={i}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
