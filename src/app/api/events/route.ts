import { auth } from '@/auth';
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
  const session = await auth();

  if (!session || !session.accessToken) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const accessToken = session.accessToken;
  const response = await fetch(`${process.env.BASE_API_URL}/api/admin/events`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
