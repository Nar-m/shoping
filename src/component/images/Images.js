import { Link } from "react-router-dom"

export default function Images() {
    return (
        <>
            <div className="w-full md:w-2/3 lg:w-1/2 h-full">
                <Link to="/accessories">
                    <img src="https://orebi-shopping-madeby-masum.netlify.app/static/media/saleImgOne.5fd9a91421b8b3d52f04.webp"></img>
                </Link>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 la:gap">
                <div className="h-1/2 w-full">
                    <Link to="/accessories"> <img src="https://orebi-shopping-madeby-masum.netlify.app/static/media/saleImgTwo.ecb733524e878406c281.webp"></img></Link>
                </div>
                <div className="h-1/2 w-full">
                    <Link to="/accessories"><img src="https://orebi-shopping-madeby-masum.netlify.app/static/media/saleImgThree.7f55d28e41e547163b6c.webp"></img></Link>
                </div>
            </div>
        </>
    )
}