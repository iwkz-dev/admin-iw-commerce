import { NextResponse } from 'next/server';

const mockEvents = [
  {
    id: 1,
    name: 'SASO',
    startTime: '2025-05-01T22:06:54+00:00',
    endTime: '2025-05-01T22:06:54+00:00',
    description: 'saso desc',
    createdAt: '2025-05-01T22:06:54+00:00',
    updatedAt: '2025-05-01T22:09:07.546572+00:00',
    isClosed: false,
    imageUrls: [],
    contactPersonIds: [],
    paymentInformation: [],
  },
  {
    id: 2,
    name: 'TOKO',
    startTime: '2025-05-01T22:06:54+00:00',
    endTime: '2025-05-01T22:06:54+00:00',
    description: 'toko desc',
    createdAt: '2025-05-01T22:06:54+00:00',
    updatedAt: '2025-05-01T22:09:07.546572+00:00',
    isClosed: false,
    imageUrls: [],
    contactPersonIds: [],
    paymentInformation: [],
  },
];

export async function GET(): Promise<NextResponse> {
  // if (error) {
  //   return NextResponse.json({ error: error.message }, { status: 500 });
  // }

  return NextResponse.json({
    events: mockEvents,
  });
}
