import Link from 'next/link';

export default function Home(){
    return (
        <>
            <h1>Home page</h1> <br />
            <Link href="/about">About</Link>
        </>
    )
}