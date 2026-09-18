'use client'
import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/sections/home1/MantraStrip"
import Gallery from "@/components/sections/home1/Gallery"
import Cta from "@/components/sections/home1/Cta"

const images = Array.from({ length: 10 }, (_, i) => `assets/images/temple/temple-${i + 1}.png`)

const GALLERY_MANTRAS = [
    "सदा सर्वदा योग तुझा घडावा",
    "तुझे कारणी देह माझा पडावा",
    "उपेक्षू नको गुणवंता अनंता",
    "रघूनायका मागणे हेचि आता",
]

export default function GalleryPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} mantraStrip={<MantraStrip />}>

        {/*Breadcrumb Bg Section Start */}
        <section className="breadcrumb-bg-section breadcrumb-bg-section--padada">
            <img src="assets/images/backgrounds/breadcrumb-bg-gallery.png" alt="" className="breadcrumb-bg-section__img"/>
            <span className="breadcrumb-bg-section__padada-shadow" aria-hidden="true"></span>
            <span className="breadcrumb-bg-section__padada" aria-hidden="true"></span>
            <span className="breadcrumb-bg-section__padada-scallop" aria-hidden="true"></span>
        </section>
        {/*Breadcrumb Bg Section End */}

        <Gallery />

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
        <Cta />
        <MantraStrip mantras={GALLERY_MANTRAS} />
        </Layout>
        </>
    )
}
