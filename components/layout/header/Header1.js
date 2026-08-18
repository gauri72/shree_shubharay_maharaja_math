import Link from "next/link"
import HeaderNavRow from "./HeaderNavRow"
import MobileMenu from "../MobileMenu"
import { SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

        <header className="main-header">
            <div className="divine-border" role="presentation"></div>
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-pin-two"></i>
                                </div>
                                <div className="text">
                                    <p><Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">श्री शुभराय महाराज मठ, दत्त चौक, सोलापूर.</Link></p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-right">
                            <div className="main-menu__social-box">
                                <p className="main-menu__social-title">आमच्यासोबत जोडा:</p>
                                <div className="main-menu__social">
                                    <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Link>
                                    <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i></Link>
                                    <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></Link>
                                    <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></Link>
                                    <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu" aria-label="Primary">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <HeaderNavRow isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                    </div>
                </div>
            </nav>
        </header>

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="divine-border" role="presentation"></div>
            <div className="sticky-header__content">
                <nav className="main-menu" aria-label="Primary (sticky)">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <HeaderNavRow isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                    </div>
                </nav>
            </div>{/*.sticky-header__content */}
        </div>{/*.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
