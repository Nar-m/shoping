import { useLocation } from "react-router-dom"
import './singleproduct.css'
import Imagespr from "./Imagespr"
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, Incrementquantity, Decrementquantity } from "../redux/cart/Cartreducer";
import { addtoWishlst } from "../redux/wishlist/wishlistreducer";
import Selected from "./Selected";

export default function Singleproduct() {
    const [loading, setloading] = useState(true)
    const location = useLocation()
    const item = location.state.product
    const dispath = useDispatch()
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const cartitem = useSelector(state => state.cart.cartitem);
    const [quantity, setquanity] = useState(1)
    const [selected, setselected] = useState(false)
    const finditems = cartitem.find(el => el.id === item.id);

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        let storedcount = localStorage.getItem('quantity')
        if (storedcount) {
            setquanity(parseInt(storedcount))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('quantity', quantity)
    }, [quantity])

    const wishitem = wishlist.find(el => el.id === item.id)

    const Handleselect = (value) => {
        setselected(() => value === 'Choose an option' ? false : true)
    }
    return (
        <div className="flex justify-center items-center">
            {loading ? <Spinner style={{ color: 'violet', position: 'absolute', top: '50%', left: '45%', width: '90px', height: '90px' }}></Spinner> : <div className="single-conteiner">
                <div className="images">
                    <Imagespr item={item} />
                </div>
                <div className="description">
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                    <div className="text">
                        <p>{item.text}</p>
                    </div>
                    <div className="prices">
                        <span> $ {item.price}</span>
                    </div>
                    {item.age ? <Selected Handleselect={Handleselect} item={item} /> : ''}
                    <div className="flex items-center mt-2  p-2">
                        <div className="quantity">
                            <div>
                                <button disabled={quantity === 1 ? true : false} onClick={() => {
                                    dispath(Decrementquantity(item))
                                    setquanity(quantity - 1)
                                }}>-</button>
                            </div>
                            {quantity}
                            <div>
                                <button onClick={() => {
                                    setquanity(quantity + 1)
                                    dispath(Incrementquantity(item))
                                }}>+</button>
                            </div>
                        </div>
                        <div className="btns">
                            {item.age ? <button className={`${!selected || finditems ? 'buttons not' : 'buttons'}`} disabled={selected ? false : true} onClick={() => dispath(addtoCart({ item, quantity }))}>Add to Carts</button> :
                                <button disabled={finditems ? true : false} className={`${finditems ? 'buttons not' : 'buttons'}`} onClick={() => dispath(addtoCart({ item, quantity }))}>Add to Carts</button>}
                        </div>
                        {wishitem ? <div className="wishlist">
                            <i onClick={() => dispath(addtoWishlst(item))} style={{ color: 'red' }} className="fa-solid fa-heart"></i>
                        </div> : <div className="wishlist">
                            <i onClick={() => dispath(addtoWishlst(item))} className="fa-regular fa-heart"></i>
                        </div>}
                    </div>
                </div>
            </div>}
        </div>
    )
}