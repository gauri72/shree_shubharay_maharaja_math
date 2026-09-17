'use client'

const DEFAULT_MANTRAS = [
    "श्री पांडुरंग प्रसन्न",
    "श्री शुभराय महाराज प्रसन्न",
]
const REPEAT_COUNT = 4

const Divider = ({ dotColor }) => (
    <span className="mantra-strip__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
                <ellipse cx="12" cy="7" rx="3" ry="5" />
                <ellipse cx="12" cy="17" rx="3" ry="5" />
                <ellipse cx="7" cy="12" rx="5" ry="3" />
                <ellipse cx="17" cy="12" rx="5" ry="3" />
            </g>
            <circle cx="12" cy="12" r="2.4" fill={dotColor} />
        </svg>
    </span>
)

export default function MantraStrip({ mantras = DEFAULT_MANTRAS, variant }) {
    const items = Array.from(
        { length: REPEAT_COUNT * mantras.length },
        (_, i) => mantras[i % mantras.length]
    )
    const fullLabel = mantras.join(' । ')
    const rootClass = variant ? `mantra-strip mantra-strip--${variant}` : "mantra-strip"
    const dotColor = variant === "gold" ? "#D9982A" : "#620208"

    return (
        <div className={rootClass} role="img" aria-label={fullLabel}>
            <div className="mantra-strip__border mantra-strip__border--top" aria-hidden="true"></div>

            <div className="mantra-strip__marquee">
                <div className="mantra-strip__track" aria-hidden="true">
                    {[...items, ...items].map((mantra, index) => (
                        <span className="mantra-strip__item" key={index}>
                            <span className="mantra-strip__text">{mantra}</span>
                            <Divider dotColor={dotColor} />
                        </span>
                    ))}
                </div>
            </div>

            <div className="mantra-strip__border mantra-strip__border--bottom" aria-hidden="true"></div>
        </div>
    )
}
