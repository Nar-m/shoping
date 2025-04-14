import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

export default function Arrow() {
    const [arrow, setarrow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scroll = window.scrollY
            if (scroll > 200) {
                setarrow(true)
            }
            else {
                setarrow(false)
            }
        })
    }, [])
    const Scroll = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={Scroll} style={{ borderRadius: '50%', transition: '0.5s all', right: `${arrow ? '40px' : '-100%'}` }}
            className="fixed cursor-pointer z-10  bottom-40 right-10 text-[#fff] p-3 text-[18px] bg-[#e91e4d]">
            <FontAwesomeIcon icon={faChevronUp} />
        </div>
    )
}