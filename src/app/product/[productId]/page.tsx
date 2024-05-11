import Link from 'next/link';

export default function ProductDetail({ params }: {
    params: { productId: string };
}) {
    return (
        <>
            <h2>Product Detail {params.productId}</h2> <br />
            <Link href="/product">Back</Link>
        </>
    )
}
