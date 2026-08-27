import Link from "next/link"
export default function Found() {
    return (
        <>
        {/*Found One Start */}
        <section className="found-one">
            <div className="divine-border--found divine-border--found-top" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-vertical--gold divine-border--found-left" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-vertical--gold divine-border--found-right" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-vertical--maroon divine-border--found-left" role="presentation"></div>
            <div className="divine-border--found-vertical divine-border--found-vertical--maroon divine-border--found-right" role="presentation"></div>
            <span className="found-one__corner found-one__corner--tl" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--tr" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--bl found-one__corner--gold" aria-hidden="true"></span>
            <span className="found-one__corner found-one__corner--br found-one__corner--gold" aria-hidden="true"></span>
            <div className="divine-border--found divine-border--found-bottom divine-border--found-bottom--gold" role="presentation"></div>
            <div className="found-one__bg">
                <div className="found-one__shape-1 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-1-mala.png" alt=""/>
                </div>
                <div className="found-one__shape-2 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-2-parayan.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">आमची साधना</span>
                    </div>
                    <h2 className="section-title__title title-animation">श्रद्धेने जपलेली <br/> <span>भक्तीची परंपरा</span>
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
                                <h4 className="found-one__title"><Link href="/sadhana">दैनिक आरती व दर्शन</Link></h4>
                                <p className="found-one__text">रोज दोन वेळा आरती होते — सकाळी आणि संध्याकाळी.
                                    दर्शन व प्रार्थनेसाठी येणाऱ्या सर्व भाविकांसाठी मठ नेहमी खुला असतो.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-clock"></i>
                                    <span>सकाळ व संध्याकाळ, दररोज</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">अधिक वाचा<span><i
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
                                <h4 className="found-one__title"><Link href="/sadhana">जप, मंत्र साधना व पारायण</Link></h4>
                                <p className="found-one__text">जप, मंत्रसाधना आणि ग्रंथांचे पारायण ही आमची रोजची
                                    साधना आहे. यामुळे मन एकाग्र होते आणि शांती मिळते.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-hand"></i>
                                    <span>एक साधी नियमित साधना</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">अधिक वाचा<span><i
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
                                <h4 className="found-one__title"><Link href="/sadhana">उत्सव व रथयात्रा</Link></h4>
                                <p className="found-one__text">आषाढी व कार्तिकी एकादशीला रथयात्रा काढली जाते —
                                    वर्षातील आमचे सर्वात मोठे उत्सव. या दिवशी संपूर्ण समाज एकत्र येतो व उत्सवात सहभागी होतो.</p>
                                <div className="found-one__highlight">
                                    <i className="icon-calender"></i>
                                    <span>आषाढी व कार्तिकी एकादशी</span>
                                </div>
                                <div className="found-one__btn-box">
                                    <Link href="/sadhana" className="found-one__btn thm-btn">अधिक वाचा<span><i
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