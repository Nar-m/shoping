import './filterproductpage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addtoCart } from "../redux/cart/Cartreducer"
import { addtoWishlst } from '../redux/wishlist/wishlistreducer';

export default function Filterproductpage() {
    const category = useSelector(state => state.category.category);
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const location = useLocation()
    const [hoverimg, sethoverimg] = useState(null);
    const [showview, setshowview] = useState(null)
    const dispath = useDispatch();
    const Mouseimghover = (e, i) => {
        e.preventDefault()
        sethoverimg(i)
    }
    const Showitem = (i) => {
        setshowview(i)
    }
    const Hideitem = () => {
        setshowview(null)
    }
    return (
        <div>
            <div className="sub_header">
                <h2>{location.state.text}</h2>
            </div>
            <div className='category'>

                <div className='flex flex-wrap items-center p-2'>
                    {category.map((item, index) => {
                        return (
                            <div key={index} className='wrapp' onMouseMove={() => Showitem(index)} onMouseLeave={Hideitem}>
                                <div className={`${showview === index ? 'view active' : 'view'}`}>
                                    <div onClick={() => dispath(addtoCart({item}))}>
                                        <i style={{ color: 'rgb(204, 34, 204)' }} className="fa-solid fa-bag-shopping"></i>
                                    </div>
                                    {wishlist.find(el => el.id === item.id)
                                        ? <div onClick={() => dispath(addtoWishlst(item))}>
                                            <i style={{ color: 'red' }} className="fa-solid fa-heart"></i>
                                        </div> : <div onClick={() => dispath(addtoWishlst(item))}>
                                            <i style={{ color: 'rgb(204, 34, 204)' }} className="fa-regular fa-heart"></i>
                                        </div>}
                                </div>
                                <Link key={index} to={`/singleproduct/${item.id}`} state={{ product: item }}>
                                    <img onMouseLeave={() => sethoverimg(null)} onMouseMove={(e) => Mouseimghover(e, index)} src={hoverimg === index ? item.src2 : item.src} alt=""></img>
                                </Link>
                                <div>
                                    <span style={{ color: '#161922', fontWeight: '600', fontSize: '22px' }}>{item.name}</span>
                                </div>
                                <div>
                                    <span style={{ color: '#0089F7', fontSize: '18px' }}>$ {item.price}</span>
                                </div>
                                <div>
                                    <del style={{ color: '#0089F7', fontSize: '18px' }}>{item.del}</del>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}