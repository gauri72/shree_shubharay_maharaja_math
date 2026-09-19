'use client'
import { useCallback, useRef, useState } from "react"
import useLightbox from "./useLightbox"

const PHOTOS = [
    { src: "assets/images/photo-gallery/photo-1.png", label: "गाभाऱ्यातील सुशोभित मूर्ती" },
    { src: "assets/images/photo-gallery/photo-2.png", label: "उत्सवकालीन सजावट" },
    { src: "assets/images/photo-gallery/photo-3.png", label: "पुष्प अलंकार" },
    { src: "assets/images/photo-gallery/photo-4.png", label: "नित्य पूजा-अर्चा" },
    { src: "assets/images/photo-gallery/photo-5.png", label: "आरतीची तयारी" },
    { src: "assets/images/photo-gallery/photo-6.png", label: "भक्तिभावाचे क्षण" },
]

const SWIPE_THRESHOLD = 50

export default function PhotoGallery() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [flashIndex, setFlashIndex] = useState(null)
    const isOpen = activeIndex !== null
    const touch = useRef({ x: 0, active: false })

    const openAt = useCallback((index) => {
        setFlashIndex(index)
        window.setTimeout(() => setFlashIndex(null), 260)
        window.setTimeout(() => setActiveIndex(index), 120)
    }, [])

    const close = useCallback(() => setActiveIndex(null), [])
    const showPrev = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length))
    }, [])
    const showNext = useCallback(() => {
        setActiveIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length))
    }, [])

    const dialogRef = useLightbox(isOpen, { onEscape: close, onPrev: showPrev, onNext: showNext })

    const onTouchStart = (e) => {
        touch.current = { x: e.touches[0].clientX, active: true }
    }
    const onTouchEnd = (e) => {
        if (!touch.current.active) return
        const dx = e.changedTouches[0].clientX - touch.current.x
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
            if (dx < 0) showNext()
            else showPrev()
        }
        touch.current.active = false
    }

    return (
        <section className="gallery-grid gallery-grid--photo">
            <div className="divine-border--all-events divine-border--all-events-top" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-left" role="presentation"></div>
            <div className="divine-border--all-events-vertical divine-border--all-events-right" role="presentation"></div>
            <span className="all-events__corner all-events__corner--tl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--tr" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--bl" aria-hidden="true"></span>
            <span className="all-events__corner all-events__corner--br" aria-hidden="true"></span>
            <div className="divine-border--all-events divine-border--all-events-bottom" role="presentation"></div>

            <div className="container">
                <div className="video-gallery__head">
                    {/* Decorative feather strips flanking the heading (desktop only) */}
                    <span className="gallery-grid__feather gallery-grid__feather--left" aria-hidden="true"></span>
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">श्री शुभराय महाराज मठातील भक्तिमय क्षण</span>
                        </div>
                        <h2 className="section-title__title title-animation">फोटो गॅलरी</h2>
                    </div>
                    <span className="gallery-grid__feather gallery-grid__feather--right" aria-hidden="true"></span>
                </div>

                <div className="photo-masonry">
                    {PHOTOS.map((photo, index) => (
                        <button
                            type="button"
                            key={index}
                            className="photo-masonry__item"
                            onClick={() => openAt(index)}
                            aria-label={`${photo.label} - मोठे करून पहा`}
                        >
                            <img src={photo.src} alt={photo.label} loading="lazy" />
                            {flashIndex === index && <span className="photo-masonry__flash" aria-hidden="true"></span>}
                        </button>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="photo-lightbox" role="dialog" aria-modal="true" onClick={close}>
                    <div
                        className="photo-lightbox__inner"
                        ref={dialogRef}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <button type="button" className="photo-lightbox__close" onClick={close} aria-label="बंद करा">
                            &times;
                        </button>
                        <button
                            type="button"
                            className="photo-lightbox__nav photo-lightbox__nav--prev"
                            onClick={showPrev}
                            aria-label="मागील छायाचित्र"
                        >
                            <i className="icon-arrow-right"></i>
                        </button>
                        <img
                            src={PHOTOS[activeIndex].src}
                            alt={PHOTOS[activeIndex].label}
                            className="photo-lightbox__img"
                        />
                        <button
                            type="button"
                            className="photo-lightbox__nav photo-lightbox__nav--next"
                            onClick={showNext}
                            aria-label="पुढील छायाचित्र"
                        >
                            <i className="icon-arrow-right"></i>
                        </button>

                        <div className="photo-lightbox__thumbs">
                            {PHOTOS.map((photo, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={`photo-lightbox__thumb${index === activeIndex ? " is-active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={photo.label}
                                    aria-current={index === activeIndex}
                                >
                                    <img src={photo.src} alt="" loading="lazy" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
