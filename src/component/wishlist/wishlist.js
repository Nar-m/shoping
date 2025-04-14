import './wishlist.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Wislistcontent from './wishlistcontent'

export default function Wishlist() {
    const wishlist = useSelector(state => state.wishlist.wishlist)

    return (
        <div>
            <div className='wish-header'>
                <h1 className='title'>Wishlist</h1>
                <ul className='wish-link'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li style={{ marginLeft: '8px' }}>Wishlist</li>
                </ul>
            </div>
            {wishlist.length === 0 ? <div id='wish-content'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='title-content'>
                        <h3>Your wishlist is empty</h3>
                    </div>
                    <Link to="/">
                        <div className='gotoshop' style={{ marginTop: '10px' }}>
                            <button>Go to shop</button>
                        </div>
                    </Link>
                </div>
            </div> : <Wislistcontent wishlist={wishlist} />}
        </div>
    )
}