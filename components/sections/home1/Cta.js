'use client'
import Link from "next/link"
export default function Cta() {
    return (
        <>

        {/*CTA One Start */}
        <section className="cta-one">
            {/* Gold Om/swastik ornamental border framing the maroon section */}
            <div className="divine-border--event divine-border--event-top" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-left" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-right" role="presentation"></div>
            <span className="event-one__corner event-one__corner--tl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--tr" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--bl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--event divine-border--event-bottom" role="presentation"></div>
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box sec-title-animation animation-style1 wow fadeInUp" data-wow-delay="100ms">
                        <span className="cta-one__tagline">श्री शुभराय महाराज मठ</span>
                        <h2 className="cta-one__title title-animation">सतराशे त्र्याऐंशीपासूनची परंपरा, <br/>
                            सोलापूरच्या मनी भक्तीचा झरा</h2>
                        <p className="cta-one__text">इथे नित्य आरतीचा नाद, अन् शांत भक्तीचा भास; <br/>
                            जिवंत परंपरेच्या सावलीत, प्रत्येक भाविकाला मिळे विसावा खास.</p>
                    </div>
                    <div className="cta-one__btn-box wow fadeInUp" data-wow-delay="200ms">
                        <Link href="/sadhana" className="cta-one__btn-1 thm-btn">दर्शनाची तयारी करा<span><i
                                    className="icon-arrow-right"></i></span></Link>
                        <Link href="/about" className="cta-one__btn-2 thm-btn">आमची कहाणी<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}

        </>
    )
}
