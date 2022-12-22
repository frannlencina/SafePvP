import React from 'react'
import '../styles/global.css'
import '../styles/navbar.css'
import Logo from '../assets/imgs/logo-safe.png'



function Navbar() {
    return (
        <div className='flex justify-center'>
            <div className="container w-4/5 h-20 bg-neutral-900 rounded-xl flex justify-between items-center mt-3 ">
                <div className="navLogo w-16 relative left-16 ">
                    <a href="#"><img className='' src={Logo} alt="logo safe" /></a>
                </div>
                <div className="linksContainer">
                    <input type="checkbox" id='check' />
                    <label className='menuBtn float-right' htmlFor="check"><i class="fa-solid fa-bars fa-2x"></i></label>
                    <ul className='navLinks font-medium flex-row'>
                        <li className=' text-white opacity-70 flex'>
                            <a href="#" className='text-white opacity-100'><i class="homeIcon ri-home-4-line"></i> Home</a>
                            <a className='links' href="#"><i class="shopIcon ri-shopping-cart-line"></i> Shop</a>
                            <a className='links' href="#"><i class="rulesIcon ri-file-list-3-line"></i> Rules</a>
                            
                            
                        </li>
                    </ul>
                </div>
                
        <div className="flex gap-x-2 text-white opacity-50 relative right-16">
            <div className="navSocial " >
                <ul >
                    <li>
                        <a href="#"><i class="ri-discord-fill"></i></a>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                        <a href="#"><i class="ri-youtube-fill"></i></a>
                    </li>
                </ul>
            </div>
        </div>
            </div >
        </div >
    )
}

export default Navbar