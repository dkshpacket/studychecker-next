"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavTop = () => {
    const path = usePathname()

    const isHome = path == '/'
    return (
        <nav className={`py-6 text-2xl font-medium  ` }> <Link href='/'>

            단붕이 <span className="font-bold">생활  도우미</span></Link>


        </nav>
    )
}
