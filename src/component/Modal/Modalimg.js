import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Modalimg(props) {
    const { nextImage, prevImage, singlearr, currentImageIndex } = props
    return (
        <div className='wrapper' style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div onClick={() => prevImage()} className='cursor-pointer' style={{ color: 'rgba(0,0,0,.3)', fontSize: '30px', fontWeight: '300' }}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="image" style={{ overflow: 'hidden' }}>
                <img src={singlearr[currentImageIndex]} alt=''></img>
            </div>
            <div onClick={() => nextImage()} className='cursor-pointer' style={{ color: 'rgba(0,0,0,.3)', fontSize: '35px' }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}