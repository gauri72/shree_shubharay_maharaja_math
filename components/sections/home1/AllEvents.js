'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const allEvents = [
    { img: "assets/images/event/event-list--1-1.jpg", title: "गुढीपाडवा" },
    { img: "assets/images/event/event-list--1-2.jpg", title: "रामनवमी" },
    { img: "assets/images/event/event-list--1-3.jpg", title: "गुरुपौर्णिमा" },
    { img: "assets/images/event/event-list--1-4.jpg", title: "आषाढी एकादशी" },
    { img: "assets/images/event/event-list--1-5.jpg", title: "गणेश चतुर्थी" },
    { img: "assets/images/event/event-list--1-6.jpg", title: "कार्तिकी एकादशी" },
    { img: "assets/images/event/event-list--1-1.jpg", title: "दत्त जयंती" },
]

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.all-events__nav--next',
        prevEl: '.all-events__nav--prev',
    },
    pagination: {
        el: '.all-events__pagination',
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
}

export default function AllEvents() {
    return (
        <>
        {/**All Events Start */}
        <section className="all-events all-events--welcome-bg">
            <div className="divine-border--all-events divine-border--all-events-top" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-left" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-right" role="presentation"></div>
            <span className="all-events__corner all-events__corner--tl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--tr" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--bl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--br" aria-hidden="true"></span>
            <div className="divine-border--all-events divine-border--all-events-bottom" role="presentation"></div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">वार्षिक कार्यक्रम</span>
                    </div>
                    <h2 className="section-title__title title-animation">सर्व उत्सव</h2>
                </div>

                <div className="all-events__carousel-wrap">
                    <Swiper {...swiperOptions} className="all-events__carousel">
                        {allEvents.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div className="all-events__card">
                                    <div className="all-events__photo">
                                        <img src={event.img} alt={event.title}/>
                                    </div>
                                    <div className="all-events__plate">
                                        <span className="all-events__plate-ornament" aria-hidden="true"></span>
                                        <h3 className="all-events__title">{event.title}</h3>
                                        <span className="all-events__plate-ornament all-events__plate-ornament--right" aria-hidden="true"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button type="button" className="all-events__nav all-events__nav--prev" aria-label="Previous">
                        <i className="icon-arrow-right"></i>
                    </button>
                    <button type="button" className="all-events__nav all-events__nav--next" aria-label="Next">
                        <i className="icon-arrow-right"></i>
                    </button>

                    <div className="all-events__pagination"></div>
                </div>
            </div>
        </section>
        {/**All Events End */}
        </>
    )
}
