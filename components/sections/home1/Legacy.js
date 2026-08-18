'use client'
import { forwardRef, lazy, Suspense, useRef, useState } from "react"

const HTMLFlipBook = lazy(() => import("react-pageflip"))

const PAGES = [
    {
        image: "assets/images/resources/shubharay-maharaj.jpg",
        name: "शुभराय महाराज",
        role: "मठाचे संस्थापक (इ.स. १७५०–१८२०)",
        text: "ऋग्वेदी ब्राह्मण कुटुंबात जन्मलेल्या शुभराय महाराजांनी गुरुकुल शिक्षणात वेद, शास्त्र, पुराणे व विविध कलांमध्ये प्रावीण्य मिळवले. टिपू सुलतानाच्या मालूर येथील दरबारात त्यांच्या गुणग्राहकतेची कदर होऊन ते नायब दिवाण पदापर्यंत पोहोचले, पण राजकारणातील वातावरण मनास रुचले नाही. मारुती बाप्पांच्या 'उठ, चल उठ, उठ' या हाकेने प्रेरित होऊन ते कट्यारधारी मारुतीची मूर्ती घेऊन घोड्यावरून निघून गेले. मैसाळगी या जागृत मारुतीस्थान असलेल्या गावी ३५० कन्नड भाषिक कुटुंबांना त्यांनी मराठी भजन व नित्य पूजाविधी शिकवले. पुढे आंध्र-कर्नाटक सीमेजवळ गुरू थिमाप्पा रामदासींकडून गुरुमंत्र मिळाल्यावर सोंडलगी (सोलापूर) येथे येण्याचा आदेश मिळाला. सोलापुरात प्रारंभी हत्ती बावडीजवळ वास्तव्य केल्यानंतर भक्तांनी बेगमपेठेत छोटे मंदिर उभारले. इथेच सोलापुरात वारकरी पंथाची बीजे रोवली गेली आणि सन १७८५ च्या आषाढी एकादशीला पहिला अभिषेक संपन्न झाला.",
    },
    {
        image: "assets/images/resources/shubharay-maharaj.jpg",
        name: "बुवा घराणे",
        role: "गुरुपरंपरा, संत सान्निध्य आणि मठाची वास्तू",
        text: "सन १७८१ मध्ये स्थापन झालेला हा मठ हरी-हरांच्या एकात्मतेचे प्रतीक मानला जातो; सन २००१ मध्ये मठाचे नवीन वास्तुरूप (नववास्तू) उभे राहिले. बारामतीहून आलेल्या राओजी बुवांना एकनाथी भागवतात 'संतांची सेवा हीच देवाला परम आवडती' हे पान सापडले आणि ते मठातच कायमचे राहिले; पत्नी लक्ष्मीबाईंनी स्वयंपाकघराची सेवा स्वीकारली आणि बुवा घराण्यातील कोणीतरी सदैव सेवेत राहावे असा आशीर्वाद मागितला. शृंगेरी शंकराचार्यांनी संन्यास परंपरेवर आक्षेप घेतला, पण महाराजांच्या यज्ञातून औदुंबर वृक्ष उगवलेला पाहून पूर्ण मान्यता दिली. शंकर महाराज तब्बल २७ वर्षे एका खुर्चीवर तपस्येला बसले — रिकामटेकड्या ('बेकार') लोकांशी गप्पा मारत, म्हणून ती जागा आजही 'बेकार हॉल' म्हणून ओळखली जाते आणि ती खुर्ची आजही भक्त स्पर्श करू शकतात. स्वामी समर्थांनीही शुभांगी माईंच्या पणजोबांच्या काळात मठास भेट दिली होती. गाभाऱ्यात पांडुरंग, स्वामी समर्थ, राम-लक्ष्मण-सीता-हनुमान आणि एकाच लाकडी ओंडक्यातून कोरलेली अनोखी गणराय मूर्ती असून, स्वामी समर्थ, शंकर महाराज, शुभराय महाराज व जयकृष्ण बुवा यांच्या पादुकाही जतन केल्या आहेत. महाराजांनी स्वतः एकही खिळा न वापरता अवघ्या चार महिन्यांत घडवलेला अष्टपैलू रथ आजही कार्तिकी एकादशीच्या रथयात्रेत वापरला जातो.",
    },
    {
        image: "assets/images/resources/shubharay-maharaj.jpg",
        name: "सौ. शुभांगीताई बुवा (शुभांगी माई)",
        role: "विद्यमान मठाधिपती — आठवी पिढी",
        text: "पुण्यातील दहा वर्षांची कारकीर्द सोडून शुभांगी माईंनी जीर्ण झालेल्या मठाचा जीर्णोद्धार केला आणि समाजशास्त्राच्या अभ्यासाची जोड देत अध्यात्म व समाजसेवा यांचा सुंदर संगम घडवला. सन २००३ मध्ये सुरू केलेल्या पाखर संकुलातर्फे ३५०हून अधिक अनाथ मुलांचे कायदेशीर दत्तक विधान यशस्वीरीत्या पार पडले आहे. निर्मल तारा 'माहेर' या उपक्रमांतर्गत महिला व कुटुंबांना मोबाईलपासून दूर राहून नात्यांशी पुन्हा जोडणारे दोन दिवसांचे पूर्णतः मोफत निवासी विश्रांती केंद्र चालवले जाते. मठातर्फे बालसंस्कार वर्ग व कौटुंबिक समुपदेशन केंद्रही चालवले जाते — हे सर्व शासनाच्या मदतीविना वा याचनेविना, केवळ समाजाच्या पाठबळावर. सन २०१७ मध्ये प्रकाशित झालेल्या 'कलायोगी श्री शुभराय' या ग्रंथात महाराजांचे १४७ मूळ अभंग जतन करण्यात आले आहेत. Cosmostar Media च्या 'Sweet Talks' या पॉडकास्टच्या 'आध्यात्मिक महाराष्ट्र' मालिकेत सोलापूरच्या याच मठात शुभांगी माईंची घेतलेली मुलाखत आजही अनेकांना या परंपरेशी नव्याने जोडत आहे.",
    },
]

const CoverPage = forwardRef(({ onOpen }, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/resources/shubharay-maharaj.jpg" alt="" />
            </span>

            <h3 className="legacy-book-page__cover-title">श्रद्धेचा वारसा</h3>
            <span className="legacy-book-page__cover-subtitle">आठ पिढ्यांची सेवा आणि साधनेची परंपरा</span>

            <button
                type="button"
                className="legacy-book-page__cta"
                onClick={(e) => { e.stopPropagation(); onOpen?.() }}
            >
                पोथी उघडा
            </button>
        </div>
    </div>
))
CoverPage.displayName = "CoverPage"

const ContentPage = forwardRef(({ person, index }, ref) => (
    <div className="legacy-book-page" ref={ref}>
        <div className="legacy-book-page__photo">
            <img src={person.image} alt={person.name} />
            <span className="legacy-book-page__photo-frame" aria-hidden="true"></span>
        </div>
        <div className="legacy-book-page__body">
            <span className="legacy-book-page__name">{person.name}</span>
            <span className="legacy-book-page__name-rule" aria-hidden="true"></span>
            <span className="legacy-book-page__role">{person.role}</span>
            <p className="legacy-book-page__text">{person.text}</p>
        </div>
        <span className="legacy-book-page__number">{index}</span>
    </div>
))
ContentPage.displayName = "ContentPage"

const BackCoverPage = forwardRef((props, ref) => (
    <div className="legacy-book-page legacy-book-page--cover" ref={ref}>
        <div className="legacy-book-page__cover-inner">
            <span className="legacy-book-page__cover-symbol" aria-hidden="true">
                <img src="assets/images/resources/shubharay-maharaj.jpg" alt="" />
            </span>
            <span className="legacy-book-page__cover-subtitle">श्री शुभराय महाराज मठ, सोलापूर</span>
        </div>
    </div>
))
BackCoverPage.displayName = "BackCoverPage"

export default function Legacy() {
    const bookRef = useRef(null)
    const [pageIndex, setPageIndex] = useState(0)
    const totalPages = PAGES.length + 2

    const goPrev = () => bookRef.current?.pageFlip()?.flipPrev()
    const goNext = () => bookRef.current?.pageFlip()?.flipNext()

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
                    <i className="icon-arrow-right"></i>
                </button>

                <div className="legacy-book-wrap wow fadeIn" data-wow-delay="100ms">
                    <Suspense fallback={<div className="legacy-book-loading" aria-hidden="true"></div>}>
                        <HTMLFlipBook
                            ref={bookRef}
                            width={520}
                            height={500}
                            size="stretch"
                            minWidth={280}
                            maxWidth={760}
                            minHeight={320}
                            maxHeight={620}
                            showCover={true}
                            maxShadowOpacity={0.65}
                            flippingTime={800}
                            drawShadow={true}
                            useMouseEvents={true}
                            className="legacy-book"
                            onFlip={(e) => setPageIndex(e.data)}
                        >
                            <CoverPage onOpen={goNext} />
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
                    <i className="icon-arrow-right"></i>
                </button>
            </div>
            <div className="divine-border--legacy divine-border--legacy-bottom" role="presentation"></div>
        </section>
    )
}
