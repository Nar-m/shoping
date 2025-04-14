import './home.css';
import { useState, useEffect } from 'react';
import Placeholder from '../placholder/Placholder';
import Sliders from '../Sliders/sliders';
import { Link } from 'react-router-dom';
import Images from '../images/Images';
import Accesscarusel from '../accescarusel/accescarusel';
import Restorancarusel from '../restorancarusel/restorancarusel';
import Bestselers from '../../Bestsellers/Bestselers';

export default function Home() {
    const [slider] = useState([{
        Link: "/accessories",
        src: "https://orebi-shopping-madeby-masum.netlify.app/static/media/bannerImgOne.cc70f00d1512cb1f97f6.webp"
    },
    {
        Link: "/accessories",
        src: "https://i.pinimg.com/736x/05/24/56/052456310f74576b1fb2207c55faa33c.jpg"
    },
    {
        Link: "/restaurant",
        src: "https://menu.am/resources/default/img/banner/b5.png"
    }])
    const [slidloading, setslidloading] = useState(true)
    useEffect(() => {
        setslidloading(true)
        setTimeout(() => {
            setslidloading(false)
        }, 1000)
    }, [])
    return (
        <div>
            {slidloading ? <Placeholder /> : <Sliders slider={slider} />}
            <div className='w-full p-5 flex justify-between items-center border-b' style={{ fontSize: '1.2rem' }}>
                <div className='wrapper'>
                    <span>
                        <Link to="/accessories">Accessories</Link>
                    </span>
                </div>
                <div className='wrapper'>
                    <Link to="/restaurant">
                        <span>Restaurant</span>
                    </Link>
                </div>
                <div className='wrapper'>
                    <Link to='/'><span>Return Home age</span></Link>
                </div>
            </div>
            <div className='flex justify-center p-5 items-center'>
                <h1 className='border-b pt-2 text-3xl'>Products</h1>
            </div>
            <div className='fy-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap'>
                <Images />
            </div>
            <div className='flex justify-around p-10  items-center'>
                <div style={{ width: '40%' }}>
                    <Link to="/restaurant"> <img src='https://images.ctfassets.net/h81st780aesh/5ymd7ISv9Rr6OCls6bbQiP/61e76beb428dd54154522f58b932ec43/best-restaurant-websites-design-2024.png?fm=webp&w=991&h=595&fit=fill&f=center&q=50'></img></Link>
                </div>
                <div>
                    <span style={{ color: '#de331c', marginBottom: '20px' }}>DESIGN INSPIRATION</span>
                    <h1 className='mt-8' style={{ fontSize: '2.872rem', whiteSpace: 'wrap', fontWeight: '700' }}>The 20 Best Restaurant Websites of 2024</h1>
                    <p className='text-gray-500 mt-8 text-2xl font-600'>Our annual roundup of the internet's best restaurant websites.</p>
                </div>
            </div>
            <Bestselers />
            <Accesscarusel />
            <Restorancarusel />
        </div>
    )
}