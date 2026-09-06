'use client'
import Link from "next/link";
import { SITE_PHONE_DISPLAY_MR, SITE_PHONE_TEL, SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content" id="mobile-nav-menu">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} aria-label="Close menu"><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image" className="shubharay-logo shubharay-logo--mobile">
                            <img src="assets/images/resources/shubharay-maharaj.jpg" alt="Shubharay Math" className="shubharay-logo__img"/>
                            <span className="shubharay-logo__text">
                                <span className="shubharay-logo__title">श्री शुभराय मठ</span>
                            </span>
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/sadhana">Sadhana</Link></li>
                                <li><Link href="/events">Events</Link></li>
                                <li><Link href="/gallery">Gallery</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="icon-pin-two"></i>
                            <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">श्री शुभराय महाराज मठ, दत्त चौक, सोलापूर.</Link>
                        </li>
                        <li className="mobile-nav__contact--inline">
                            <i className="fa fa-phone-alt"></i>
                            <Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY_MR}</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="fab fa-whatsapp"></Link>
                            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square"></Link>
                            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="fab fa-youtube"></Link>
                            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></Link>
                            <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></Link>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default MobileMenu;
