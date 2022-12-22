import React, { useState, useEffect } from 'react'
import axios from "axios";

import HeroRender from '../assets/imgs/hero-render.png'
import HeroRenderMobile from '../assets/imgs/hero-render-mobile.svg'

const baseURL = 'https://api.mcsrvstat.us/2/safepvp.us';

function Hero() {
    
    const [onlinee, setOnlinee] = useState(false)
    const [playersOnline, setPlayersOnline] = useState()

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setOnlinee(response.data.online);
          setPlayersOnline(response.data.players.online)

        });
      }, []);

    return (
        <div className="container mx-auto columns-1 flex flex-col md:columns-2 md:flex-row justify-center h-auto p-5">
            <div className='hero__main flex flex-col justify-center items-center text-center'>
                <div className=" hero__title">
                    <h1 className='text-white font-bold text-6xl'>WELCOME TO</h1>
                    <h2 className='text-white font-bold text-6xl mb-5'>SAFEPVP</h2>
                    <p className='block font-medium text-white opacity-50 text-2xl mb-5'>Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </div>
                <div className="hero__players flex flex-col sm:flex-row">
                <div className="box__buttons ">
                        <button className='mb-5 sm:mb-0 px-2 py-2  rounded-lg font-semibold text-white transition-all duration-300 bg-rose-600 border-2 border-rose-600 hover:scale-110 hover:border-2 hover:border-rose-600 hover:bg-transparent'>COPY IP <i class="ri-clipboard-line"></i></button>
                    </div>
                    <div className="box__players flex gap-x-3 px-5 py-3 rounded-lg bg-black bg-opacity-50 ml-5 text-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                        <i class="ri-team-fill text-white"></i>
                        <p className='textColor font-extrabold text-rose-600'> {playersOnline} </p><p className='font-extrabold text-white'>ONLINE</p><p className='font-medium text-white'>PLAYERS</p> <p className='text-red-700 font-bold'>{ onlinee ? '' : '(Offline)'}</p>
                    </div>
                </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden mt-10 ">
                <img className='object-cover w-full h-full overflow-hidden' src={HeroRender}  alt="" />
            </div>
        </div>

    )
}

export default Hero