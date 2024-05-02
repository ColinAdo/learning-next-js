export default function ReviewsList({ params }: {
    params: { productId: string; };
}
) {
    return (
        <>
            <h2>Reviews of product { params.productId }</h2>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </>
    );
}