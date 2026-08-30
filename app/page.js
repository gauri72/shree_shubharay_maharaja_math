import Layout from "@/components/layout/Layout"
import MantraStrip from "@/components/sections/home1/MantraStrip"
import Banner from "@/components/sections/home1/Banner"
import Welcome from "@/components/sections/home1/Welcome"
import Gallery from "@/components/sections/home1/Gallery"
import HomeGallery from "@/components/sections/home1/HomeGallery"
import Legacy from "@/components/sections/home1/Legacy"
import Cta from "@/components/sections/home1/Cta"
import Found from "@/components/sections/home1/Found"
import Donation from "@/components/sections/home1/Donation"
import Event from "@/components/sections/home1/Event"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <MantraStrip />
                <Banner />
                <Gallery />
                <Welcome />
                <Legacy />
                <Found />
                <Event />
                <Donation />
                <HomeGallery />
                <Cta />
            </Layout>

        </>
    )
}