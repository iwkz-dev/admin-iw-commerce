export interface Product {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  stock: number;
  hasVariant: boolean;
  eventId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[];
  productVariantIds: number[];
}
