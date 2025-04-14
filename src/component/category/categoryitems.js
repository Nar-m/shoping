import { useDispatch } from "react-redux"
import { Filtercategory } from "../redux/categorys/categoryreducer"
import { Link } from "react-router-dom"

const category = [
    {
        img: 'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon1.webp',
        text: 'Notebooks'
    },
    {
        img: 'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon2.webp',
        text: 'Smartphones'
    },
    {
        img: 'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon3.webp',
        text: 'Smartwatches'
    },
    {
        img: 'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon4.webp',
        text: 'TV / Audio'
    },
    {
        img: 'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon8.webp',
        text: 'View all'
    }
]

export default function Categoryitems() {
    const dispath = useDispatch()
    
    return (
        <>
            {category.map((item, index) => {
                return (
                    <Link key={index} to="/filterproductpage" state={item}>
                        <div onClick={() => dispath(Filtercategory(item.text))} className="flex cursor-pointer justify-center items-center flex-col p-2" style={{ background: '#e9e6ed', width: '150px', height: '150px', margin: '0 15px' }}>
                            <img alt="" src={item.img}></img>
                            <span style={{ fontSize: '17px', fontWeight: '600', marginTop: '8px' }}>{item.text}</span>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}