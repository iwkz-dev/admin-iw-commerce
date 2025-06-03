import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  // req.auth contains the user session

  const requestedUrl = req.nextUrl.pathname;
  let response: NextResponse = NextResponse.next();

  if (!req.auth && requestedUrl !== '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('callbackUrl', req.nextUrl.pathname + req.nextUrl.search);
    response = NextResponse.redirect(url);
  }

  return response;
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};
