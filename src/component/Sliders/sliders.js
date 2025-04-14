import { Link } from 'react-router-dom'
import './slider.css'
import { useState, useEffect } from 'react'

export default function Sliders({ slider }) {
    const [curentindex, setcurentindex] = useState(0)
    const [intervalslid, setinterslider] = useState()
    const [active, setactive] = useState(true)
    useEffect(() => {
        if (active) {
            setinterslider(setInterval(() => {
                { setcurentindex((curentindex) => curentindex === slider.length - 1 ? 0 : curentindex + 1) }
            }, 3500))
        }
        else {
            return clearInterval(intervalslid)
        }
    }, [active])
    return (
        <div className="slider-conteiner" onMouseMove={() => {
            setactive(false)
        }} onMouseLeave={() => setactive(true)}>
            {slider.map((item, index) => {
                return (
                    <div style={{ left: `${index * 100}%`, transform: `translateX(-${curentindex * 100}%)` }} key={index} className="slid">
                        <Link to={item.Link}><img alt="" src={item.src}></img></Link>
                    </div>
                )
            })}
            <div className='pagination'>
                <div className='flex items-center flex-col'>
                    {slider.map((item, index) => {
                        return (
                            <span key={index} onClick={() => setcurentindex(index)} style={{ opacity: `${curentindex === index ? '1' : '0'}` }}>{`0 ${index + 1}`}</span>
                        )
                    })}
                </div>
                <div className='bg-white flex items-center cursor-pointer flex-col' style={{ borderRadius: '8px', width: '15px' }}>
                    {slider.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setcurentindex(index)} style={{ color: `${curentindex === index ? 'black' : 'white'}` }} className={`w-full h-full ${curentindex === index ? 'bg-black' : 'bg-white'}`}>{index + 1}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}