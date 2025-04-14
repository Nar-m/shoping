
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Menuslider({curentindex, Slider, carusel}) {
    return (
        <div className="slider">
            <button onClick={() => Slider('prev')}> <FontAwesomeIcon icon={faChevronLeft} /></button>
            {carusel.map((item, index) => {
                return (
                    <div style={{ left: `${index * 100}%`, transform: `translateX(-${curentindex * 100}%)` }} className="slid-item" key={index}>
                        <img alt="" src={item}></img>
                    </div>
                )
            })}
            <button onClick={() => Slider('next')}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    )
}