import './restorans.css'
import Menuslider from './menuslider'
import { useState } from 'react'
import Menurestoran from './menurestoran'

const carusel = [
    'https://menu.am/resources/default/img/banner/c3815bc6-05b9-488a-8350-e570aa27ac49.png',
    'https://menu.am/resources/default/img/banner/b5.png',
    'https://menu.am/resources/default/img/banner/44ba9325-eb5d-4bc9-9092-6642933f3cc1.png'
]

export default function Restorans() {
    const [curentindex, setcurentindex] = useState(0)

    const Slider = (type) => {
        switch (type) {
            case 'next':
                setcurentindex((curentindex) => curentindex === carusel.length - 1 ? 0 : curentindex + 1)
                break;
            case 'prev':
                setcurentindex((curentindex) => curentindex === 0 ? carusel.length - 1 : curentindex - 1)
                break;
        }
    }
    const ChangecSlider = (i) => {
        setcurentindex(i)
    }
    return (
        <div>
            <Menuslider curentindex={curentindex} carusel={carusel} Slider={Slider} />
            <div className='flex justify-center items-center p-2'>
                {Array.from({ length: 3 }).map((el, index) => <span onClick={() => ChangecSlider(index)}
                    style=
                    {{
                        background: `${curentindex === index ? 'gray' : 'white'}`,
                        cursor: 'pointer',
                        width: '10px',
                        margin: '0 10px',
                        borderRadius: '50%',
                        border: '1px solid gray',
                        height: '10px'
                    }} key={index}>{el}</span>)}
            </div>
            <Menurestoran />
        </div>
    )
}