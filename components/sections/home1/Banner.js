'use client'
import { useRef } from "react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
    "assets/images/slider/slider-v1-img-1.jpg",
    "assets/images/slider/slider-v1-img-2.jpg",
]

const PADADA_LIFT_MS = 6300

const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1200,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        enabled: false,
    },
}

export default function Banner() {
    const swiperRef = useRef(null)

    return (
        <section className="main-slider breadcrumb-bg-section breadcrumb-bg-section--padada">
            <Swiper
                {...swiperOptions}
                className="main-slider__carousel"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                    setTimeout(() => {
                        swiper.autoplay.start()
                    }, PADADA_LIFT_MS)
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="main-slider-media"
                            style={{ backgroundImage: `url(${src})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className="breadcrumb-bg-section__padada-shadow" aria-hidden="true"></span>
            <span className="breadcrumb-bg-section__padada" aria-hidden="true"></span>
            <span className="breadcrumb-bg-section__padada-scallop" aria-hidden="true"></span>
        </section>
    )
}
