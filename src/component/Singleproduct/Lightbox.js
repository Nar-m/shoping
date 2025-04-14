import './lightbox.css';
import { createPortal } from 'react-dom';
import Content from './Content';

export default function Lightbox(props) {
    const { index, setindex, Closemodal, modal, element } = props

    const Handelmodal = (e) => {
        if (e.target.className === 'modal active') {
            Closemodal()
        }
    }
    return (
        createPortal(
            <div onClick={(e) => Handelmodal(e)} className={`${modal ? 'modal active' : 'modal'}`}>
                <div className='dialog'>
                    <div className='content'>
                        <Content
                            index={index}
                            setindex={setindex}
                            element={element}
                            Closemodal={Closemodal} />
                    </div>
                </div>
            </div>, document.getElementById('modal-product')
        )
    )
}