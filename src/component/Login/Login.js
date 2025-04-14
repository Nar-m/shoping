import './login.css'
import Contact from './Contact'

export default function Login() {
    return (
        <div className="w-full h-screen flex items-center">
            <div className='relative w-1/2 h-full flex flex-col'>
                <img className='h-full object-cover' src='https://www.hrsinternational.com/fileadmin/HRS_Pictures/Slider/Slider_1200x630_Small_Desktop/shutterstock-1059538757.jpg' alt=''></img>
            </div>
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <h1 className='text-xl text-[#060606] py-4 font-semibold'>Interactive Brand</h1>
                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-2xl font-semibold mb-4'>Login</h3>
                        <p className='text-base mb-2'>Welcome Back! Pleaze Enter your detalis.</p>
                    </div>
                    <Contact />
                </div>
                <div className='w-full flex justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Dont have account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}