import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/sections/home1/MantraStrip"
import Banner from "@/components/sections/home1/Banner"
// Welcome section hidden on the home page for now (its visit-card now
// lives in the Contact page's FAQ section instead).
// import Welcome from "@/components/sections/home1/Welcome"
import Gallery from "@/components/sections/home1/Gallery"
// Bottom gallery mosaic hidden on the home page for now.
// import HomeGallery from "@/components/sections/home1/HomeGallery"
import Legacy from "@/components/sections/home1/Legacy"
import Cta from "@/components/sections/home1/Cta"
import Event from "@/components/sections/home1/Event"

const CLOSING_MANTRAS = [
    "ज्ञानोबा माऊली तुकाराम",
]

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <MantraStrip />
                <Banner />
                <Gallery />
                {/* <Welcome /> */}
                <Legacy />
                <Event />
                <Cta />
                <MantraStrip mantras={CLOSING_MANTRAS} />
            </Layout>

        </>
    )
}