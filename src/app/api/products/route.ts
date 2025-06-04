import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const session = await auth();

  if (!session || !session.accessToken) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const accessToken = session.accessToken;
  const response = await fetch(`${process.env.BASE_API_URL}/api/admin/products`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
