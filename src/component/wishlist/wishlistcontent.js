import { useDispatch } from "react-redux"
import { addtoWishlst } from "../redux/wishlist/wishlistreducer";
import { addtoCart } from "../redux/cart/Cartreducer";


export default function Wislistcontent({ wishlist }) {
    const dispath = useDispatch();
    return (
        <div style={{ padding: '70px 0' }}>
            {wishlist.map((el, index) => {
                return (
                    <div style={{ transition: '0.4s all', }} className="flex justify-center items-center p-10" key={index}>
                        <div className="image-wish" style={{width: '50%'}}>
                            <img style={{ width: '200px' }} src={el.src}></img>
                        </div>
                        <div className="descript">
                            <h3>{el.name}</h3>
                            <span>$ {el.price}</span>
                            <p>{el.text}</p>

                            <button className="add" onClick={() => dispath(addtoCart(el))}>add to cart</button>
                            <i onClick={() => {
                                
                                dispath(addtoWishlst(el))
                            }} style={{ color: 'red', fontSize: '18px', marginLeft: '25px' }} className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}