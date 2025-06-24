import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWindowWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return () => {
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])

    return (
        <h1>window width : {width}</h1>
    )
}