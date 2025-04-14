import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { Closecart } from '../redux/cart/Cartreducer';
import Cartempty from './Cartemty';
import Cartproduct from './Cartproduct';

export default function Cart() {
    const isopen = useSelector(state => state.cart.isopen)
    const cartitem = useSelector(state => state.cart.cartitem)
    const carttotal = useSelector(state => state.cart.carttotal)
    
    const dispath = useDispatch()
    return (
        <>

            <div onClick={()=> dispath(Closecart())} style={{ display: `${isopen ? 'block' : 'none'}` }} className='overlay'>

            </div>
            <div className={`${isopen ? 'cart open' : 'cart'}`}>
                <div className='cart-header'>
                    <div className='times'>
                        <span onClick={() => dispath(Closecart())}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                    <h3 className='cart-tile'>
                        <i style={{ marginRight: '7px' }} className="fa-solid fa-bag-shopping"></i>
                        Cart
                    </h3>
                </div>
                {cartitem.length === 0 ? <Cartempty/> : <Cartproduct cartitem={cartitem}/>}
                <div className='cart-total'>
                    <div className='subtotal'>
                        <div><p>Subtotal:</p></div>
                        <div><p>${carttotal}</p></div>
                    </div>
                    <div style={{ padding: '10px' }} className='flex justify-between items-center'>
                        <div>
                            <p>Total:</p>
                        </div>
                        <div>
                            <span style={{ fontSize: '20px', fontWeight: '600' }}>${carttotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}