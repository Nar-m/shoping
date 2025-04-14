import { Link } from "react-router-dom"

export default function Bestcontent({ item }) {
    const { src, name, price } = item
    return (
        <div className="best-wrapp">
            <Link to={`/singleproduct/${item.id}`} state={{ product: item }}>
                <div className="images">
                    <img src={src} alt={name}></img>
                </div>
            </Link>
            <div>
                <h5 className="title">{name}</h5>
            </div>
            <div>
                <span className="prices">{price}</span>
            </div>
        </div>
    )
}