import './calendar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export default function Calendar() {
    const [date, setDate] = useState(new Date())
    const days = ['Կիր', 'Երկ', 'Երք', 'Չրք', 'Հնգ', 'ՈՒրբ', 'Շբթ'];
    const [dates, setdates] = useState(date.getDate())
    
    const getDaysInMonth = (year, mount) =>{
        return new Date(year, mount + 1, 0).getDate();
    }

    const getfirsdayInMount = (year, mount) =>{
        return new Date(year, mount, 1).getDay();
    }
        const year = date.getFullYear();
        const mount = date.getMonth();
        const daysmount = getDaysInMonth(year, mount);
        getfirsdayInMount(year, mount);
        const calendar = [];

        for(let i = 1; i <= daysmount; i++){
            calendar.push(
                <div key={i} className="calendar-day">
                  {i}
                </div>
              );
        }
    
    const NextDate = () =>{
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
    }
    const PrevDate = () =>{
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
    }
    const ToggleItem = (e) =>{
        e.target.classList.toggle('open');
    }
    return (
         <div className="calendar" onClick={(e)=> ToggleItem(e)}>
            <div className="calendar-header">
                <div className='days'>
                    <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                </div>
                <div>
                   <button onClick={()=> PrevDate()}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                   </button>
                   <button onClick={()=> NextDate()}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                   </button>
                </div>
            </div>
            <div className="calendar-body">
                <div className="calendar-day">
                    {days.map((el, i) =>{
                        return <span key={i}>{el}</span>
                    })}
                </div>
                <div className='calendar-mount'>
                {calendar.map((el, i) => {
                    return <div onClick={()=> setdates(i)} className={`${dates === i ? 'dates active' : 'dates'}`} key={i}>{el}</div>
                })}
                </div>
            </div>
        </div>
    )
}