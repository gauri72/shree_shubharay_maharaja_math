'use client'

const TEMPLE_PHOTO_COUNT = 8
const images = Array.from({ length: TEMPLE_PHOTO_COUNT }, (_, i) => `assets/images/temple/temple-${i + 1}.png`)

export default function Gallery() {
    return (
        <>
        {/*Gallery Marquee Start */}
        <section className="temple-gallery">
            <div className="temple-gallery__marquee">
                <div className="temple-gallery__track">
                    {[...images, ...images].map((src, index) => (
                        <div className="temple-gallery__item" key={index}>
                            <img src={src} alt={`Shri Shubharay Maharaj Math ${(index % images.length) + 1}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/*Gallery Marquee End */}
        </>
    )
}
