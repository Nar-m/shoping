import './modal.css'
import { createPortal } from 'react-dom'
import Variations from './Variations'
import Modalimg from './Modalimg'

export default function Modal(props) {
    const { modal,
        item,
        nextImage,
        prevImage,
        singlearr,
        currentImageIndex,
        quantity,
        setquanity,
        descript,
        Closemodal, } = props

    function Hidemodal(e) {
        if (e.target.className === 'modal active') {
            Closemodal()
        }
    }
    return (
        createPortal(
            <div onClick={(e) => Hidemodal(e)} className={`${modal ? 'modal active' : 'modal'}`}>
                <div className='flex' style={{
                    padding: '12px',
                    maxWidth: '60%',
                    position: 'fixed',
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transition: '0.4s all',
                    left: '0',
                    right: '0',
                    margin: '0 auto',
                    background: 'white',
                    borderRadius: '3px',
                    boxShadow: '0px 2px 4px rgba(105, 103, 139, 0.03)'
                }}>
                    <div className='close' onClick={Closemodal}>
                        <span>&times;</span>
                    </div>
                    <Modalimg
                        nextImage={nextImage}
                        prevImage={prevImage}
                        singlearr={singlearr}
                        currentImageIndex={currentImageIndex} />
                    <div className='wrapper  wrapp-1' style={{ width: '100%', marginLeft: '20px' }}>
                        <div className='descript' style={{ width: '100%' }}>
                            <div className='heanding'>
                                <h3>{descript.name}</h3>
                            </div>
                            <div className='price'>
                                <span style={{ color: '#0089F7', textDecoration: 'none' }}>$ {descript.price}</span>
                            </div>
                            <div className='text' style={{ marginTop: '8px' }}>
                                <p>{descript.text}</p>
                            </div>
                            <Variations quantity={quantity} setquanity={setquanity} item={item}/>
                        </div>
                    </div>
                </div>
            </div>, document.getElementById('modal-product')
        )

    )
}