'use client'
import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/sections/home1/MantraStrip"
import Gallery from "@/components/sections/home1/Gallery"
import Donation from "@/components/sections/home1/Donation"
import Donate from "@/components/sections/home1/Donate"
import Cta from "@/components/sections/home1/Cta"

const DONATION_MANTRAS = [
    "सदा सर्वदा योग तुझा घडावा",
    "तुझे कारणी देह माझा पडावा",
    "उपेक्षू नको गुणवंता अनंता",
    "रघूनायका मागणे हेचि आता",
]

export default function DonationPage() {
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

        <Donation />

        <Donate />

        <Cta />
        <MantraStrip mantras={DONATION_MANTRAS} />
        </Layout>
        </>
    )
}
