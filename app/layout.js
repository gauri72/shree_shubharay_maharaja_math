import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, libreBaskerville, yatraOne } from '@/lib/font'
export const metadata = {
    title: {
        default: 'श्री शुभराय मठ',
        template: '%s',
    },
    description: 'Shri Shubharay Maharaj Math — a spiritual home dedicated to devotion, seva and community upliftment in Solapur.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable} ${yatraOne.variable}`}>
            <body>{children}</body>
        </html>
    )
}
