'use client'
import Link from "next/link";
import { SITE_PHONE_DISPLAY_MR, SITE_PHONE_TEL, SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content" id="mobile-nav-menu">
                    <div className="mobile-nav__header">
                        <Link href="/" aria-label="Home" className="shubharay-logo shubharay-logo--mobile" onClick={handleMobileMenu}>
                            <img src="assets/images/resources/shubharay-maharaj.jpg" alt="Shubharay Maharaja Math" className="shubharay-logo__img"/>
                            <span className="shubharay-logo__text">
                                <span className="shubharay-logo__title">श्री शुभराय महाराज मठ</span>
                            </span>
                        </Link>
                        <button type="button" className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} aria-label="Close menu">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>

                    <nav className="mobile-nav__container" aria-label="Mobile">
                        <ul className="main-menu__list">
                            <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                            <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                            <li><Link href="/sadhana" onClick={handleMobileMenu}>Sadhana</Link></li>
                            <li><Link href="/gallery" onClick={handleMobileMenu}>Gallery</Link></li>
                            <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="mobile-nav__footer">
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="icon-pin-two"></i>
                                <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">श्री शुभराय महाराज मठ, दत्त चौक, सोलापूर.</Link>
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                <Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY_MR}</Link>
                            </li>
                        </ul>
                        <div className="mobile-nav__social">
                            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fab fa-whatsapp"></Link>
                            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="fab fa-facebook-square"></Link>
                            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="fab fa-youtube"></Link>
                            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="fab fa-instagram"></Link>
                            <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="fab fa-twitter"></Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default MobileMenu;
