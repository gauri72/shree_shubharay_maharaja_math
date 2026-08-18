'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sadhana", label: "Sadhana" },
    { href: "/events", label: "Events" },
    { href: "/donation", label: "Donate" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
]

export default function Menu1() {
    const pathname = usePathname()

    return (
        <>
            <ul className="main-menu__list">
                {NAV_ITEMS.map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : (pathname === item.href || pathname.startsWith(`${item.href}/`))
                    return (
                        <li key={item.href} className={isActive ? "current" : ""}>
                            <Link href={item.href} aria-current={isActive ? "page" : undefined}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
