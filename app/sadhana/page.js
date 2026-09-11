import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/sections/home1/MantraStrip"
import Gallery from "@/components/sections/home1/Gallery"
import Event from "@/components/sections/home1/Event"
import Cta from "@/components/sections/home1/Cta"

const SADHANA_MANTRAS = [
    "गुरु भजनी",
    "मोर नाचतो अंगणी",
    "पायाकडे पाहुनी",
]

export const metadata = {
    title: 'कार्यक्रम — श्री शुभराय महाराज मठ',
    description: 'Explore the daily sadhana, spiritual practices and disciplines followed at Shri Shubharay Maharaj Math.',
}

export default function Sadhana() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>

                {/*Mantra Strip (between header and breadcrumb) */}
                <MantraStrip mantras={SADHANA_MANTRAS} />

                {/*Breadcrumb Bg Section Start */}
                <section className="breadcrumb-bg-section breadcrumb-bg-section--padada">
                    <img src="assets/images/backgrounds/breadcrumb-bg-sadhana.png" alt="" className="breadcrumb-bg-section__img"/>
                    <span className="breadcrumb-bg-section__padada-shadow" aria-hidden="true"></span>
                    <span className="breadcrumb-bg-section__padada" aria-hidden="true"></span>
                    <span className="breadcrumb-bg-section__padada-scallop" aria-hidden="true"></span>
                </section>
                {/*Breadcrumb Bg Section End */}

                <Gallery />

                <Event />

                <Cta />

            </Layout>
        </>
    )
}
