import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Acardion from "./Acardion"
import { addtoCart } from "../redux/cart/Cartreducer"
import { addtoWishlst } from "../redux/wishlist/wishlistreducer"
import { Link } from "react-router-dom"
import Modal from "../Modal/Modal"
import { product } from "../product"

export default function Productitem() {
    const filter = useSelector(state => state.category.filterarr)
    const filterarr = useSelector(state => state.category.filter)
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const [quantity, setquanity] = useState(1)
    const [hoverimg, sethoverimg] = useState(false)
    const [showview, setshowview] = useState(false)
    const [descript, setdescript] = useState({ name: '', price: '', text: '' })
    const [item, setitem] = useState('')
    const [modal, setmodal] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [singlearr, setsinglearr] = useState([])
    const dispath = useDispatch()

    const Showitem = (i) => {
        setshowview(i)
    }
    const Hideitem = () => {
        setshowview(null)
    }
    const Openmodal = (el, i) => {
        let description = { name: '', price: '', text: '' }
        setitem(el)
        description = { name: el.name, price: el.price, text: el.text }
        setdescript((descript) => ({
            name: description.name,
            price: description.price,
            text: description.text
        }))
        let images = [el.src, el.src2, el.src3]
        setsinglearr([...singlearr, ...images])
        setmodal(true)
    }
    const Closemodal = () => {
        setmodal(false)
        setsinglearr([])
        setCurrentImageIndex(0)
        setquanity(1)
    }

    const nextImage = () => {
        if (currentImageIndex >= singlearr.length - 1) {
            setCurrentImageIndex(0)
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }
    const prevImage = () => {
        if (currentImageIndex <= 0) {
            setCurrentImageIndex(singlearr.length - 1)
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }
    return (
        <>
            <div className="flex p-2">
                <div>
                    <Acardion />
                </div>
                <div>
                    <div className="flex flex-wrap ">
                        {(filter ? filterarr : product).map((item, index) => {
                            return (
                                <div key={index} className="wrapp-item" onMouseMove={() => Showitem(index)} onMouseLeave={Hideitem}>
                                    <div className={`${showview === index ? 'view active' : 'view'}`}>
                                        <div onClick={() => dispath(addtoCart({ item }))}>
                                            <i style={{ color: 'rgb(204, 34, 204)' }} className="fa-solid fa-bag-shopping"></i>
                                        </div>
                                        {
                                            wishlist.find(el => el.id === item.id) ? <div onClick={() => dispath(addtoWishlst(item))}>
                                                <i style={{ color: 'red' }} className="fa-solid fa-heart"></i>
                                            </div> : <div onClick={() => dispath(addtoWishlst(item))}>
                                                <i style={{ color: 'rgb(204, 34, 204)' }} className="fa-regular fa-heart"></i>
                                            </div>}
                                        <div onClick={() => Openmodal(item, index)}>
                                            <i style={{ color: 'rgb(204, 34, 204)' }} className="fa-solid fa-arrows-to-eye"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/singleproduct/${item.id}`} state={{ product: item }}>
                                            <img style={{ transition: '0.5s all' }} onMouseLeave={() => sethoverimg(null)} onMouseMove={() => sethoverimg(index)} src={hoverimg === index ? item.src2 : item.src} alt=""></img>
                                        </Link>
                                    </div>
                                    <div className="acces-names">
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
            <Modal modal={modal}
                descript={descript}
                nextImage={nextImage}
                item={item}
                prevImage={prevImage}
                quantity={quantity}
                setquanity={setquanity}
                currentImageIndex={currentImageIndex}
                singlearr={singlearr}
                Closemodal={Closemodal} />
        </>
    )
}