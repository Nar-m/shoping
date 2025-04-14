import { Filterproduct } from "../redux/categorys/categoryreducer"
import { useDispatch } from "react-redux"

export default function Size({item}){
    const dispath = useDispatch()
    return(
        <>
            <div onClick={()=> dispath(Filterproduct(item))}>{item}</div>
        </>
    )
}