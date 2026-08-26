'use client'
import { forwardRef, lazy, Suspense, useEffect, useRef, useState } from "react"

const HTMLFlipBook = lazy(() => import("react-pageflip"))

const SHUBHARAY_MAHARAJ_PAGE = {
    image: "assets/images/resources/book-shubharay-maharaja.png",
    name: "शुभराय महाराज",
    title: "मठाचे संस्थापक (इ.स. १७५०–१८२०)",
    text: "ऋग्वेदी ब्राह्मण कुळात जन्मलेल्या शुभराय महाराजांनी गुरुकुल परंपरेत वेद, शास्त्रे, पुराणे व विविध कला यांचे सखोल अध्ययन केले आणि टिपू सुलतानाच्या दरबारात नायब दिवाणपदावर पोहोचले. मारुती बाप्पांच्या 'उठ, चल उठ' या दिव्य आदेशाने प्रेरित होऊन त्यांनी सर्वस्वाचा त्याग केला आणि कट्यारधारी मारुतीची मूर्ती सोबत घेऊन प्रस्थान केले. मैसाळगी गावी त्यांनी तेथील ३५० कन्नड भाषिक कुटुंबांना मराठी भजन व नित्य पूजाविधीचे शिक्षण दिले. आंध्र-कर्नाटक सीमेजवळ गुरू थिमाप्पा रामदासींकडून गुरुमंत्र प्राप्त होताच ते सोलापुरात स्थायिक झाले. इ.स. १७८१ मध्ये स्थापन झालेला हा मठ हरी-हरांच्या एकात्मतेचे प्रतीक मानला जातो; इ.स. १७८५ च्या आषाढी एकादशीस येथे प्रथम अभिषेक संपन्न झाला. शृंगेरी शंकराचार्यांनीही महाराजांच्या यज्ञातून प्रकट झालेला औदुंबर वृक्ष पाहून मठाच्या परंपरेस मान्यता दिली. बारामतीहून आलेले राओजी बुवा एकनाथी भागवतातील 'संतांची सेवा हीच देवाला परम प्रिय' हे वचन वाचून सदैव मठाच्या सेवेत राहिले. महाराजांनी स्वतः एकही खिळा न वापरता अवघ्या चार महिन्यांत घडवलेला अष्टपैलू रथ आजही कार्तिकी एकादशीच्या यात्रेत भक्तिपूर्वक वापरला जातो.",
}

const BUWA_GHARANE_PAGE = {
    image: "assets/images/resources/book-buwa-family.png",
    name: "बुवा घराणे",
    title: "गुरुपरंपरा, संत सान्निध्य आणि मठाची वास्तू",
    text: "राओजी बुवांनी एकनाथी भागवतातील वचनाने प्रेरित होऊन स्वीकारलेल्या सेवाव्रताचे पालन पुढे संपूर्ण घराण्याने केले; त्यांच्या पत्नी लक्ष्मीबाई यांनी स्वयंपाकगृहाची जबाबदारी स्वीकारली आणि बुवा घराण्यातील कोणीतरी सदैव या सेवेत कार्यरत राहील, असा आशीर्वाद महाराजांकडून प्राप्त झाला. इ.स. २००१ मध्ये मठाच्या नवीन वास्तुरूपाची (नववास्तूची) उभारणी करण्यात आली. कालांतराने शंकर महाराज मठात तब्बल सत्तावीस वर्षे एका आसनावर तपस्येस बसले; तेथे नोकरीच्या शोधात असलेल्या व विश्रांतीसाठी येणाऱ्या लोकांशी ते आपुलकीने संवाद साधत, म्हणून ती जागा आजही 'बेकार हॉल' या नावाने ओळखली जाते. मुख्य गाभाऱ्यात पांडुरंग, स्वामी समर्थ, राम-लक्ष्मण-सीता-हनुमान तसेच एकाच लाकडी ओंडक्यातून कोरलेली विशेष गणराय मूर्ती प्रतिष्ठापित असून, स्वामी समर्थ, शंकर महाराज, शुभराय महाराज व जयकृष्ण बुवा यांच्या पादुकाही येथे जतन करण्यात आल्या आहेत. मणिक प्रभूंसारख्या थोर सत्पुरुषांनीही या मठास भेट देऊन आशीर्वाद दिल्याची नोंद आहे. पुढील पिढीत स्वामी समर्थ स्वतः मठाच्या द्वारी येऊन 'जेवायला मिळेल का?' असे विचारत घरातील सर्वांसमवेत भोजन ग्रहण करून काही काळ वास्तव्यास राहिले होते.",
}

const SHUBHANGI_MAI_PAGE = {
    image: "assets/images/resources/book-shubhangi-tai-buwa.png",
    name: "सौ. शुभांगीताई बुवा (शुभांगी माई)",
    title: "विद्यमान मठाधिपती — आठवी पिढी",
    text: "पुण्यातील दहा वर्षांची कारकीर्द सोडून शुभांगी माईंनी जीर्ण झालेल्या मठाचा जीर्णोद्धार केला आणि समाजशास्त्राच्या अभ्यासाची जोड देत अध्यात्म व समाजसेवा यांचा सुंदर समन्वय घडवला. इ.स. २००३ मध्ये सुरू करण्यात आलेल्या पाखर संकुलातर्फे ३५०हून अधिक अनाथ मुलांचे कायदेशीर दत्तक विधान यशस्वीरीत्या पार पडले असून, अनेक निराधार बालकांना कायमस्वरूपी कुटुंब व आधार प्राप्त झाला आहे. निर्मल तारा 'माहेर' या उपक्रमांतर्गत महिला व कुटुंबांना मोबाईलपासून दूर राहून नात्यांशी पुन्हा जोडणारे दोन दिवसांचे पूर्णतः विनामूल्य निवासी विश्रांती केंद्र चालवले जाते, जेथे मनःशांती व आपुलकीचा अनुभव मिळतो. मठातर्फे बालसंस्कार वर्ग तसेच कौटुंबिक तंटे सामोपचाराने सोडवणारे समुपदेशन केंद्रही चालवले जाते — हे सर्व शासनाच्या साहाय्याविना वा याचनेविना, केवळ समाजाच्या पाठबळावर व श्रद्धेवर उभे आहे. इ.स. २०१७ मध्ये प्रकाशित झालेल्या 'कलायोगी श्री शुभराय' या ग्रंथात महाराजांचे १४७ मूळ अभंग जतन करण्यात आले आहेत, जे पुढील पिढ्यांसाठी एक अमूल्य वारसा ठरले आहेत. अशाप्रकारे अध्यात्म व समाजसेवेचा हा वसा शुभांगी माईंनी अखंडपणे पुढे चालवला आहे.",
}

const PAGES = [
    { image: SHUBHARAY_MAHARAJ_PAGE.image, name: SHUBHARAY_MAHARAJ_PAGE.name },
    { image: null, name: SHUBHARAY_MAHARAJ_PAGE.name, title: SHUBHARAY_MAHARAJ_PAGE.title, text: SHUBHARAY_MAHARAJ_PAGE.text },
    { image: BUWA_GHARANE_PAGE.image, name: BUWA_GHARANE_PAGE.name },
    { image: null, name: BUWA_GHARANE_PAGE.name, title: BUWA_GHARANE_PAGE.title, text: BUWA_GHARANE_PAGE.text },
    { image: SHUBHANGI_MAI_PAGE.image, name: SHUBHANGI_MAI_PAGE.name },
    { image: null, name: SHUBHANGI_MAI_PAGE.name, title: SHUBHANGI_MAI_PAGE.title, text: SHUBHANGI_MAI_PAGE.text },
]

const CoverPage = forwardRef((props, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/resources/book-logo.png" alt="" />
            </span>

            <h3 className="legacy-book-page__cover-title">
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
                भक्तीचा वारसा
                <span className="legacy-book-page__cover-title-bar" aria-hidden="true">||</span>
            </h3>
            <span className="legacy-book-page__cover-subtitle">आठ पिढ्यांची सेवा आणि साधनेची परंपरा</span>
        </div>
    </div>
))
CoverPage.displayName = "CoverPage"

const PortraitPage = forwardRef(({ page, index }, ref) => (
    <div className="legacy-book-page legacy-book-page--portrait" ref={ref}>
        <div className="legacy-book-page__photo legacy-book-page__photo--full">
            <img src={page.image} alt={page.name} />
            <span className="legacy-book-page__photo-frame" aria-hidden="true"></span>
        </div>
        <span className="legacy-book-page__number">{index}</span>
    </div>
))
PortraitPage.displayName = "PortraitPage"

const TextPage = forwardRef(({ page }, ref) => (
    <div className="legacy-book-page" ref={ref}>
        <div className="legacy-book-page__body">
            {page.title && (
                <>
                    <span className="legacy-book-page__name">{page.name}</span>
                    <span className="legacy-book-page__role">{page.title}</span>
                </>
            )}
            <p className="legacy-book-page__text">{page.text}</p>
        </div>
    </div>
))
TextPage.displayName = "TextPage"

const ContentPage = forwardRef(({ person, index }, ref) => (
    person.image
        ? <PortraitPage page={person} index={index} ref={ref} />
        : <TextPage page={person} index={index} ref={ref} />
))
ContentPage.displayName = "ContentPage"

const BackCoverPage = forwardRef((props, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/resources/book-logo.png" alt="" />
            </span>
            <span className="legacy-book-page__cover-subtitle legacy-book-page__cover-subtitle--back">श्री शुभराय महाराज मठ, सोलापूर</span>
        </div>
    </div>
))
BackCoverPage.displayName = "BackCoverPage"

const TABLET_MIN_WIDTH = 768
const TABLET_MAX_WIDTH = 991
const MOBILE_MAX_WIDTH = 767

export default function Legacy() {
    const bookRef = useRef(null)
    const [pageIndex, setPageIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const totalPages = PAGES.length + 2

    useEffect(() => {
        const tabletMql = window.matchMedia(`(min-width: ${TABLET_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px)`)
        const updateTablet = () => setIsTablet(tabletMql.matches)
        updateTablet()
        tabletMql.addEventListener("change", updateTablet)

        const mobileMql = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
        const updateMobile = () => setIsMobile(mobileMql.matches)
        updateMobile()
        mobileMql.addEventListener("change", updateMobile)

        return () => {
            tabletMql.removeEventListener("change", updateTablet)
            mobileMql.removeEventListener("change", updateMobile)
        }
    }, [])

    const goPrev = () => bookRef.current?.pageFlip()?.flipPrev()
    const goNext = () => bookRef.current?.pageFlip()?.flipNext()

    const handleFlip = (e) => {
        setPageIndex(e.data)
        setIsOpen(e.data > 0)
    }

    return (
        <section className="legacy-One">
            <div className="divine-border--legacy divine-border--legacy-top" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-left" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-right" role="presentation"></div>
            <span className="legacy-One__corner legacy-One__corner--tl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--tr" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--bl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--br" aria-hidden="true"></span>
            <div className="legacy-book-stage">
                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--prev"
                    onClick={goPrev}
                    disabled={pageIndex === 0}
                    aria-label="मागील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="legacy-book-wrap wow fadeIn" data-wow-delay="100ms">
                    <Suspense fallback={<div className="legacy-book-loading" aria-hidden="true"></div>}>
                        <HTMLFlipBook
                            key={isTablet ? "tablet" : isMobile ? "mobile" : "default"}
                            ref={bookRef}
                            width={isMobile ? 460 : 620}
                            height={isMobile ? 720 : 720}
                            size="stretch"
                            minWidth={isTablet ? 400 : isMobile ? 340 : 220}
                            maxWidth={isTablet ? 460 : isMobile ? 460 : 900}
                            minHeight={256}
                            maxHeight={isMobile ? 720 : 880}
                            showCover={true}
                            maxShadowOpacity={0.65}
                            flippingTime={800}
                            drawShadow={true}
                            useMouseEvents={true}
                            className={`legacy-book${isOpen ? " legacy-book--opened" : " legacy-book--closed"}`}
                            onFlip={handleFlip}
                        >
                            <CoverPage />
                            {PAGES.map((person, i) => (
                                <ContentPage key={i} person={person} index={i + 1} />
                            ))}
                            <BackCoverPage />
                        </HTMLFlipBook>
                    </Suspense>
                </div>

                <button
                    type="button"
                    className="legacy-book-arrow legacy-book-arrow--next"
                    onClick={goNext}
                    disabled={pageIndex === totalPages - 1}
                    aria-label="पुढील पान"
                >
                    <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="legacy-book-arrow-row">
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--prev legacy-book-arrow--stacked"
                        onClick={goPrev}
                        disabled={pageIndex === 0}
                        aria-label="मागील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="legacy-book-arrow legacy-book-arrow--next legacy-book-arrow--stacked"
                        onClick={goNext}
                        disabled={pageIndex === totalPages - 1}
                        aria-label="पुढील पान"
                    >
                        <svg className="legacy-book-arrow__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="divine-border--legacy divine-border--legacy-bottom" role="presentation"></div>
        </section>
    )
}
