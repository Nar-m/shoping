import { createPortal } from "react-dom"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Lightboximg({ images, curentindex, onClose }) {
    const [handleindex, sethandleindex] = useState(curentindex)
    
    const Previus = () =>{
        sethandleindex((handleindex - 1 + images.length) % images.length)
    }
    const Next = () =>{
        sethandleindex((handleindex + 1) % images.length)
    }
    const Handleclose = (e) =>{
        // if(e.target.className === 'overlay'){
        //     alert(true)
        // }
        // else{
        //     alert(false)
        // }
    }
    return createPortal(
        <div onClick={(e)=> Handleclose(e)} className="overlay">
            <button onClick={Previus} style={{color: 'white', fontSize: '25px', marginRight: '30px'}} className="previus">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="modal">
                <img src={images[curentindex]} alt={`Image ${handleindex + 1}`} />
            </div>
            <button onClick={Next} className="next" style={{color: 'white', fontSize: '25px', marginLeft: '30px'}}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>,
        document.getElementById('ligthbox')
    )
}