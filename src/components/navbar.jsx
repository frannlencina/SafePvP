import { useState } from 'react'
import '../styles/navbar.css'

import Logo from '../assets/imgs/logo-safe-min.png'



function Navbar() {

    const [show, setShow] = useState(false);
    const toggleModal = () => {
        setShow(!show);
    }

    return (
        <div className=''>
            <nav class="navbarBackground px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-row items-center justify-between mx-auto">
                    <a href="#" class="flex items-center">
                        <img src={Logo} class="h-10 mr-3 sm:h-9" alt="SafePvP Logo" />
                        <span class="self-center text-xl mr-5 font-semibold whitespace-nowrap dark:text-white">SAFE PVP</span>
                    </a>
                    <div class="flex flex-column md:flex-row items-center justify-between w-full md:w-auto md:order-1" id="navbar-cta">
                        <input type="checkbox" id='check' />
                        <label className='menuBtn ml-10' htmlFor="check"><i class="fa-solid fa-bars fa-2x"></i></label>
                        <ul class="navLinks ">
                            <li className='flex flex-col md:flex-row md:gap-y-0 md:gap-x-6 '>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded bg-main-rose dark:text-white" aria-current="page"> <i class="ri-home-4-line"></i> Home</a>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white "> <i class="ri-shopping-cart-line"></i> Shop</a>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white "> <i class="ri-file-list-3-line"></i> Rules</a>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-white  "> <i class="ri-group-line"></i> Team</a>
                            </li>
                        </ul>
                        <button type="button" id='modalBtn' onClick={toggleModal} class="text-white ml-10 bg-main-rose hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Social</button>
                    </div>
                </div>
            </nav>
            {show && (<div id='elem1' className=' modalBackground fixed bg-black bg-opacity-70 top-0 w-full h-full z-10 flex justify-center items-center '>
                <div className='modalContainer flex flex-column justify-center bg-main-black w-80 h-100 relative px-5 pb-5 rounded-xl md:h-3/5 '>
                    <div className="flex flex-col md:justify-center gap-y-2">
                        <div className="modalTitle flex justify-between items-center ">
                            <h4 className='text-white text-xl font-bold p-3'>Social Media</h4>
                            <button onClick={toggleModal} className='w-8 rounded duration-300  hover:bg-gray-700 h-8 '><i class='bx bx-x text-gray-300'></i></button>
                        </div>
                        <div className="modalInfo mb-5">
                            <p className='text-gray-400'>Connect with one of our available wallet providers or create a new one.</p>
                        </div>
                        <div className="modalBody mt-5">
                            <ul>
                                <li className='flex flex-col text-white font-medium'>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2 md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black duration-300 '><i class='bx  bxl-discord-alt bx-flip-horizontal shadow-md' ></i> Discord </a>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2 md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black duration-300 '> <i class='bx bxl-youtube bg-white rounded bx-flip-horizontal shadow-md' ></i> Youtube <span class=" absolute right-20  text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-green-700 text-gray-300">New</span></a>
                                    <a href="#" className='flex items-center gap-x-2 bg-main-rose w-10/12 m-2  md:m-3 text-start p-3 rounded-lg  hover:bg-white hover:text-main-black'> <i class='bx bxl-twitter bx-flip-horizontal shadow-md' ></i> Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="modalFooter mt-10">
                            <a href='' className='text-gray-400 '> Lorem ipsum dolor sit amet consectetur <i class='bx bx-link'></i></a>
                        </div>
                    </div>
                </div>
            </div>)}

        </div >
    )
}

export default Navbar