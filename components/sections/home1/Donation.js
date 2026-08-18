'use client'
import Link from "next/link"

export default function Donation() {
    return (
        <>
        {/*Donation One Start */}
        <section className="donation-one">
            <div className="donation-one__wrapper">
                <div className="donation-one__left">
                    <div className="donation-one__left-bg donation-one__left-bg--qr"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/donation-qr-code.jpg)' }} ></div>
                </div>
                <div className="donation-one__right">
                    <div className="donation-one__content-box">
                        <div className="section-title-two text-left sec-title-animation animation-style2">
                            <div className="section-title-two__tagline-box">
                                <span className="section-title-two__tagline">Join Us Now</span>
                            </div>
                            <h2 className="section-title-two__title title-animation">Your Offering, <br/>
                                <span>Our Seva</span></h2>
                        </div>
                        <div className="donation-one__donate-box">
                            <ul className="donation-one__supports wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <i className="icon-check"></i>
                                    <span>Daily Aarti</span>
                                </li>
                                <li>
                                    <i className="icon-check"></i>
                                    <span>Seva &amp; Sadhana</span>
                                </li>
                                <li>
                                    <i className="icon-check"></i>
                                    <span>Festivals</span>
                                </li>
                            </ul>
                            <div className="donate-now wow fadeInUp" data-wow-delay=".7s">
                                <div className="donation-one__btn-box">
                                    <Link href="/donation" className="donation-one__btn thm-btn">Other Ways To Help<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation One End */}
        </>
    )
}
