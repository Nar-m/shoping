import { useDispatch } from "react-redux"
import { Removecartitem, Incrementquantity, Decrementquantity } from "../redux/cart/Cartreducer"

export default function Cartproduct({ cartitem }) {
    const dispath = useDispatch()
    return (
        <div className="cart-item" style={{ overflowY: 'scroll', height: '100%' }}>
            {cartitem?.map((el, i) => {
                return (
                    <div key={i} className="w-full">
                        <div className="cart-content">
                            <div className="image">
                                <img alt={el.name} src={el.src}></img>
                            </div>
                            <div className="name-price">
                                <h2>{el.name}</h2>
                                <p>Price: ${el.price}</p>
                            </div>
                            <div className="end-price">
                                <p>${parseInt(el.price) * el.quantity}</p>
                            </div>
                        </div>
                        <div className="item-futer">
                            <div className="my-number">
                                <div className="quantity">
                                    <button onClick={() => dispath(Decrementquantity(el))} style={{ color: `${el.quantity === 1 ? '#cacaca' : 'black'}` }} disabled={el.quantity === 1 ? true : false}>-</button>
                                    {el.quantity}
                                    <button onClick={() => dispath(Incrementquantity(el))}>+</button>
                                </div>
                            </div>
                            <div onClick={() => dispath(Removecartitem(el))} className="remove">
                                <i className="fa-solid fa-trash-can"></i>
                                <span>Remove</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}