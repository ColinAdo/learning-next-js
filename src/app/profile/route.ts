import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();

    console.log(requestHeaders.get('Authorization'));
    console.log(headersList.get('Authorization'));

    const theme = request.cookies.get('theme');

    console.log(theme);

    return new Response("<h2>Profile GET</h2>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}