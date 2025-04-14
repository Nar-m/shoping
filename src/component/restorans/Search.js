import { useState } from "react"
import { Searchproduct } from "../redux/restoran/Filterrestorans"
import { useDispatch } from "react-redux"

export default function Search(props) {
    const { restoran, setsearch, setfilters } = props
    const [name, setnames] = useState('')
    const dispath = useDispatch()
    const Handelchange = (e) => {
        const { value } = e.target
        setnames(value)
        if (value === '') {
            setsearch(false)
        }
        else {
            setsearch(true)
        }
        let searchfilter = restoran.filter(item => item.name.toLocaleLowerCase().includes(value)
            || item.kingnof.toLowerCase().includes(value) || item.category.toLocaleLowerCase().includes(value))
        setfilters(searchfilter)
    }
    return (
        <form onSubmit={(e) => {
            setsearch(false)
            e.preventDefault();
            dispath(Searchproduct(name))
        }}>
            <div className="search-box">
                <input value={name} onChange={(e) => Handelchange(e)} type="search" placeholder="Search Restoran..."></input>
                <i onClick={() => {
                    setsearch(false)
                    dispath(Searchproduct(name))
                }} style={{ color: '#1daf', marginRight: '10px' }} className="fa-solid fa-magnifying-glass"></i>
            </div>
        </form>
    )
}