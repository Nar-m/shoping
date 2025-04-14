import { addtoWishlst } from "../redux/wishlist/wishlistreducer"
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, Decrementquantity, Incrementquantity } from "../redux/cart/Cartreducer"

export default function Variations({ item, quantity, setquanity }) {
    const dispath = useDispatch()
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const wishitem = wishlist.find(el => el.id === item.id)
    const cartitem = useSelector(state => state.cart.cartitem)
    const newcartitem = cartitem.find(el => el.id === item.id)
    
    return (
        <div className='variations'>
            <div className='quantity'>
                <div className='flex justify-between items-center w-full' style={{ position: 'absolute', top: '12%', left: '15px' }}>
                    <button disabled={quantity === 1 ? true : false} onClick={() => {
                        setquanity(quantity - 1)
                        dispath(Decrementquantity(item))
                    }} className='btn-minus'>-</button>
                    {quantity}
                    <button onClick={() => {
                        setquanity(quantity + 1)
                        dispath(Incrementquantity(item))
                    }} className='btn-plus' style={{ marginRight: '30px' }} >+</button>
                </div>
            </div>
            <div>
                <button  onClick={() => dispath(addtoCart({ item, quantity }))}
                    style=
                    {{
                        margin: '0 15px',
                        color: '#fff',
                        padding: '13px 30px',
                        borderRadius: '3px',
                        opacity: `${newcartitem ? '0.3' : '1'}`,
                        cursor: `${newcartitem ? 'not-allowed' : 'pointer'}`,
                        background: '#0089F7',
                        fontFamily: 'poppins, sans-serif'
                    }}>Add to cart</button>
            </div>
            <div style={{ color: 'red', fontSize: '20px' }}>
                {wishitem ? <i onClick={()=> dispath(addtoWishlst(item))} className="fa-solid fa-heart"></i> 
                : <i onClick={()=> dispath(addtoWishlst(item))} className="fa-regular fa-heart"></i>}
            </div>
        </div>
    )
}