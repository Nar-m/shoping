import { useState } from "react"
import axios from "axios"

export default function Contact() {
    const [element, setvalue] = useState({ name: '', email: '', password: '' })
    const [message, setmasegge] = useState('');
    const [type, setype] = useState(false);
        
    const Hanldechange = (e) => {
        const { name, value } = e.target
        setvalue({ ...element, [name]: value })
    }
    const Togglepassword = () => {
        setype((type) => !type)
    }
    const Validationform = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost/lesson/index.php", element)
                .then(responseve => setmasegge(responseve))
                .catch((error) => console.log(error))
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form onSubmit={Validationform}>
                <div className="w-full flex flex-col">
                    <div>
                        <input
                            onChange={(e) => Hanldechange(e)}
                            type="text"
                            value={element.name}
                            name="name"
                            placeholder="Names"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        {/* <span className="errors">{message.data}</span> */}
                    </div>
                    <div>
                        <input
                            onChange={(e) => Hanldechange(e)}
                            type="email"
                            value={element.email}
                            name="email"
                            placeholder="Email"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        {/* <span className="errors">{message.data}</span> */}
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => Hanldechange(e)}
                            value={element.password}
                            type={`${type ? "text" : "password"}`}
                            name="password"
                            placeholder="Password"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        <div className="absolute right-[10px] bottom-[20px]">
                            <i onClick={Togglepassword} className={`${type ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}`}></i>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center">
                        <input type="checkbox" className="w-4 h-4 mr-2"></input>
                        <p className="text-sm">Remember Me for 30 days</p>
                    </div>
                    <p className="text-sm whitespace-nowrap font-medium underline underline-offset-2 cursor-pointer">Forgot Password?</p>
                </div>
                <div className="w-full flex flex-col my-4">
                    <button className="w-full text-white font-semibold bg-[#060606] rounded-md p-3 text-center flex items-center justify-center">
                        Sign in
                    </button>
                </div>
            </form>
            <button className="w-full my-2 font-semibold text-[#060606] bg-white border-1 border-black rounded-md p-3 text-center flex items-center justify-center">
                Register
            </button>
            <div className="w-full flex items-center justify-center relative">
                <div className="w-full h-[1px] bg-black/40"></div>
                <p className=" text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
            <div className="w-full cursor-pointer my-3 font-semibold text-[#060606] bg-white border-1 border-black rounded-md p-3 text-center flex items-center justify-center">
                <img className="h-5 mr-2" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACgANAMBEQACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAGAAUHA//EAC8QAAECBAMFCAIDAAAAAAAAAAECAwAEBREGEiETMUGBsQcUFVFhcZGhIjJScsH/xAAaAQADAQEBAQAAAAAAAAAAAAAABAUDBgIB/8QALREAAQMCBAQEBwEAAAAAAAAAAAECAwQRBRMhMRJBUbEUcYGhIjJSYZHB8BX/2gAMAwEAAhEDEQA/AO0QARIAJJAA1JMAA+sY9kpVxTVOZM4pJsXM2Vvkd56esJyVjW6N1LVNgksicUq8Pcykdok6FXckJZSfJK1A/OvSMvGu6Dq4DFbR6inD+KZCtnZN5mJoC5Zc4/1PHr6Q1FUMk05kisw2al+JdW9U/ZuRuTygAoACXaDMTapBMlJXyr/KYCf2KOAHp5xJxCujikSBVsq6lnB448zMk5beZg4Qwimqs9+qKlplSSG20mxctvN+Aj3T02YnE7Yo4liiwOyovm5r0Fj2DKE6zs0yZaNtFtuKzD5OvOG1pYlS1iMzFqtrr8V/RD1w5huVoKFlsl6YcJCnlJscvBI8v9MfYYGxbbnmtr5KtUvoicjajcQKACgAK1+/ibl/4pt8Rw+O38at+idizRWyUENNKDT5Yt2y7MbvbX7jrqG3hY7fSnYlTLeR3mC8ceKeNI7j37Zd3TfYZ8t7q8tL7o6bDcjJXMte/O32JNXmZnw325XDT8zV5fL3iYqDWbdtHHE39rxTbHTv+VGr+BRXSt3Vfcf4CeffoRXMOuOK26gFOKKjaw4nnEDE2tbPZqW0Qp0aqsWojieNFAAVx7KTSpATklezYyv5f2yeY9Bx94nVdDFLKk7kuqGFZPUMp1bEtk59Q/hTFXhLXc51CnJS90KRqpu+/TiI2jl4dF2JdJWZScDtuwpdxpQ0NZ0TLjhtohDKrn5AH3GyzMH1r4ES9/ZQLXatMYhqaFpaUBo2wynU6nqY6XCpqfIVWrrut/7YnyTLUPunoh0ugU/wukS0obFaE3cI4qOp+zEapmzpXPK8MeWxGmhGBqUAFAAWq+CJCccU7JuKk3FalKU5kHlpbkeUYugau2ghNh8b1u1bdjKR2fTGb86k0E+YZJPWM/Dr1F/8x31ewkoWGZCjK2rQU9M2ttnN49huHWNmRozYdgpI4dU1XqbUaDRQAf/Z" alt=""></img>
                Sign in With Google
            </div>
        </>

    )
}