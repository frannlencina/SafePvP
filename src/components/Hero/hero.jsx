import React from 'react'
import './hero.css'

function Hero() {
    return (
        <div className="hero__container flex justify-center">
            <div className='hero__main flex flex-col justify-center items-center text-center'>
                <div className="hero__title">
                    <h1 className='text-white font-bold text-6xl'>WELCOME TO</h1>
                    <h2 className='text-white font-bold text-6xl mb-5'>SAFEPVP</h2>
                    <p className='block font-medium text-white opacity-50 text-2xl mb-5'>Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </div>
                <div className="hero__players">
                    <div className="box__buttons">
                        <button className='copyBtn px-5 py-3 rounded-lg font-semibold text-white'>COPY IP <i class="ri-clipboard-line"></i></button>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero