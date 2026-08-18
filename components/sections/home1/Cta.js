'use client'
import Link from "next/link"
export default function Cta() {
    return (
        <>

        {/*CTA One Start */}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box sec-title-animation animation-style1 wow fadeInUp" data-wow-delay="100ms">
                        <span className="cta-one__tagline">Shri Shubharay Maharaj Math</span>
                        <h2 className="cta-one__title title-animation">A Tradition That Has Blessed <br/>Solapur Since 1783</h2>
                        <p className="cta-one__text">Step into a space of quiet devotion, daily aarti and living
                            heritage — open to every visitor who seeks a moment of peace.</p>
                    </div>
                    <div className="cta-one__btn-box wow fadeInUp" data-wow-delay="200ms">
                        <Link href="/sadhana" className="cta-one__btn-1 thm-btn">Plan Your Visit<span><i
                                    className="icon-arrow-right"></i></span></Link>
                        <Link href="/about" className="cta-one__btn-2 thm-btn">Our Story<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}

        </>
    )
}
