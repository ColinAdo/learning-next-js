import { Suspense } from 'react';
import { Product } from '@/components/product';
import { Review } from '@/components/review';

export default function ProductDetail() {
    return (
        <div>
            <Suspense fallback={<h3>Loading product.....</h3>}>
                <Product />
            </Suspense>
            <Suspense fallback={<h3>Loading review.....</h3>}>
                <Review /> 
            </Suspense>
        </div>
    )
}