'use client'
import { useEffect, useRef } from "react"

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const cursorTwoRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorTwo = cursorTwoRef.current
        if (!cursor || !cursorTwo) return

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const ring = { x: mouse.x, y: mouse.y }
        let rafId
        let hasMoved = false

        cursor.style.opacity = "0"
        cursorTwo.style.opacity = "0"

        const moveCursor = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            cursorTwo.style.left = `${mouse.x}px`
            cursorTwo.style.top = `${mouse.y}px`

            if (!hasMoved) {
                hasMoved = true
                ring.x = mouse.x
                ring.y = mouse.y
                cursor.style.opacity = ""
                cursorTwo.style.opacity = ""
            }
        }

        const animateRing = () => {
            ring.x += (mouse.x - ring.x) * 0.18
            ring.y += (mouse.y - ring.y) * 0.18
            cursor.style.left = `${ring.x}px`
            cursor.style.top = `${ring.y}px`
            rafId = requestAnimationFrame(animateRing)
        }

        const addHover = () => {
            cursor.classList.add("custom-cursor__innerhover")
            cursorTwo.classList.add("custom-cursor__hover")
        }
        const removeHover = () => {
            cursor.classList.remove("custom-cursor__innerhover")
            cursorTwo.classList.remove("custom-cursor__hover")
        }

        const addActive = () => {
            cursor.classList.add("custom-cursor__active")
            cursorTwo.classList.add("custom-cursor__active")
        }
        const removeActive = () => {
            cursor.classList.remove("custom-cursor__active")
            cursorTwo.classList.remove("custom-cursor__active")
        }

        const hideCursor = () => {
            cursor.style.opacity = "0"
            cursorTwo.style.opacity = "0"
        }
        const showCursor = () => {
            cursor.style.opacity = ""
            cursorTwo.style.opacity = ""
        }

        const HOVERABLE = "a, button, .mobile-nav__toggler, input, textarea"

        const handleOver = (e) => {
            if (e.target.closest(HOVERABLE)) addHover()
        }
        const handleOut = (e) => {
            if (e.target.closest(HOVERABLE)) removeHover()
        }

        document.addEventListener("mousemove", moveCursor)
        document.addEventListener("mouseover", handleOver)
        document.addEventListener("mouseout", handleOut)
        document.addEventListener("mousedown", addActive)
        document.addEventListener("mouseup", removeActive)
        document.addEventListener("mouseleave", hideCursor)
        document.addEventListener("mouseenter", showCursor)

        rafId = requestAnimationFrame(animateRing)

        return () => {
            document.removeEventListener("mousemove", moveCursor)
            document.removeEventListener("mouseover", handleOver)
            document.removeEventListener("mouseout", handleOut)
            document.removeEventListener("mousedown", addActive)
            document.removeEventListener("mouseup", removeActive)
            document.removeEventListener("mouseleave", hideCursor)
            document.removeEventListener("mouseenter", showCursor)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <>
            <div ref={cursorRef} className="custom-cursor__cursor"></div>
            <div ref={cursorTwoRef} className="custom-cursor__cursor-two"></div>
        </>
    )
}
