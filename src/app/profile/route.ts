import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();

    console.log(requestHeaders.get('Authorization'));
    console.log(headersList.get('Authorization'));

    return new Response("<h2>Profile GET</h2>", {
        headers: {
            "Content-Type": "text/html"
        }
    });
}