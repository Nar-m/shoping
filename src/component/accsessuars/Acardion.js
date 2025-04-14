import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import './acardion.css';
import Size from "./Size";
import { useDispatch } from "react-redux";
import { Filterproduct } from "../redux/categorys/categoryreducer";
import { Spinner } from "react-bootstrap";
import { acardion } from "../acardion";

export default function Acardion() {
    const [open, setisopen] = useState(null)
    const size = ['64GB', '512GB', '1TB', '2TB']
    const color = ['brown', 'blue', 'black', 'gray', 'white']

    const dispath = useDispatch()
    const conteiner = useRef()

    const Toggleacardion = (i) => {
        setisopen((open) => open === i ? null : i)
    }
    return (
        <div className="sydbar">
            {acardion.map((item, index) => {
                return (
                    <div key={index} className="acardion">
                        <div className="acardion-items">
                            <div>
                                <span style={{ color: '#626262', cursor: 'pointer' }}>{item.title}</span>
                            </div>
                            <div>
                                <button style={{ transform: `rotate(${open === index ? '180deg' : '0deg'})` }} onClick={() => Toggleacardion(index)}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </div>
                        </div>
                        <div className="conteiner" ref={conteiner} style={
                            open === index ? { height: conteiner.current.scrollHeight } : { height: '0px', overflow: 'hidden' }
                        }
                        >
                            {item.items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <span onClick={() => {
                                            dispath(Filterproduct(item.name))
                                        }} style={{ color: '#626262', cursor: 'pointer' }} >{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <h2 className="color">Color</h2>
            <div className="colors">
                {color.map((item, index) => {
                    return (
                        <div key={index} className="color-item">
                            <div onClick={() => {
                                dispath(Filterproduct(item))
                            }} style={{ background: item }}>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2 className="size">HD Size</h2>
            <div className="sizes">
                {size.map((item, index) => {
                    return <Size item={item} key={index} />
                })}
            </div>
        </div>
    )
}