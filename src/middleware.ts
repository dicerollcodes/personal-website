import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // If it's a static file request from the public directory
  if (pathname.startsWith('/images/') || pathname.includes('.png') || pathname.includes('.jpg')) {
    // Create a new URL for the request
    const url = new URL(pathname, request.url);
    
    // Remove any query parameters
    url.search = '';
    
    // Return the response with cache headers
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 