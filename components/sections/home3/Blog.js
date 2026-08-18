import Link from "next/link"
export default function Blog() {
    return (
        <>
          
        {/*Blog Three Start */}
        <section className="blog-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">News And Blogs</span>
                    </div>
                    <h2 className="section-title__title title-animation">Recent News And Articles</h2>
                </div>
                <div className="row">
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-1.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-3-1.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-three__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Empowering Communities Through
                                        Your Generosity</Link></h3>
                                <p className="blog-three__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <Link href="blog-details" className="blog-three__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-2.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-3-2.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-three__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Transforming Lives, One
                                        Donation at a Time</Link></h3>
                                <p className="blog-three__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <Link href="blog-details" className="blog-three__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-3.jpg" alt="@@title" />
                                    <img src="assets/images/blog/blog-3-3.jpg" alt="@@title" />
                                    <Link href="blog-details" className="blog-three__link"><span
                                            className="sr-only"></span></Link>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <ul className="blog-three__meta list-unstyled">
                                    <li>
                                        <Link href="blog-details"><span className="icon-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details"><span className="icon-comment"></span>Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-three__title"><Link href="blog-details">Spreading Hope One Act of
                                        Kindness at a Time</Link></h3>
                                <p className="blog-three__text">Charity and Donation is a category that involves giving
                                    financial</p>
                                <Link href="blog-details" className="blog-three__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Three End */}
        
        </>
    )
}
