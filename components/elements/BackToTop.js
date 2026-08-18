export default function BackToTop({ scroll, scrollProgress = 0 }) {
    const radius = 21
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (Math.min(scrollProgress, 100) / 100) * circumference

    const handleClick = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            {scroll && (
                <a
                    href="#top"
                    className={`scroll-to-target scroll-to-top ${scroll ? "show" : ""}`}
                    aria-label="Back to top"
                    onClick={handleClick}
                >
                    <svg className="scroll-to-top__ring" width="48" height="48" viewBox="0 0 48 48">
                        <circle className="scroll-to-top__ring-track" cx="24" cy="24" r={radius} />
                        <circle
                            className="scroll-to-top__ring-progress"
                            cx="24"
                            cy="24"
                            r={radius}
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: offset,
                            }}
                        />
                    </svg>
                    <i className="fa fa-arrow-up"></i>
                </a>
            )}
        </>
    )
}
