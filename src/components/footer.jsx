import React from 'react'
import Logo from '../assets/imgs/logo-safe-bw.png'


function Footer() {
    return (
        <div className='h-full'>
            <div className=" w-full flex flex-col mx-auto">
                <div className="flex justify-center">
                    <img className='w-20' src={Logo} alt="" srcset="" />
                </div>
                <div className="flex justify-center mx-auto text-center items-center text-white opacity-50 p-5 md:w-1/2">
                    <p>SafePvP is not affiliated with MojangAb, the company's
                        commercial activities comply with the policy of Mojang AB.</p>
                </div>
                <div className="flex justify-center items-center text-center text-white">
                    <div>
                        <ul>
                            <li className='flex gap-x-5 mt-5'>
                                <a href="#" className=' opacity-50 hover:opacity-100 transition duration-300 ease-in-out'><i class="ri-discord-fill"></i></a>
                                <a href="#" className='opacity-50 hover:opacity-100 transition duration-300 ease-in-out'><i class="ri-twitter-fill"></i></a>
                                <a href="#" className='opacity-50 hover:opacity-100 transition duration-300 ease-in-out'><i class="ri-youtube-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer