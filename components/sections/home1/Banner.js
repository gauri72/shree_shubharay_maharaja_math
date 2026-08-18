'use client'
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
    "assets/images/slider/slider-v1-img-1.jpg",
    "assets/images/slider/slider-v1-img-2.jpg",
]

const swiperOptions = {
    modules: [Autoplay, Navigation],
    effect: "slide",
    speed: 1000,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
}

export default function Banner() {
    return (
        <section className="main-slider">
            <Swiper
                {...swiperOptions}
                className="main-slider__carousel"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="main-slider-media" style={{ backgroundImage: `url(${src})` }}></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
