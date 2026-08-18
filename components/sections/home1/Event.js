'use client'
import Link from "next/link"

const events = [
    {
        img: "assets/images/event/event-1-1.jpg",
        date: "20 Oct 2026",
        title: "Dussehra",
        text: "Vijayadashami is observed with special puja at the Math, marking the triumph of good over evil.",
    },
    {
        img: "assets/images/event/event-1-2.jpg",
        date: "08 Nov 2026",
        title: "Diwali",
        text: "Lamps, aarti and sweets shared with every devotee as the Math celebrates the festival of lights.",
    },
    {
        img: "assets/images/event/event-1-3.jpg",
        date: "20 Nov 2026",
        title: "Kartiki Ekadashi",
        text: "One of our principal celebrations — a chariot procession and village circumambulation with thousands of devotees.",
    },
]

export default function Event() {
    return (
        <>

        {/**Event One Start */}
        <section className="event-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Events</span>
                    </div>
                    <h2 className="section-title__title title-animation">Upcoming Festivals <br/>At The Math</h2>
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
                                    <div className="event-one__date">
                                        <p><span className="icon-calender"></span>{event.date}</p>
                                    </div>
                                </div>
                                <div className="event-one__content">
                                    <h4 className="event-one__title"><Link href="/events">{event.title}</Link></h4>
                                    <p className="event-one__text">{event.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="event-one__cta wow fadeInUp" data-wow-delay="300ms">
                    <Link href="/events" className="event-one__btn thm-btn">View All Events<span><i
                                className="icon-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
        {/**Event One End */}

        </>
    )
}
