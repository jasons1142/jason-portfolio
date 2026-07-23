"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b px-4 py-3 min-h-24 bg-green-100 text-black">
            <Link href="/" onClick={() => setOpen(false)}>
                Home
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
                Projects
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
                About
            </Link>

            <Link href="/resume" onClick={() => setOpen(false)}>
                Resume
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
            </Link>
        </nav>
    )
}