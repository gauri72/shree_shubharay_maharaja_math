'use client'
import { forwardRef, lazy, Suspense, useEffect, useRef, useState } from "react"

const HTMLFlipBook = lazy(() => import("react-pageflip"))

const SHUBHARAY_MAHARAJ_PAGE = {
    image: "assets/images/resources/book-shubharay-maharaja.png",
    name: "शुभराय महाराज",
    title: "मठाचे संस्थापक (इ.स. १७५०–१८२०)",
    text: "ऋग्वेदी ब्राह्मण कुळात जन्मलेल्या शुभराय महाराजांनी गुरुकुल परंपरेत वेद, शास्त्रे, पुराणे व विविध कला यांचे सखोल अध्ययन केले. मळूर येथे टिपू सुलतानाच्या सेवेत असताना, गुणग्राही टिपू सुलतानाने त्यांची योग्यता ओळखून त्यांना नायब दिवाणपदावर बढती दिली. मारुती बाप्पांच्या 'उठ, चल उठ' या दिव्य आदेशाने प्रेरित होऊन त्यांनी सर्वस्वाचा त्याग केला आणि कट्यारधारी मारुतीची मूर्ती सोबत घेऊन घोड्यावरून शांतपणे प्रस्थान केले. जागृत मारुती स्थान असलेल्या मैसाळगी गावी त्यांनी तेथील ३५० कन्नड भाषिक कुटुंबांना मराठी भजन व नित्य पूजाविधीचे शिक्षण दिले. आंध्र-कर्नाटक सीमेजवळ गुरू थिमाप्पा रामदासींकडून गुरुमंत्र प्राप्त होताच त्यांनी महाराजांना सोंदलगी (सोलापूर) येथे जाण्याची आज्ञा दिली. सोलापुरात महाराज प्रथम हत्ती बावडीजवळ बसत, जिथे गावकरी कपडे धूत असत; पुढे गावकऱ्यांनी बेगमपेठेत त्यांच्यासाठी एक छोटे मंदिर उभारले. येथेच त्यांनी वारकरी पंथाची बीजे रुजवली. इ.स. १७८१ मध्ये स्थापन झालेल्या या मठात इ.स. १७८५ च्या आषाढी एकादशीस प्रथम अभिषेक संपन्न झाला. महाराजांनी स्वतः एकही खिळा न वापरता अवघ्या चार महिन्यांत घडवलेला अष्टपैलू रथ आजही कार्तिकी एकादशीच्या यात्रेत भक्तिपूर्वक वापरला जातो.",
}

const BUWA_GHARANE_PAGE = {
    image: "assets/images/resources/book-buwa-family.png",
    mobileImage: "assets/images/resources/book-buwa-family-mobile.png",
    name: "बुवा घराणे",
    title: "गुरुपरंपरा, संत सान्निध्य आणि मठाची वास्तू",
    text: "बारामतीहून आलेले राओजी बुवा एकनाथी भागवतातील 'संतांची सेवा हीच देवाला परम प्रिय' या वचनाने प्रेरित होऊन सदैव मठाच्या सेवेत राहिले; त्यांच्या पत्नी लक्ष्मीबाईंनी स्वयंपाकगृहाची जबाबदारी घेतली आणि 'बुवा घराण्यातील कोणीतरी सदैव या सेवेत राहील' असा महाराजांचा आशीर्वाद लाभला. तेव्हापासून बुवा घराण्याने पिढ्यानपिढ्या हे सेवाव्रत जपले आहे. मठातील एका विशिष्ट दालनात शंकर महाराज तब्बल सत्तावीस वर्षे एका खुर्चीवर तपस्येस बसले; तेथे येणाऱ्या 'बेकार' लोकांशी ते आपुलकीने संवाद साधत, म्हणून ती जागा आजही 'बेकार हॉल' म्हणून ओळखली जाते आणि भाविक ती तपश्चर्येची खुर्ची स्पर्श करून तिची ऊर्जा अनुभवतात. इ.स. २००१ मध्ये मठाची नववास्तू उभारण्यात आली. मुख्य गाभाऱ्यात पांडुरंग, स्वामी समर्थ, राम-लक्ष्मण-सीता-हनुमान तसेच एकाच लाकडी ओंडक्यातून कोरलेली विशेष गणराय मूर्ती प्रतिष्ठापित आहे. स्वामी समर्थ, शंकर महाराज, शुभराय महाराज व शुभांगी माईंचे वडील जयकृष्ण बुवा यांच्या पवित्र पादुकाही येथे जतन आहेत. शुभराय महाराजांनी एकही खिळा न वापरता अवघ्या चार महिन्यांत घडवलेला अष्टकोनी लाकडी रथ आजही कार्तिकी एकादशीच्या रथयात्रेत वापरला जातो.",
}

const SHUBHANGI_MAI_PAGE = {
    image: "assets/images/resources/book-shubhangi-tai-buwa.png",
    name: "सौ. शुभांगीताई बुवा (शुभांगी माई)",
    title: "विद्यमान मठाधिपती — आठवी पिढी",
    text: "पुण्यातील दहा वर्षांची कारकीर्द सोडून शुभांगी माईंनी जीर्ण झालेल्या मठाचा जीर्णोद्धार केला आणि समाजशास्त्राच्या अभ्यासाची जोड देत अध्यात्म व समाजसेवा यांचा सुंदर समन्वय घडवला. इ.स. २००३ मध्ये सुरू करण्यात आलेल्या पाखर संकुलातर्फे ३५०हून अधिक अनाथ मुलांचे कायदेशीर दत्तक विधान यशस्वीरीत्या पार पडले असून, अनेक निराधार बालकांना कायमस्वरूपी कुटुंब व आधार प्राप्त झाला आहे. निर्मल तारा 'माहेर' या उपक्रमांतर्गत महिला व कुटुंबांना दोन दिवस पूर्णतः विनामूल्य राहून, मोबाईलपासून दूर विश्रांती घेता येते आणि एकमेकांशी मनमोकळा संवाद साधता येतो. मठातर्फे लहान मुलांसाठी संस्कारमूल्ये रुजवणारा 'बालसंस्कार वर्ग' (पूर्वप्राथमिक संस्कारवर्ग) तसेच कौटुंबिक तंटे सामोपचाराने सोडवणारे समुपदेशन केंद्रही चालवले जाते — हे सर्व शासनाच्या साहाय्याविना वा याचनेविना, केवळ समाजाच्या पाठबळावर व श्रद्धेवर उभे आहे. इ.स. २०१७ मध्ये प्रकाशित झालेल्या 'कलायोगी श्री शुभराय' या ग्रंथात महाराजांचे १४७ मूळ अभंग जतन करण्यात आले आहेत, जे पुढील पिढ्यांसाठी एक अमूल्य वारसा ठरले आहेत. अशाप्रकारे अध्यात्म व समाजसेवेचा हा वसा शुभांगी माईंनी अखंडपणे पुढे चालवला आहे.",
}

const PAGES = [
    { image: SHUBHARAY_MAHARAJ_PAGE.image, name: SHUBHARAY_MAHARAJ_PAGE.name },
    { image: null, name: SHUBHARAY_MAHARAJ_PAGE.name, title: SHUBHARAY_MAHARAJ_PAGE.title, text: SHUBHARAY_MAHARAJ_PAGE.text },
    { image: BUWA_GHARANE_PAGE.image, mobileImage: BUWA_GHARANE_PAGE.mobileImage, name: BUWA_GHARANE_PAGE.name },
    { image: null, name: BUWA_GHARANE_PAGE.name, title: BUWA_GHARANE_PAGE.title, text: BUWA_GHARANE_PAGE.text },
    { image: SHUBHANGI_MAI_PAGE.image, name: SHUBHANGI_MAI_PAGE.name },
    { image: null, name: SHUBHANGI_MAI_PAGE.name, title: SHUBHANGI_MAI_PAGE.title, text: SHUBHANGI_MAI_PAGE.text },
]

const CoverPage = forwardRef(({ onOpen }, ref) => (
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

            <button
                type="button"
                className="legacy-book-page__cta"
                aria-label="पोथी उघडा — वारसा वाचायला सुरुवात करा"
                onPointerDown={(e) => {
                    // react-pageflip listens on pointer/mouse-down and, in Chrome,
                    // starts a flip-drag gesture that can swallow the button's
                    // click. Stop it here so our own handler always runs.
                    e.stopPropagation()
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    onOpen?.()
                }}
            >
                <span className="legacy-book-page__cta-label">पोथी उघडा</span>
                <span className="legacy-book-page__cta-icon" aria-hidden="true">
                    <i className="icon-arrow-right"></i>
                </span>
            </button>
        </div>
    </div>
))
CoverPage.displayName = "CoverPage"

const PortraitPage = forwardRef(({ page, index }, ref) => (
    <div className="legacy-book-page legacy-book-page--portrait" ref={ref}>
        <div className="legacy-book-page__photo legacy-book-page__photo--full">
            {page.mobileImage ? (
                <>
                    <img className="legacy-book-page__photo-img--desktop" src={page.image} alt={page.name} />
                    <img className="legacy-book-page__photo-img--mobile" src={page.mobileImage} alt={page.name} />
                </>
            ) : (
                <img src={page.image} alt={page.name} />
            )}
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
    const [closedSide, setClosedSide] = useState("front") // "front" | "back" | null
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

    // "पोथी उघडा" — open the closed book to its first content page.
    // flipNext() is the reliable call here; flip(n) is blocked by page-flip's
    // own click guard when the book is in its single-page closed state.
    // Defer a tick so react-pageflip's own pointer handlers finish first —
    // calling synchronously from the click races them on Chrome and no-ops.
    const openBook = () => {
        requestAnimationFrame(() => {
            bookRef.current?.pageFlip()?.flipNext("bottom")
        })
    }

    const handleFlip = (e) => {
        setPageIndex(e.data)
        // "Open" = showing an interior spread; first page (front cover) and last
        // page (back cover) are single closed pages sitting on opposite halves.
        const open = e.data > 0 && e.data < totalPages - 1
        setIsOpen(open)
        setClosedSide(e.data === 0 ? "front" : e.data === totalPages - 1 ? "back" : null)
    }

    return (
        <section className={`legacy-One${isOpen ? " legacy-One--book-open" : " legacy-One--book-closed"}`}>
            <div className="divine-border--legacy divine-border--legacy-top" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-left" role="presentation"></div>
            <div className="divine-border--legacy-vertical divine-border--legacy-right" role="presentation"></div>
            <span className="legacy-One__corner legacy-One__corner--tl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--tr" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--bl" aria-hidden="true"></span>
            <span className="legacy-One__corner legacy-One__corner--br" aria-hidden="true"></span>

            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                    <span className="section-title__tagline">आमचा वारसा</span>
                </div>
                <h2 className="section-title__title title-animation">पिढ्यानपिढ्या जपलेली <br className="legacy-One__title-break" /> गुरुपरंपरा</h2>
            </div>

            <div className={`legacy-book-stage${isOpen ? " legacy-book-stage--opened" : ` legacy-book-stage--closed legacy-book-stage--closed-${closedSide || "front"}`}`}>
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

                {/* Desktop diya-pillars hugging the book's left/right edges —
                    they rise in when the book is closed, recede when it opens */}
                {["left", "right"].map((side) => (
                    <img
                        key={side}
                        src="assets/images/resources/diya-pillar.png"
                        alt=""
                        aria-hidden="true"
                        className={`legacy-One__aside legacy-One__aside--${side}`}
                    />
                ))}

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
                            <CoverPage onOpen={openBook} />
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
