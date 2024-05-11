import Link from 'next/link';


export default function Home(){
    return (
        <>
            <h2>Home page</h2> <br />
            <Link href="/product">Products List</Link>
        </>
    )
}