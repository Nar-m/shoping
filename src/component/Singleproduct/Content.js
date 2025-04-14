

export default function Content(props) {
    const {index, setindex,  Closemodal, element } = props
    return (
        <>
            <div className="modal-haeder">
                <div className="text-modal">
                    <span>{element.name}</span>
                </div>
                <div className="close-modal" onClick={Closemodal}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="modal-item">
                <div className="photo-carusel">
                    {element.single ? element.single.map((el, i) => {
                        return (
                            <div key={i} className='phot-slid' style={{ transform: `translateX(-${index * 100}%)`, left: `${i * 100}%` }}>
                                <img alt="" src={el.img}></img>
                            </div>
                        )
                    }) : <img alt="" src={element.src}></img>}
                </div>
                <div className="dott-slider">
                    {element.single ? element.single.map((el, i) => {
                        return (
                            <div key={i} onClick={() => setindex(i)} className={`${index === i ? 'dott-img active' : 'dott-img'}`}>
                                <img alt="" src={el.img}></img>
                            </div>
                        )
                    }) : ''}
                </div>
            </div>
        </>
    )
}