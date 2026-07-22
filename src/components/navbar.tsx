"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <Link href="/" onClick={() => setOpen(false)}>
                Home
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
                Projects
            </Link>

            <Link href="/experience" onClick={() => setOpen(false)}>
                Experience
            </Link>

            <Link href="/skills" onClick={() => setOpen(false)}>
                Skills
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
                About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
            </Link>
        </nav>
    )
}