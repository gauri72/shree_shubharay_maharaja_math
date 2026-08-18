import Link from "next/link"
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_ADDRESS, SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

export default function Footer1() {
    const year = new Date().getFullYear()
    return (
        <>

           <footer className="site-footer site-footer--shubharay">
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link href="/" className="shubharay-logo">
                                            <img src="assets/images/resources/shubharay-maharaj.jpg" alt="Shubharay Math" className="shubharay-logo__img"/>
                                            <span className="shubharay-logo__text">
                                                <span className="shubharay-logo__title">Shubharay</span>
                                                <span className="shubharay-logo__subtitle">Math</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="footer-widget__about-text">A spiritual home dedicated to devotion, seva and
                                        community upliftment, carrying forward Shri Shubharay Maharaj&apos;s teachings through
                                        events, outreach and everyday acts of service.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Seva &amp; Offerings</h4>
                                    <span className="footer-widget__title-ornament"><span></span></span>
                                    <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                        <li><i className="icon-love"></i>Daily Darshan &amp; Aarti</li>
                                        <li><i className="icon-love"></i>Annadaan &amp; Food Seva</li>
                                        <li><i className="icon-love"></i>Satsang &amp; Utsav</li>
                                        <li><i className="icon-love"></i>Community Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__links">
                                    <h4 className="footer-widget__title">Links</h4>
                                    <span className="footer-widget__title-ornament"><span></span></span>
                                    <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                        <li><Link href="/about"><i className="icon-arrow-right"></i><span>Who We Are</span></Link></li>
                                        <li><Link href="/sadhana"><i className="icon-arrow-right"></i><span>Practices</span></Link></li>
                                        <li><Link href="/gallery"><i className="icon-arrow-right"></i><span>Gallery</span></Link></li>
                                        <li><Link href="/events"><i className="icon-arrow-right"></i><span>Upcoming Events</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact Info</h3>
                                    <span className="footer-widget__title-ornament"><span></span></span>
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY}</Link></p>
                                        </li>
                                        <li className="footer-widget__contact-list--multiline">
                                            <div className="icon">
                                                <span className="icon-pin-two"></span>
                                            </div>
                                            <p><Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">Shri Shubharay Maharaj Math,<br/> Datta Chowk, Solapur.</Link></p>
                                        </li>
                                    </ul>
                                    <div className="site-footer__social">
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
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">Copyright &copy; {year} <Link href="/">Shubharay Math</Link>.<br className="site-footer__copyright-break"/> All Rights Reserved.</p>
                                </div>
                                <div className="site-footer__credit">
                                    <p className="site-footer__credit-text">Designed &amp; Developed by <Link href="mailto:kolekargauri8@gmail.com" className="site-footer__credit-name">Gauri Kolekar</Link></p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/terms-of-service">Terms of Service</Link></li>
                                        <li><Link href="/cookies-settings">Cookies Settings</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
