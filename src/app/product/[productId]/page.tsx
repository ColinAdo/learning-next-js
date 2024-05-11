import { Metadata } from "next"

type Props = {
    params: {
        productId: string;
    };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => { 
    const title = await new Promise(resolve => {
        setTimeout(() =>{
            resolve(`iPnone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`,
    }
}

export default function ProductDetail({ params }: Props) {
    return <h2>Product Detail {params.productId}</h2>
}
