import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Lightbox from "./Lightbox"

export default function Imagespr(props) {
    const { item } = props
    const images = [item.src, item.src2, item.src3]
    const [scale, setscale] = useState(1)
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const [startx, setstartx] = useState(false)
    const [curentindex, setcurentindex] = useState(0)
    const [element, setelement] = useState('')
    const [modal, setmodal] = useState(false);
    const [index, setindex] = useState(0);


    const Zooimgimg = () => {
        setscale((scale) => scale + 0.1)
    }
    const Incrementzoom = () => {
        if (scale <= 1) {
            setscale(1)
        }
        setscale((scale) => scale - 0.1)
    }
    const Handelzoomimg = (e) => {
        setstartx(true)
        if (startx) {
            setx(e.clientX - e.target.offsetLeft)
            sety(e.clientY - e.target.offsetTop)
        }
    }
    const Handleindex = (index) => {
        setcurentindex((prevIndex) => (index + images.length) % images.length);
    }
    const Openmodal = (i) => {
        setindex(i)
        setmodal(true)
        setelement(item)
    }
    const Closemodal = () => {
        setmodal(false)
        setelement('')
    }

    return (
        <>
            <div className="zoom-img" >
                <button onClick={() => Zooimgimg()}> +</button>
                <button onClick={() => Incrementzoom()}>-</button>
            </div>
            <div className="flex items-center justify-between">
                {item.single ?
                    <button onClick={() => Handleindex(curentindex - 1)} style={{ marginRight: '25px', fontSize: '35px' }}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button> : ''}
                <div className="single-images">
                    {item.single ? item?.single.map((el, i) => {
                        return (
                            <div onClick={() => Openmodal(i)} style={{ left: `${i * 100}%`, transform: `translateX(-${curentindex * 100}%)` }} key={i} className="single-img">
                                <img onMouseLeave={() => setstartx(false)}
                                    onMouseMove={Handelzoomimg}
                                    onMouseUp={() => setstartx(false)} alt="" style={{ transform: `scale(${startx ? '2' : scale})`, transformOrigin: `${x}px ${y}px` }} src={el.img}></img>
                            </div>
                        )
                    }) : <img onClick={() => Openmodal()} onMouseLeave={() => setstartx(false)}
                        onMouseMove={Handelzoomimg}
                        onMouseUp={() => setstartx(false)} key={item.id} style={{ width: '500px', height: '500px', transform: `scale(${startx ? '2' : scale})`, transformOrigin: `${x}px ${y}px` }} src={item.src}></img>}
                </div>
                {item.single ? <button style={{ marginLeft: '25px', fontSize: '35px' }} onClick={() => Handleindex(curentindex + 1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button> : ''}
            </div>
            <div className="flex mt-2">
                {item.single ? item?.single.map((el, index) => {
                    return (
                        <img alt="" onClick={() => setcurentindex(index)} key={index} className={`${curentindex === index ? 'dott-img active' : 'dott-img'}`} src={el.img}></img>
                    )
                }) : ''}
            </div>
            <Lightbox
                setindex={setindex}
                index={index}
                Closemodal={Closemodal}
                element={element}
                modal={modal} />
        </>
    )
}