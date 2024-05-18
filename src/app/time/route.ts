export const dynamic = "force-dynamic"; // Using Segment Config Option

export async function GET() {
    return Response.json(
        {
            time: new Date().toLocaleString(),
        }
    )
}