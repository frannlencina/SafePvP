import React from 'react'
import Logo from '../assets/imgs/logo-safe-bw.png'


function Footer() {
    return (
        <div>
            <div className="footerr">
                <div className="footerLogo">
                    <img src={Logo} alt="" srcset="" />
                </div>
                <div className="footerLinks">
                    <ul className='navLinks font-medium'>
                        <li>
                            <a href="#" className='links text-white opacity-100'><i class="homeIcon ri-home-4-line"></i> Home</a>
                            <a className='links' href="#"><i class="shopIcon ri-shopping-cart-line"></i> Shop</a>
                            <a className='links' href="#"><i class="rulesIcon ri-file-list-3-line"></i> Rules</a>
                            <a className='links' href="#"><i class="teamIcon ri-group-line"></i> Team</a>
                        </li>
                    </ul>
                    <div className="footerText text-white opacity-50 mt-10 ">
                        <p>SafePvP is not affiliated with MojangAb, the company's
                            commercial activities comply with the policy of Mojang AB.</p>
                    </div>
                </div>
                <div className="footerSocial">
                    <div className="flex gap-x-2 text-white opacity-50 relative right-16">
                        <div className="navSocial">
                            <ul>
                                <li>
                                    <a href="#"><i class="ri-discord-fill"></i></a>
                                    <a href="#"><i class="ri-twitter-fill"></i></a>
                                    <a href="#"><i class="ri-youtube-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer