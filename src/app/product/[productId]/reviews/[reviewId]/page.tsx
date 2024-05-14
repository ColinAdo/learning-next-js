"use client";
export default function ReviewDetail({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    function getRandomInt(count: number) {
        return Math.floor(Math.random() * count);
    }

    const random = getRandomInt(2);

    if (random == 1) {
        throw new Error("Error loading review....");
    }
    return (
        <div>
            <h2>Review { params.reviewId } Of Product { params.productId }</h2>
        </div>
    );
}