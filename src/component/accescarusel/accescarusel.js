import './accescarusel.css'
import { useState } from 'react'
import { carusel } from '../carusel/carusel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function Accesscarusel() {
    const [activeindex, setactiveindex] = useState(0)
    const [hoverimg, sethoverimg] = useState(null)
    const Activeindex = (direction) => {
        if (direction === 'next') {
            setactiveindex((activeindex) => activeindex > 3 ? 0 : (activeindex + 1) % carusel.length)
        }
        else if (direction === 'prev') {
            setactiveindex((activeindex) => activeindex === 0 ? 4 : (activeindex - 1 + carusel.length) % carusel.length)
        }
    }
    const Mouseimgover = (e, i) =>{
        e.preventDefault()
        sethoverimg(i)
    }
    return (
        <div>
            <h1 style={{ fontFamily: 'poppins, sans-serif' }} className="p-10 text-3xl font-700">New Arrivals</h1>
            <div className='slid-conteiner'>
                <button className='left' onClick={() => Activeindex('prev')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className='carusel'>
                    <div className='carusel-items'
                    >
                        {carusel.map((item, index) => {
                            return (
                                <div key={index} className='wrapper' style={{ transform: `translateX(-${activeindex * 100}%)` }}>
                                    <Link to={`/singleproduct/${item.id}`} state={{ product: item }} >
                                       <div className='images'>
                                       <img onMouseLeave={()=> sethoverimg(null)} onMouseMove={(e)=> Mouseimgover(e, index)} alt={item.id} src={hoverimg === index ? item.src2 : item.src}></img>
                                       </div>
                                    </Link>
                                    <div>
                                        <span style={{ fontSize: '20px', fontWeight: '600' }}>{item.name}</span>
                                    </div>
                                    <span style={{ color: '#0089F7', fontSize: '18px' }}> ${item.price}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={() => Activeindex('next')} className='right'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className='flex justify-center items-center pt-3'>
                {Array.from({ length: 5 }).map((item, index) => {
                    return (
                        <div key={index} onClick={() => setactiveindex(index)}
                            style={{
                                width: '12px',
                                borderRadius: '50%',
                                height: '12px',
                                background: `${activeindex === index ? '#006edf' : 'rgba(0,0,0,.15)'}`,
                                cursor: 'pointer',
                                margin: '0 15px',

                            }}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}