import { create } from 'zustand';

interface ProductState {
  products: any[];
  setProducts: (items: any[]) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (items) => set(() => ({ products: items })),
}));
