import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log('URL:', request.url); // Full URL as a string
    console.log('Parsed URL:', request.nextUrl); // Parsed URL object for more details like pathname, search, etc.

    const response = NextResponse.next();
    return response;
}
