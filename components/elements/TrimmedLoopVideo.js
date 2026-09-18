'use client'
import { useEffect, useRef } from "react"

// Two copies of the same clip, offset by half the trim window and
// crossfaded near the seam, so the restart-to-0 seek (which otherwise
// causes a visible stutter/pause) is masked under the fade instead.
const FADE_MS = 450

export default function TrimmedLoopVideo({ src, className, trimSeconds = 7 }) {
    const aRef = useRef(null)
    const bRef = useRef(null)

    useEffect(() => {
        const a = aRef.current
        const b = bRef.current
        if (!a || !b) return

        const half = trimSeconds / 2
        let halfStartedA = false
        let halfStartedB = false
        let raf

        const onLoadedA = () => {
            b.currentTime = half
            a.play().catch(() => {})
        }

        const tick = () => {
            if (!a.paused && !halfStartedA && a.currentTime > half) {
                halfStartedA = true
                halfStartedB = false
                b.currentTime = 0
                b.play().catch(() => {})
            }
            if (!b.paused && !halfStartedB && b.currentTime > half) {
                halfStartedB = true
                halfStartedA = false
                a.currentTime = 0
                a.play().catch(() => {})
            }

            const aRemaining = trimSeconds - a.currentTime
            const aActive = !a.paused && aRemaining > FADE_MS / 1000
            if (aActive) {
                a.style.opacity = "1"
                b.style.opacity = "0"
            } else {
                a.style.opacity = "0"
                b.style.opacity = "1"
            }

            raf = requestAnimationFrame(tick)
        }

        a.addEventListener("loadedmetadata", onLoadedA)
        raf = requestAnimationFrame(tick)

        return () => {
            a.removeEventListener("loadedmetadata", onLoadedA)
            cancelAnimationFrame(raf)
        }
    }, [trimSeconds])

    return (
        <span className={`trimmed-loop-video ${className || ""}`}>
            <video ref={aRef} src={src} className="trimmed-loop-video__video" muted playsInline autoPlay style={{ opacity: 1 }} />
            <video ref={bRef} src={src} className="trimmed-loop-video__video" muted playsInline style={{ opacity: 0 }} />
        </span>
    )
}
