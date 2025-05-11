import { NextResponse } from 'next/server';

const mockProducts = [
  {
    id: 1,
    name: 'Sate Ayam',
    description: 'Sate ayam enak banget',
    basePrice: 12,
    stock: 100,
    hasVariant: false,
    eventId: 1,
    categoryId: 1,
    createdAt: '2025-05-01T22:06:54+00:00',
    updatedAt: '2025-05-01T22:09:07.546572+00:00',
    imageUrls: [],
    productVariantIds: [],
  },
];

export async function GET(): Promise<NextResponse> {
  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 500 });
  // }

  return NextResponse.json({
    products: mockProducts,
  });
}
