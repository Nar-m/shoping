import './bestselers.css'
import { bestitem } from './bestitem'
import Bestcontent from './Bestcontent'
import { useState } from 'react'

export default function Bestselers() {
    const [curentpage, setcurentpages] = useState(1)
    const slicesindex = 4
    const newpages = curentpage * slicesindex // 1 * 4 == 4//
    const lastindex = newpages - slicesindex //4 - 4 == 0//
    const totallength = Math.ceil(bestitem.length / slicesindex)
    const pagination = []
    
    for (let i = 1; i <= totallength; i++) {
        pagination.push(i)
    }
    const Handleindex = (index) => {
        setcurentpages(index)
    }
    return (
        <>
            <div className="flex justify-center items-center p-2">
                <h2 className='title-label'>Our Bestsellers</h2>
            </div>
            <div className='flex justify-center flex-wrap items-center p-2'>
                {bestitem.slice(lastindex, newpages).map((item, i) => <Bestcontent item={item} key={i} />)}
            </div>
            <div className='flex justify-center items-center p-2'>
                <div className='pages'>{pagination.map((item, i) => <span onClick={() => Handleindex(item)} className=
                    {`${curentpage === item ? 'page-number active' : 'page-number'}`} key={i}>{item}</span>)}</div>
            </div>
        </>
    )
}