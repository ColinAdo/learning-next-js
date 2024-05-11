import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
}

export default function Blog() {
    return (
        <h2>Blog page</h2>
    )
}