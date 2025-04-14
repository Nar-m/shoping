import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addtoCart } from "../redux/cart/Cartreducer"
import { addtoWishlst } from "../redux/wishlist/wishlistreducer"

export default function Restoranitems({ item, checkname }) {
    const { src, src2, src3, id, name, price, star } = item
    const dispath = useDispatch()
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const wishitem = wishlist.find(el => el.id === item.id)
    return (
        <>
            <div className="wrapp-cart">
                <Link to={`/singleproduct/${id}`} state={{ product: item }}>
                    <div>
                        <img src={src} alt=""></img>
                    </div>
                </Link>
                <div className="flex justify-between items-center p-2">
                    <div>
                        <span className="name">{name}</span>
                    </div>
                    <div>
                        <span style={{ marginRight: '5px' }} className="star">{star}</span>
                        <span><i style={{ color: '#e91e4d' }} className="fa-solid fa-star"></i></span>
                    </div>
                </div>
                <div className="flex justify-between items-center p-2">
                    <div>
                        <span className="prices">{price} ֏</span>
                    </div>
                    <div style={{ color: 'red', fontSize: '18px' }}>
                        {wishitem ? <i onClick={() => dispath(addtoWishlst(item))} style={{ color: 'red', marginRight: '5px' }} className="fa-solid fa-heart"></i>
                            : <i onClick={() => dispath(addtoWishlst(item))} style={{ marginRight: '5px' }} className="fa-regular fa-heart"></i>}

                        <i onClick={() => dispath(addtoCart({ item }))} className="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}