import React from 'react'

import Koths from '../assets/imgs/koths-image.png'
import Citadels from '../assets/imgs/citadels-image.png'
import Roads from '../assets/imgs/roads-image.png'

import Wave2 from './wave2'

function CustomBuilds() {
  return (
    <>
      <Wave2 />
      <div className="mx-auto items-center">
        <div className="title flex flex-col justify-center text-center items-center mb-20">
          <h3 className=' text-main-black font-bold text-5xl md:text-5xl lg:text-6xl'>GAME MODES</h3>
          <p className='font-normal text-main-black text-lg md:text-xl lg:text-2xl'>Lorem simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="builds flex flex-col justify-center items-center text-center gap-y-10 lg:flex-row lg:pb-64 lg:pt-52">
          <div className="koths flex flex-col items-center">
            <div className="kothTitle font-bold text-3xl">
              <h5>KOTHS</h5>
            </div>
            <div className="kothImage cursor-pointer hover:scale-105 duration-300 ease-in-out m-2">
              <img src={Koths} alt="" />
            </div>
            <div className="kothInfo font-normal text-gray-700">
              <p>Lorem simply dummy text of the printing and typesetting.</p>
            </div>
          </div>
          <div className="road flex flex-col items-center ">
            <div className="roadTitle font-bold text-3xl text-main-rose">
              <h5>ROADS</h5>
            </div>
            <div className="roadImag m-2 cursor-pointer hover:scale-105 duration-300 ease-in-out">
              <img src={Roads} alt="" />
            </div>
            <div className="roadInfo font-normal text-main-rose">
              <p>Lorem simply dummy text of the printing and typesetting.</p>
            </div>
          </div>
          <div className="citadel flex flex-col items-center ">
            <div className="citadelTitle font-bold text-3xl">
              <h5>CITADELS</h5>
            </div>
            <div className="citadelImage m-2 cursor-pointer hover:scale-105 duration-300 ease-in-out">
              <img src={Citadels} alt="" />
            </div>
            <div className="citadelInfo font-normal text-gray-700">
              <p>Lorem simply dummy text of the printing and typesetting.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomBuilds