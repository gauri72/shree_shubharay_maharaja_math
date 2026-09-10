import Link from "next/link"
import { SITE_PHONE_DISPLAY_MR, SITE_PHONE_TEL, SITE_ADDRESS_MR_LINE1, SITE_ADDRESS_MR_LINE2, SITE_MAP_URL, SOCIAL_LINKS } from "@/lib/siteInfo"

const SEVA = [
    "नित्य दर्शन व आरती",
    "अन्नदान व भोजनसेवा",
    "सत्संग व उत्सव",
    "समाजसेवा व मदत",
]

const QUICK_LINKS = [
    { href: "/about", label: "आमच्याविषयी" },
    { href: "/sadhana", label: "नित्य साधना" },
    { href: "/gallery", label: "छायाचित्र दालन" },
    { href: "/contact", label: "दर्शन व संपर्क" },
]

const SOCIALS = [
    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", icon: "fab fa-whatsapp" },
    { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: "icon-facebook" },
    { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: "fab fa-youtube" },
    { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: "icon-instagram" },
    { href: SOCIAL_LINKS.twitter, label: "Twitter", icon: "icon-twitter" },
]

export default function Footer1() {
    const year = new Date().getFullYear()
    return (
        <footer className="site-footer site-footer--shubharay">
            <div className="site-footer__top">
                <div className="container">
                    {/* Fluid CSS-grid: 4 -> 2 -> 1 columns with no per-column media queries */}
                    <div className="site-footer__top-inner site-footer__grid">

                        <div className="footer-widget footer-widget__about wow fadeInUp" data-wow-delay="100ms">
                            <Link href="/" className="footer-widget__about-logo shubharay-logo">
                                <img src="assets/images/resources/shubharay-maharaj.jpg" alt="Shubharay Maharaja Math" className="shubharay-logo__img" />
                                <span className="shubharay-logo__text">
                                    <span className="shubharay-logo__title">श्री शुभराय महाराज मठ</span>
                                </span>
                            </Link>
                            <p className="footer-widget__about-text">भक्ती, सेवा आणि समाजाच्या उन्नतीसाठी समर्पित असलेले हे एक आध्यात्मिक स्थान. उत्सव, समाजकार्य आणि नित्य सेवेच्या माध्यमातून श्री शुभराय महाराजांची शिकवण पुढे नेण्याचे कार्य येथे अखंड सुरू आहे.</p>
                        </div>

                        <div className="footer-widget footer-widget__services wow fadeInUp" data-wow-delay="200ms">
                            <h4 className="footer-widget__title">सेवा व अर्पण</h4>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                {SEVA.map((item) => (
                                    <li key={item}><i className="icon-love"></i>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-widget footer-widget__links wow fadeInUp" data-wow-delay="300ms">
                            <h4 className="footer-widget__title">उपयुक्त दुवे</h4>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__services-list footer-widget__services-list--icon list-unstyled">
                                {QUICK_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href}><i className="icon-arrow-right"></i><span>{l.label}</span></Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-widget footer-widget__contact wow fadeInUp" data-wow-delay="400ms">
                            <h3 className="footer-widget__title">संपर्क माहिती</h3>
                            <span className="footer-widget__title-ornament"><span></span></span>
                            <ul className="footer-widget__contact-list list-unstyled">
                                <li>
                                    <span className="icon"><span className="icon-call"></span></span>
                                    <p><Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY_MR}</Link></p>
                                </li>
                                <li className="footer-widget__contact-list--multiline">
                                    <span className="icon"><span className="icon-pin-two"></span></span>
                                    <p>
                                        <Link href={SITE_MAP_URL} target="_blank" rel="noopener noreferrer">
                                            {SITE_ADDRESS_MR_LINE1}<br /> {SITE_ADDRESS_MR_LINE2}
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                            <div className="site-footer__social" aria-label="Social media">
                                {SOCIALS.map((s) => (
                                    <Link
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                    >
                                        <i className={s.icon}></i>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__copyright-text">
                            Copyright &copy; {year} <Link href="/">Shubharay Maharaja Math</Link>. All Rights Reserved.
                        </p>
                        <ul className="list-unstyled site-footer__bottom-menu">
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="/cookies-settings">Cookies Settings</Link></li>
                        </ul>
                        <p className="site-footer__credit-text">
                            Designed &amp; Developed by <Link href="mailto:kolekargauri8@gmail.com" className="site-footer__credit-name">Gauri Kolekar</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
