import { Product } from '@/types/product.types';
import { create } from 'zustand';

interface ProductState {
  products: Product[];
  setProducts: (items: Product[]) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (items) => set(() => ({ products: items })),
}));
