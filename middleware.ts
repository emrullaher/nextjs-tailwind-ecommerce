import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'


export function middleware(request: NextRequest, event: NextFetchEvent) {

    let hasToken = request.cookies.has('token')
    if (request.url.includes('/profile') && !hasToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (request.url.includes('/login') && hasToken) {
        return NextResponse.redirect(new URL('/profile', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/profile/:path*', '/login']
}

