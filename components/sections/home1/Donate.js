import Link from "next/link"
export default function Donate() {
    return (
        <>
       
       {/*Donate One Start */}
       <section className="donate-one pdt">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="/about">A Legacy In Art</Link>
                            </h3>
                            <p className="donate-one__text">The Math is home to nearly 500 paintings created by
                                Shri Shubharay Maharaj himself, one of the largest collections<br/> by a single
                                artist in India — sacred works depicting the life of Lord Krishna.
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="/about" className="donate-one__btn thm-btn">Know More<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="donate-one__single donate-one__single-2">
                            <div className="donate-one__single-bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/donate-one-single-bg-two.jpg)' }} >
                            </div>
                            <h3 className="donate-one__title"><Link href="/sadhana">A Scholar Of Many Arts</Link></h3>
                            <p className="donate-one__text">Beyond his paintings, Shri Shubharay Maharaj was also
                                a revered poet and philosopher. His verses and writings are still<br/> preserved
                                today, a testament to a life devoted equally to learning and devotion.
                            </p>
                            <div className="donate-one__btn-box">
                                <Link href="/sadhana" className="donate-one__btn thm-btn">Get Involved<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donate One End */}
           
        </>
    )
}
