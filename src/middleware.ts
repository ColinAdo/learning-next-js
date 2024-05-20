import { NextRequest, NextResponse } from "next/server";

// Custom matcher config
// export function middleware(request: NextRequest) {

//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile",
// };


// Using conditional statement
// export function middleware(request: NextRequest) {

//     if (request.nextUrl.pathname === "/profile") { 
//         return NextResponse.redirect(new URL("/comments", request.url))
//     }
// }

// Middleware with cookies and headers
export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme","dark");
    }
    response.headers.set("number", '20')
    return response
}


