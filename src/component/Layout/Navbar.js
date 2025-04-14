import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation()
    const [navbar] = useState([
        {
            title: 'Home',
            Link: '/'
        },
        {
            title: 'Accessories',
            Link: '/accessories'
        },
        {
            title: 'Restaurant',
            Link: '/restaurant'
        },
        {
            title: 'Contact',
            Link: '/login'
        }
    ])
    return (
        <nav>
            <ul className="flex">
                {navbar.map((item, index) => {
                    return (
                        <NavLink className={`flex 
                        hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px]
                        hover:text-gray-950 md:border-r-[2px] border-r-gray-500 duration-20 last:border-r-0 `}
                            state={{ data: location.pathname.split("/")[1] }}
                            key={index}
                            to={item.Link}>
                            {item.title}</NavLink>
                    )
                })}
            </ul>
        </nav>
    )
}