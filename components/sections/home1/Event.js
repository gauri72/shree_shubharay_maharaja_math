'use client'
import Link from "next/link"

const events = [
    {
        img: "assets/images/event/event-1-1.jpg",
        date: "20 Oct 2026",
        title: "दसरा",
        text: "विजयादशमीनिमित्त मठात विशेष पूजा व आरती.",
    },
    {
        img: "assets/images/event/event-1-2.jpg",
        date: "08 Nov 2026",
        title: "दिवाळी",
        text: "दीपोत्सवात मठात आरती व नैवेद्य अर्पण.",
    },
    {
        img: "assets/images/event/event-1-3.jpg",
        date: "20 Nov 2026",
        title: "कार्तिकी एकादशी",
        text: "मठाचा सर्वात मोठा उत्सव — रथयात्रा व गावप्रदक्षिणा.",
    },
]

export default function Event() {
    return (
        <>

        {/**Event One Start */}
        <section className="event-one">
            <div className="divine-border--event divine-border--event-top" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-left" role="presentation"></div>
            <div className="divine-border--event-vertical divine-border--event-right" role="presentation"></div>
            <span className="event-one__corner event-one__corner--tl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--tr" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--bl" aria-hidden="true"></span>
            <span className="event-one__corner event-one__corner--br" aria-hidden="true"></span>
            <div className="divine-border--event divine-border--event-bottom" role="presentation"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">उत्सव-परंपरा</span>
                    </div>
                    <h2 className="section-title__title title-animation">मठातील आगामी <br/>उत्सव व पर्वदिन</h2>
                </div>
                <div className="row">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`col-xl-4 col-lg-4 wow ${index === 0 ? "fadeInLeft" : index === 1 ? "fadeInUp" : "fadeInRight"}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                        >
                            <div className="event-one__single">
                                <div className="event-one__img-box">
                                    <div className="event-one__img">
                                        <img src={event.img} alt={event.title}/>
                                    </div>
                                </div>
                                <div className="event-one__content">
                                    <h4 className="event-one__title"><Link href="/events">{event.title}</Link></h4>
                                    <p className="event-one__date">
                                        <span className="icon-calender" aria-hidden="true"></span>
                                        <span>{event.date}</span>
                                    </p>
                                    <p className="event-one__text">{event.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="event-one__cta wow fadeInUp" data-wow-delay="300ms">
                    <Link href="/events" className="event-one__btn thm-btn">सर्व उत्सव पाहा<span><i
                                className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
        {/**Event One End */}

        </>
    )
}
