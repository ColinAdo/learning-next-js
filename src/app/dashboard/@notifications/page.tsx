import Card from "@/components/card";
import Link from 'next/link';

export default function Notifications() {
    return (
        <>
            <Card>
                Notifications <br />
                <Link href="/dashboard/archived">Archive</Link>
            </Card> 
            
        </>
    )
}