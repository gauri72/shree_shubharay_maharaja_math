'use client'
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SITE_PHONE_DISPLAY_MR, SITE_PHONE_TEL, SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sadhana", label: "Sadhana" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
]

const SOCIALS = [
    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", icon: "fab fa-whatsapp" },
    { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: "fab fa-facebook-f" },
    { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: "fab fa-youtube" },
    { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: "fab fa-instagram" },
    { href: SOCIAL_LINKS.twitter, label: "Twitter", icon: "fab fa-twitter" },
]

const MobileMenu = ({ handleMobileMenu }) => {
    const pathname = usePathname()

    // lock body scroll while the drawer is open
    useEffect(() => {
        const isOpen = () => document.body.classList.contains("mobile-menu-visible")
        const sync = () => {
            document.body.style.overflow = isOpen() ? "hidden" : ""
        }
        const observer = new MutationObserver(sync)
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
        sync()
        return () => {
            observer.disconnect()
            document.body.style.overflow = ""
        }
    }, [])

    // close on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && document.body.classList.contains("mobile-menu-visible")) {
                handleMobileMenu()
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [handleMobileMenu])

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

    return (
        <div className="mobile-nav__wrapper">
            <div
                className="mobile-nav__overlay snav__scrim"
                onClick={handleMobileMenu}
                aria-hidden="true"
            ></div>

            <aside
                className="mobile-nav__content snav"
                id="mobile-nav-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
            >
                <header className="snav__head">
                    <Link
                        href="/"
                        className="snav__brand"
                        aria-label="Home"
                        onClick={handleMobileMenu}
                    >
                        <img
                            src="assets/images/resources/shubharay-maharaj.jpg"
                            alt=""
                            className="snav__brand-img"
                        />
                        <span className="snav__brand-name">श्री शुभराय महाराज मठ</span>
                    </Link>
                    <button
                        type="button"
                        className="snav__close"
                        onClick={handleMobileMenu}
                        aria-label="Close menu"
                    >
                        <span className="snav__close-x" aria-hidden="true"></span>
                    </button>
                </header>

                <nav className="snav__nav" aria-label="Primary">
                    <ul className="snav__list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href} className="snav__item">
                                <Link
                                    href={item.href}
                                    className={`snav__link${isActive(item.href) ? " is-current" : ""}`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    onClick={handleMobileMenu}
                                >
                                    <span className="snav__link-label">{item.label}</span>
                                    <span className="snav__link-chev" aria-hidden="true"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <footer className="snav__foot">
                    <a className="snav__contact" href={SITE_PHONE_TEL}>
                        <span className="snav__contact-ico" aria-hidden="true">
                            <i className="fa fa-phone-alt"></i>
                        </span>
                        <span className="snav__contact-text">{SITE_PHONE_DISPLAY_MR}</span>
                    </a>
                    <a
                        className="snav__contact"
                        href={SITE_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="snav__contact-ico" aria-hidden="true">
                            <i className="icon-pin-two"></i>
                        </span>
                        <span className="snav__contact-text">
                            श्री शुभराय महाराज मठ, दत्त चौक, सोलापूर.
                        </span>
                    </a>

                    <div className="snav__social">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                className="snav__social-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                            >
                                <i className={s.icon}></i>
                            </a>
                        ))}
                    </div>
                </footer>
            </aside>
        </div>
    )
}

export default MobileMenu
