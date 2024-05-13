"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log('You are ordering');
        router.push("/");
    };
    return (
        <>
            <h2>Order your produc</h2> <br />
            <button onClick={handleClick}>Order</button>
        </>
    )
}