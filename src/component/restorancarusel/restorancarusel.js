import './restorancarusel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { responseve } from '../carusel/resposeve';
import { Link } from 'react-router-dom';

export default function Restorancarusel() {
    const [activeindex, setactiveindex] = useState(0)
    const Activeindex = (direction) => {
        if (direction === 'next') {
            setactiveindex((activeindex) => activeindex > 3 ? 0 : (activeindex + 1) % responseve.length)
        }
        else if (direction === 'prev') {
            setactiveindex((activeindex) => activeindex === 0 ? 4 : (activeindex - 1 + responseve.length) % responseve.length)
        }
    }
    return (
        <div>
            <h1 style={{ fontFamily: 'poppins, sans-serif' }} className="p-10 text-3xl font-700">New Restorans</h1>
            <div className='restorans-carusel'>
                <button className='left' onClick={() => Activeindex('prev')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className='carsuel-restoran'>
                    <div className='restoran-items'>
                        {responseve.map((item, i) => {
                            return (
                                <div key={item.id} className='wrapper' style={{ transform: `translateX(-${activeindex * 100}%)` }}>
                                    <Link to={`/singleproduct/${item.id}`} state={{ product: item }}>
                                        <img src={item.src} alt=''></img>
                                    </Link>
                                    <div className='flex justify-between items-center p-2'>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className='right' onClick={() => Activeindex('next')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className='flex justify-center items-center p-5'>
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