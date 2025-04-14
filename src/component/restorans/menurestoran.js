import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Filtersname, Filtercheck } from "../redux/restoran/Filterrestorans"
import Restoranitems from "./restoranitem"
import { kingnom } from "./kinggnom"
import { check } from "./check"
import Search from "./Search"
import { restorans } from "../restorans"

export default function Menurestoran() {
    const [filters, setfilters] = useState([])
    const [search, setsearch] = useState(false)
    const poisk = useSelector(state => state.restoran.poisk)
    const searchitem = useSelector(state => state.restoran.search)
    const names = useSelector(state => state.restoran.names)
    const findname = useSelector(state => state.restoran.findname)
    const multy = useSelector(state => state.restoran.multy)
    const checkname = useSelector(state => state.restoran.checkname)
    const chekitem = useSelector(state => state.restoran.checkitem)
    const [activeindex, setactiveindex] = useState(0)
    const dispath = useDispatch()
    const [pages, setpages] = useState(1)
    const displaybtns = pages * 6 >= restorans.length || findname || checkname || poisk ? 'none' : 'block'

    const Showmore = () => {
        setpages((pages) => pages + 1)
    }

    return (
        <div className="flex p-10">
            <div className="aside">
                <ul className="kingnom">
                    {kingnom.map((item, index) => {
                        return <li style={{ color: `${activeindex === index ? '#c5022e' : '#424242'}` }} onClick={() => {
                            dispath(Filtersname(item))
                            setactiveindex(index)
                        }} key={index}>{item}</li>
                    })}
                </ul>
                <div className="check">
                    <h2>Filters</h2>
                    <div className="items-check">
                        {check.map((item, index) => {
                            return (
                                <div className="flex flex-nowrap items-center p-2" key={index}>
                                    <input onChange={() => {
                                        dispath(Filtercheck(item))
                                    }} value={item} checked={multy.includes(item)} style={{ width: '20px', color: 'red', height: '20px' }} type="checkbox"></input>
                                    <span style={{ marginLeft: '8px', whiteSpace: 'nowrap' }}>{item}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="My-chip">
                    {multy.map((el, index) => {
                        return (
                            <div key={index} className="role">
                                <span>{el}</span>
                                <span onClick={() => dispath(Filtercheck(el))} style={{ fontSize: '23px', fontWeight: '500', cursor: 'pointer', marginLeft: '20px' }}>&times;</span>
                            </div>
                        )
                    })}
                </div>
                <div className="search">
                    <Search restoran={restorans}
                        search={search}
                        setsearch={setsearch}
                        filters={filters}
                        setfilters={setfilters} />
                    {search ? <div className="search-coteiner">
                        {filters.map((el, index) => {
                            return <div key={index}>
                                <div onClick={() => {
                                    dispath(Filtersname(el.name))
                                    setsearch(false)
                                }} className="text">{el.name}</div>
                            </div>
                        })}
                    </div> : ''}
                </div>
                <div className="flex flex-wrap items-center p-2 w-full">
                    {(findname ? names :
                        checkname ? chekitem : poisk ?
                            searchitem : restorans.slice(0, pages * 6)).map((item, index) => {
                                return <Restoranitems checkname={checkname} item={item} key={index} />
                            })}
                </div>
                <div style={{ display: `${displaybtns}` }} className="more">
                    <button onClick={() => Showmore()}>Show More</button>
                </div>
            </div>
        </div>
    )
}