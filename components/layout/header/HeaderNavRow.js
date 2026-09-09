import Link from "next/link"
import Menu1 from "../Menu1"
import { SITE_PHONE_DISPLAY_MR, SITE_PHONE_TEL } from "@/lib/siteInfo"

export default function HeaderNavRow({ isMobileMenu, handleMobileMenu }) {
    return (
        <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
                <div className="main-menu__logo main-menu__logo--shubharay">
                    <Link href="/" className="shubharay-logo">
                        <img src="assets/images/resources/shubharay-maharaj.jpg" alt="Shubharay Maharaja Math" className="shubharay-logo__img"/>
                        <span className="shubharay-logo__text">
                            <span className="shubharay-logo__title">श्री शुभराय महाराज मठ</span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="main-menu__main-menu-box">
                <button
                    type="button"
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                    aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                    aria-expanded={!!isMobileMenu}
                    aria-controls="mobile-nav-menu"
                >
                    <i className="fa fa-bars"></i>
                </button>
                <Menu1 />
            </div>
            <div className="main-menu__right">
                <div className="main-menu__call">
                    <div className="main-menu__call-icon">
                        <i className="icon-call"></i>
                    </div>
                    <div className="main-menu__call-content">
                        <p className="main-menu__call-sub-title">आम्हाला कॉल करा</p>
                        <h5 className="main-menu__call-number"><Link href={SITE_PHONE_TEL}>{SITE_PHONE_DISPLAY_MR}</Link></h5>
                    </div>
                </div>
                <div className="main-menu__btn-box">
                    <Link href="/about" className="main-menu__btn thm-btn">आमच्याबद्दल<span><i
                                className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </div>
    )
}
