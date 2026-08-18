'use client'
import Layout from "@/components/layout/Layout"

const images = Array.from({ length: 10 }, (_, i) => `assets/images/temple/temple-${i + 1}.png`)

export default function GalleryPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Gallery">
        {/*Gallery Page Start*/}
        <section className="gallery-page">
            <div className="container">
                <div className="row">
                    {images.map((src, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${100 + (index % 3) * 100}ms`} key={index}>
                            <div className="gallery-page__item">
                                <img src={src} alt={`Shri Shubharay Maharaj Math ${index + 1}`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/*Gallery Page End*/}
        </Layout>
        </>
    )
}
