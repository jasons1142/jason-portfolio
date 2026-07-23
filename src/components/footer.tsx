"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-green-100 text-black">
            <p>Jason Senecharles</p>
            <Link href="https://github.com/jasons1142" target="_blank">Github</Link>
            <Link href="https://www.linkedin.com/in/jason-senecharles" target="_blank">LinkedIn</Link>
            <p>Email: jsene1113@gmail.com</p>
        </footer>
    )
}