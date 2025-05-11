import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <Link href="/">CRUD app</Link>
            <Link href={"/addTopic"}>Add topic</Link>
        </nav>
    )
}