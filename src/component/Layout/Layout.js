import './layout.css';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

export default function Layout() {
    const [theme, settheme] = useState(localStorage.getItem('theme') || 'light');
    const icons = theme === 'light' ? <span>🔆</span> : <span>🌙</span>
    
    const Toggletheme = () => {
        const newtheme = theme === 'light' ? 'dark' : 'light'
        settheme(newtheme)
        localStorage.setItem('theme', newtheme)
    }
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <>
            <header>
                <div className='header-row'>
                    <div className='wrapper'>
                        <Link to='/'>
                            <img className='w-[100px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAQCAYAAACiEqkUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB1VdLUiJBEE3a1nXfYCrC7049wcAJBk9gcwLlBMAJ1BMMnGD0BOIJZHaGn7CP0LPVAOY9yGIqmipoiGHhi+iob2ZlZeWvK+LAGJPs7OxcjMfjeqVSMZhK8OUYD9D2Xl5euuLB/v7+T5IX58EjR/P74+OjmwFlaAoY4MwmO4eHh5ej0eiHbxPPgYx3Rfn29vaqWGvpsIn1gT378/OzCZFy9O8xX4st0e7ubn1ra4vCJSB2+XFcRVs9ODho4VK14qWiKKpCECN+1KHcFmjT5+fnXkmaCbDu9k9UDi+wVlf5TnlBnTOWBkpM7F6rBO032MaOEn45h/bB4AFthiEF4EsYfrjUPSxnThkKzvWc8TEVof0u6B48dHzNpocXhc9989jfcBRg0Jxb+ba3t9toL2UBrBK0n7GNj46ODA68cg/xuMAltN1G29LDaDk1mRcwA23bnXPoBEpM0bQLZHnI5UIo7scdurjDo0ytl4+2UBF0B1jCmbrGI/idRsPhsCr/fLUTEgpm3aalsE9zo/9JCcAFurYP+m+yATw9PWUaj0qBMcFaBZXANpKpWU3AoLaIAbR+Y/twpRMpASg6cYZ/ZAOgVTvxpi9rIIYm7YUGAb+fAS4xgDImfbTHsgTMQrCIlhP0Bp5tibrPHPAw164/W2jGmQGyTOIQsxtMviNrgMEyUSZLTYsmCKHt0BTX6TJYf3emEvC1/PsBt+N6yzNPfrxw7plPi3OqhLNljxlCrAcxyCTLNvOFHWFCZm48c51iEHXA8298C7hc6Iziq5/TshGM34tpuiyoiAwf3cPwoj5TnG2O4xNHyEzmBe/bvMzMYnP4ktiTMxDLCvDsbzMT6HnXuMfdonv4wGB5p/0EwtcXbo6iWWDFpW99ezKFOPUECyrZMFj3aJf3MLIiIk1vthK7oln4NqLEvUCT6jB7fX3tL2Ks8SDTYRri+x8xS802Lq2CmAEQNUEHCmFRlaifsUDpWaZY4/9H1RKxzC7JnzxsMcW24dsUqklYG9j/g9B+le+7rPBIPkxKbBBe4/Ju9E7BPPXsz1EXNMpGZqY//sTJNDPQKjoeWoOz7n30WsDNKT20n4B8TVkDke1o5cgqy+f7/B+44Q/N29vbrZSEBqxZRthgrMggH624top8LiqhBUThSYZAFsjXzc1fCX8BraL6EQkpqqsAAAAASUVORK5CYII="></img>
                        </Link>
                    </div>
                    <div className='wrapper flex'>
                        <Navbar />
                        <div className='ml-5'>
                            <span onClick={Toggletheme} style={{ fontSize: '20px', cursor: 'pointer' }}>{icons}</span>
                        </div>

                    </div>
                </div>
            </header>
            <main style={{ marginTop: '100px' }}>
                <Outlet />
            </main>
        </>
    )
}