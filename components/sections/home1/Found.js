import Link from "next/link"
export default function Found() {
    return (
        <>
        {/*Found One Start */}
        <section className="found-one">
            <div className="found-one__bg">
                <div className="found-one__shape-1 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Sadhana</span>
                    </div>
                    <h2 className="section-title__title title-animation">Paths Of Devotion <br/> We <span>Walk</span> Together
                    </h2>
                </div>
                <div className="row">
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-1.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/sadhana">Daily Aarti &amp; Darshan</Link></h4>
                                <p className="found-one__text">Every day begins and ends with aarti at the Math,
                                    open to all devotees who come for darshan and quiet prayer.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-clock"></i>
                                    <span>Morning &amp; Evening, Every Day</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-2.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/sadhana">Jap &amp; Mantra Sadhana</Link></h4>
                                <p className="found-one__text">A quiet, steady practice of chanting that has guided
                                    devotees toward focus and inner peace for generations.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-hand"></i>
                                    <span>A Simple Daily Discipline</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                    <img src="assets/images/resources/found-1-3.jpg" alt=""/>
                                    <img src="assets/images/resources/found-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="/sadhana">Festivals &amp; Rath Yatra</Link></h4>
                                <p className="found-one__text">Our biggest celebration of the year — a chariot
                                    procession on Ashadhi Ekadashi that brings the whole community together.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-calender"></i>
                                    <span>Ashadhi &amp; Kartiki Ekadashi</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                </div>
            </div>
        </section>
        {/*Found One End */}

        </>
     )
}