import { NextRequest, NextResponse } from "next/server";

// Custom matcher config
// export function middleware(request: NextRequest) {

//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile",
// };


// Using conditional statement
export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === "/profile") { 
        return NextResponse.redirect(new URL("/comments", request.url))
    }
}

