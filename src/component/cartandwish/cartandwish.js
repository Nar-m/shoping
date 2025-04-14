import './cartandwish.css'
import { useDispatch, useSelector } from 'react-redux'
import { Opencart } from '../redux/cart/Cartreducer'
import { Link } from 'react-router-dom'

export default function Cartandwish() {
    const cartitem = useSelector(state => state.cart.cartitem)
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const dispath = useDispatch()
    return (
        <div className='fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2'>
            <Link to="/wishlist">
                <div style={{ boxShadow: '0px 0px 54px -13px rgba(0,0,0,.7)' }} className='bg-white relative w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer'>
                    <div className='count'>
                        {wishlist.length}
                    </div>
                    <div>
                        <i style={{ fontSize: '19px' }} className="fa-regular fa-heart"></i>
                    </div>
                    <div><p className='text-xs font-semibold font-titleFont'>Wishlist</p></div>
                </div>
            </Link>
            <div onClick={() => dispath(Opencart())} style={{ boxShadow: '0px 0px 54px -13px rgba(0,0,0,.7)' }} className='bg-white relative w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer'>
                <div className='count'>
                    {cartitem.length}
                </div>
                <div>
                    <i style={{ fontSize: '19px' }} className="fa-solid fa-cart-plus"></i>
                </div>
                <div>
                    <p className='text-xs font-semibold font-titleFont'>Cart</p>
                </div>
            </div>
        </div>
    )
}