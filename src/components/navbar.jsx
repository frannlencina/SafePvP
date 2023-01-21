import { useState } from 'react'
import '../styles/navbar.css'

import { Link } from 'react-router-dom'

import Logo from '../assets/imgs/logo-safe-min.png'

import SocialModal from './socialModal'


function Navbar() {

    const [show, setShow] = useState(false);
    const toggleModal = () => {
        setShow(!show);
    }

    return (
        <div className=''>
            <nav class="navbarBackground px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-row items-center justify-between mx-auto">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="h-10 mr-3 sm:h-9" alt="SafePvP Logo" />
                        <span class="self-center text-xl mr-5 font-semibold whitespace-nowrap dark:text-white">SAFE PVP</span>
                    </Link>
                    <div class="flex flex-column md:flex-row items-center justify-between w-full md:w-auto md:order-1" id="navbar-cta">
                        <input type="checkbox" id='check' />
                        <label className='menuBtn ml-10' htmlFor="check"><i class="fa-solid fa-bars fa-2x"></i></label>
                        <ul class="navLinks ">
                            <li className='flex flex-col md:flex-row md:gap-y-0 md:gap-x-6 '>
                                <Link to="/" relative="path" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white "><i class="ri-home-4-line"></i> Home</Link>
                                <Link to="/shop" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white "> <i class="ri-shopping-cart-line"></i> Shop</Link>
                                <Link to="/rules" relative="path" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white "><i class="ri-file-list-3-line"></i> Rules</Link>                         
                                
                            </li>
                        </ul>
                        <button type="button" id='modalBtn' onClick={toggleModal} class="text-white ml-10 bg-main-rose hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Social</button>
                    </div>
                </div>
            </nav>
            {show && (
                <SocialModal onClick={toggleModal} />
            )}

        </div >
    )
}

export default Navbar