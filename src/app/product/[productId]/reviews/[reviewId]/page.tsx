export default function ReviewDetail({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    return <h2>Review { params.reviewId } Of Product { params.productId }</h2>;
}