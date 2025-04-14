export default function Cartempty() {
    return (
        <div className='cart-empty'>
            <div className='mb-3'>
                <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div>
                <p className='empty'>Your cart is currently empty.</p>
            </div>
        </div>
    )
}