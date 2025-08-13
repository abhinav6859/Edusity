import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

    const[sticky, setSticky] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY > 70 ? setSticky(true): setSticky(false)
        })
    },[])
    return (

        <nav className={`container ${sticky? "dark-nav": ""}`}>

            <img src={logo} alt="" className='logo' />
            <ul>

                <li><a href="#hero">Home</a></li>
                <li> <a href="#programs" >Programs</a> </li>
                <li><a href="#about">About us</a></li>
                <li> <a href="#campus">campus</a> </li>
                <li> <a href="#Testrimonials">Testrimonials</a> </li>



                <li><button className='btn'> <a href="#Contact"> Contact Us</a> </button></li>
            </ul>
<img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu}/>
        </nav>

    )
}

export default Navbar