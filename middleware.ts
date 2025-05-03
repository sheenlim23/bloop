import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicPaths = ['/signin', '/signup']
  const token = request.cookies.get('isAuthenticated')?.value
  const isAuthenticated = !!token

  if (isAuthenticated && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (publicPaths.includes(path)) {
    return NextResponse.next()
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // Otherwise allow
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
