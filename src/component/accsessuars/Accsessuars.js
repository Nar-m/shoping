import { useState, useEffect } from "react"
import { accesslider } from "./imgslider"
import './accsesuar.css';
import Categoryitems from "../category/categoryitems";
import { browser } from "../carusel/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Productitem from "./Productitem";

export default function Accsessuar() {
    const navigator = ['The Watch', 'The blast of detalis', 'Small and powerfull']
    const [counter, setcounter] = useState(0)
    const [curentindex, setcurentindex] = useState(0)
    const [transform, settransform] = useState(0)
    const [btnsdisapbled, setdisabled] = useState(true)
    const [leftdisabled, setleftdisabled] = useState(false)
    const [hoverimg, sethoverimg] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setcounter((counter) => counter + 1)
        }, 10)
        if (counter >= 100) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [counter])

    useEffect(() => {
        if (transform >= 4) {
            setdisabled(false)
        }
        else if (transform === 0) {
            setleftdisabled(false)
        }
        else {
            setleftdisabled(true)
            setdisabled(true)
        }
    }, [transform])

    const Activecarusel = (name) => {
        if (name === 'next') {
            settransform((transform) => transform >= 4 ? 0 : (transform + 1) % browser.length)
        }
        else if (name === 'prev') {
            settransform((transform) => transform === 0 ? 4 : (transform - 1 + browser.length) % browser.length)
        }
    }
    const Hoverimg = (e, i) => {
        e.preventDefault()
        sethoverimg(i)
    }
    return (
        <div>
            <div className="acess-slider">
                {accesslider.map((item, index) => {
                    return (
                        <div className={`${curentindex === index ? 'slid active' : 'slid'}`} key={index}>
                            <img alt="" src={item}></img>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between items-center p-5" style={{ background: 'gainsboro' }}>
                {navigator.map((item, index) => {
                    return (
                        <div onClick={() => setcurentindex(index)} style={{ fontSize: '20px', color: `${curentindex === index ? '#0188ff' : 'black'}`, fontWeight: '600', cursor: 'pointer' }} key={index}>{item}</div>
                    )
                })}
            </div>
            <h2 style={{ fontSize: '40px', color: '#161922', textAlign: 'center', lineHeight: '50px', fontWeight: '500' }} className="product_title">
                Browse <span style={{ color: '#0089F7' }}>{counter}+</span> products
            </h2>
            <div className="flex justify-center p-5 items-center">
                <Categoryitems />
            </div>

            <div className="flex justify-center items-center">
                <div><h2 style={{ color: '#161922', marginBottom: '20px', fontSize: '25px', fontWeight: '600' }}>Hot promotions</h2></div>
            </div>
            <div className="btns" style={{ padding: '13px' }}>
                <button style={{ background: `${leftdisabled ? '#c4b7b7' : '#dedcdc'}` }} disabled={leftdisabled ? false : true} onClick={() => Activecarusel('prev')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button style={{ background: `${btnsdisapbled ? '#c4b7b7' : '#dedcdc'}` }} onClick={() => Activecarusel('next')} disabled={!btnsdisapbled ? true : false}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="browser" style={{ padding: '13px' }}>
                <div className="broser-conteiner">
                    {browser.map((item, index) => {
                        return (
                            <div key={index} className="wrapp" style={{ transform: `translateX(-${transform * 115}%)` }}>
                                <Link to={`/singleproduct/${item.id}`} state={{ product: item }}>
                                    <div className="images">
                                        <img onMouseLeave={() => sethoverimg(null)} onMouseMove={(e) => Hoverimg(e, index)} src={hoverimg === index ? item.src2 : item.src} alt=""></img>
                                    </div>
                                </Link>
                                <span style={{ color: '#161922', fontWeight: '600' }}>{item.name}</span>
                                <span style={{ color: '#0089F7', fontSize: '18px' }}>${item.price}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex justify-center items-center p-5'>
                {Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <div key={index} onClick={() => settransform(index)}
                            style={{
                                width: '12px',
                                borderRadius: '50%',
                                height: '12px',
                                background: `${transform === index ? '#006edf' : 'rgba(0,0,0,.15)'}`,
                                cursor: 'pointer',
                                margin: '0 15px',

                            }}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className="proudct_title">
                <h1 className="text-center pt-5" style={{ fontSize: '40px', letterSpacing: '0px', fontWeight: '500', lineHeight: '50px' }}>Featured products</h1>
            </div>
            <Productitem />
        </div>
    )
}