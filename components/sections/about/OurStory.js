'use client'
import { useCallback, useEffect, useRef, useState } from "react"

const CHAPTERS = [
    {
        num: "०१",
        title: "विद्येचा भक्कम पाया",
        place: "जन्म व शिक्षण",
        text: "शुभराय महाराजांचा जन्म एका सधन ऋग्वेदी ब्राह्मण कुटुंबात झाला. गुरुकुलात राहून त्यांनी वेद, शास्त्रे व पुराणांचा अभ्यास केला, आणि संगीत, ज्योतिष व शिल्प यांसारख्या अनेक कलाही आत्मसात केल्या.",
        note: "लहानपणापासूनच अभ्यासाची आवड",
    },
    {
        num: "०२",
        title: "दरबारातील मोठे पद",
        place: "मलूर, म्हैसूर राज्य",
        text: "पुढे ते टिपू सुलतान यांच्या राज्यात मलूर येथे कामाला लागले. त्यांची हुशारी व प्रामाणिकपणा पाहून टिपू सुलतान यांनी त्यांना नायब दिवाण — म्हणजे उपप्रधानमंत्र्यासारखे — मोठे पद दिले.",
        note: "मान, सत्ता आणि वैभव मिळाले",
    },
    {
        num: "०३",
        title: "मनातून आलेली हाक",
        place: "मलूर दरबार",
        text: "पण दरबारातील राजकारण आणि कटकटी पाहून त्यांचे भाविक मन अस्वस्थ झाले. अशातच त्यांना मारुती बाप्पांची “उठ, चल उठ, उठ” अशी हाक ऐकू आली — जणू सारे सोडून निघण्याचा तो इशारा होता.",
        note: "आयुष्याला कलाटणी देणारा क्षण",
    },
    {
        num: "०४",
        title: "सारे सोडून प्रस्थान",
        place: "मलूरहून निर्गमन",
        text: "कोणालाही न सांगता त्यांनी पद आणि संपत्ती यांचा त्याग केला. हातात कट्यार घेतलेल्या मारुतीची मूर्ती सोबत घेऊन ते रात्रीच्या अंधारात घोड्यावरून शांतपणे निघून गेले.",
        note: "मागे राहिला फक्त त्यागाचा आदर्श",
    },
    {
        num: "०५",
        title: "मैसाळगीतील सेवा",
        place: "मैसाळगी गाव",
        text: "जागृत मारुतीचे स्थान असलेल्या मैसाळगी गावात ते काही काळ राहिले. तिथल्या ३५० कन्नड भाषिक कुटुंबांना त्यांनी मराठी भजने आणि रोजची पूजा-अर्चा प्रेमाने शिकवली.",
        note: "भाषेचा अडसर न मानता केलेली सेवा",
    },
    {
        num: "०६",
        title: "गुरूंचा आशीर्वाद",
        place: "आंध्र–कर्नाटक सीमा",
        text: "प्रवासात आंध्र–कर्नाटकच्या सीमेजवळ त्यांची गुरू थिमप्पा रामदासी यांच्याशी भेट झाली. गुरूंनी त्यांना गुरुमंत्र दिला आणि सोलापूरला जाऊन तिथे कार्य उभे करण्यास सांगितले.",
        note: "पुढच्या वाटचालीला दिशा मिळाली",
    },
    {
        num: "०७",
        title: "सोलापुरात विसावा",
        place: "बेगमपेठ, सोलापूर",
        text: "सोलापुरात आल्यावर सुरुवातीला ते हत्ती बावडीजवळ बसत, जिथे गावकरी कपडे धूत असत. त्यांचे शांत तेज पाहून गावकऱ्यांनी बेगमपेठेत त्यांच्यासाठी एक लहानसे मंदिर बांधले.",
        note: "इथूनच मठाची सुरुवात झाली",
    },
    {
        num: "०८",
        title: "वारकरी परंपरेची सुरुवात",
        place: "सोलापूर",
        text: "सोलापुरात त्यांनी वारकरी पंथाचे बीज रोवले. इ.स. १७८५ च्या आषाढी एकादशीला त्यांच्या हस्ते पहिला अभिषेक झाला. तीच परंपरा आज आठ पिढ्यांनंतरही शुभराय मठात अखंड सुरू आहे.",
        note: "इ.स. १७८५ पासून आजतागायत अखंड सुरू",
    },
]

const N = CHAPTERS.length

/* Kalash (सुवर्ण कलश) finial that crowns each arch */
const Kalash = () => (
    <svg className="mandir__kalash" viewBox="0 0 40 54" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 0l2.4 6.2L20 9.4 17.6 6.2 20 0Z" fill="currentColor" />
        <rect x="18.7" y="9" width="2.6" height="7" rx="1.3" fill="currentColor" />
        <path d="M12 17h16l-2 4H14l-2-4Z" fill="currentColor" />
        <path d="M20 21c6.2 0 10 4.3 10 9.6 0 6-4.6 10.4-10 10.4s-10-4.4-10-10.4C10 25.3 13.8 21 20 21Z" fill="currentColor" />
        <path d="M9 43h22l-2.5 5h-17L9 43Z" fill="currentColor" />
        <ellipse cx="20" cy="51" rx="13" ry="2.4" fill="currentColor" opacity=".55" />
    </svg>
)

export default function OurStory() {
    const [active, setActive] = useState(0)
    const stageRef = useRef(null)
    const touch = useRef({ x: 0, active: false })

    const go = useCallback((dir) => {
        setActive((a) => (a + dir + N) % N)
    }, [])

    useEffect(() => {
        const el = stageRef.current
        if (!el) return
        const onKey = (e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); go(-1) }
            if (e.key === "ArrowRight") { e.preventDefault(); go(1) }
        }
        el.addEventListener("keydown", onKey)
        return () => el.removeEventListener("keydown", onKey)
    }, [go])

    const onTouchStart = (e) => {
        touch.current = { x: e.touches[0].clientX, active: true }
    }
    const onTouchEnd = (e) => {
        if (!touch.current.active) return
        const dx = e.changedTouches[0].clientX - touch.current.x
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1)
        touch.current.active = false
    }

    const offsetOf = (i) => {
        let d = i - active
        if (d > N / 2) d -= N
        if (d < -N / 2) d += N
        return d
    }

    return (
        <section className="mandir">
            {/* Maroon Om/swastik ornamental border — same frame as the About section */}
            <div className="divine-border--about divine-border--about-top" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-left" role="presentation"></div>
            <div className="divine-border--about-vertical divine-border--about-right" role="presentation"></div>
            <span className="about-One__corner about-One__corner--tl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--tr" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--bl" aria-hidden="true"></span>
            <span className="about-One__corner about-One__corner--br" aria-hidden="true"></span>
            <div className="divine-border--about divine-border--about-bottom" role="presentation"></div>

            <div className="mandir__bg" aria-hidden="true"></div>
            <div className="mandir__mandala" aria-hidden="true"></div>
            <div className="mandir__haze" aria-hidden="true"></div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1 mandir__head">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline" lang="mr">आमची कहाणी</span>
                    </div>
                    <h2 className="section-title__title title-animation" lang="mr">
                        शुभराय महाराजांचा <span>प्रवास</span>
                    </h2>
                </div>

                <div
                    className="mandir__stage"
                    ref={stageRef}
                    tabIndex={0}
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="शुभराय महाराजांच्या प्रवासाचे टप्पे"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="mandir__ring">
                        {CHAPTERS.map((c, i) => {
                            const d = offsetOf(i)
                            const far = Math.abs(d) > 2
                            return (
                                <article
                                    key={c.num}
                                    className={`mandir__arch${d === 0 ? " is-active" : ""}${far ? " is-far" : ""}`}
                                    style={{ "--d": d, "--ad": Math.abs(d) }}
                                    aria-hidden={d !== 0}
                                    inert={d !== 0 ? "" : undefined}
                                >
                                    <span className="mandir__glow" aria-hidden="true"></span>
                                    <Kalash />
                                    <div className="mandir__face">
                                        <h3 className="mandir__arch-title" lang="mr">{c.title}</h3>
                                        {c.place && (
                                            <span className="mandir__place" lang="mr">
                                                <i className="icon-pin" aria-hidden="true"></i> {c.place}
                                            </span>
                                        )}
                                        <p lang="mr">{c.text}</p>
                                        {c.note && (
                                            <span className="mandir__note" lang="mr">{c.note}</span>
                                        )}
                                    </div>
                                    <span className="mandir__base" aria-hidden="true"></span>
                                </article>
                            )
                        })}
                    </div>

                    <button
                        type="button"
                        className="mandir__nav mandir__nav--prev"
                        onClick={() => go(-1)}
                        aria-label="मागील टप्पा"
                    >
                        <i className="icon-arrow-right"></i>
                    </button>
                    <button
                        type="button"
                        className="mandir__nav mandir__nav--next"
                        onClick={() => go(1)}
                        aria-label="पुढील टप्पा"
                    >
                        <i className="icon-arrow-right"></i>
                    </button>
                </div>

                <div className="mandir__dots" role="tablist" aria-label="टप्पे">
                    {CHAPTERS.map((c, i) => (
                        <button
                            key={c.num}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            aria-label={`पर्व ${c.num} — ${c.title}`}
                            className={`mandir__dot${i === active ? " is-active" : ""}`}
                            onClick={() => setActive(i)}
                        >
                            <span>{c.num}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
