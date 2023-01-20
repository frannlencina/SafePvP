import React, { useState } from 'react'

import Koths from '../assets/imgs/koths-image-compressed.png'
import Citadels from '../assets/imgs/citadels-image-min.png'
import Roads from '../assets/imgs/roads-image-min.png'

import Wave2 from './wave2'

import ModesCard from './modesCard';

function CustomBuilds() {

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const toggleModal = () => {
    setOpen(!open);
  }

  const handleCardClick = (e) => {
    setTitle(e.currentTarget.getAttribute('title'));
    setDescription(e.currentTarget.getAttribute('description'));
    console.log(title + ' abierto')
    toggleModal();
  }

  return (
    <>
      <Wave2 />
      <div className="mx-auto items-center">
        <div className="title flex flex-col justify-center text-center items-center mb-20">
          <h3 className=' text-main-black font-bold text-5xl md:text-5xl lg:text-6xl'>CUSTOM BUILDS</h3>
          <p className='font-normal m-5 text-main-black text-lg md:text-xl lg:text-2xl'>We have custom and optimized Builds so that the user experience is much better and innovative</p>
        </div>
        <div className="builds mx-5 flex flex-col justify-center items-center text-center gap-y-10 gap-x-16 lg:flex-row lg:pb-64 lg:pt-52">
          <div className="koths flex flex-col items-center">
            <div className="kothTitle font-bold text-3xl">
              <h5>KOTHS</h5>
            </div>
            <div onClick={handleCardClick} title="Koths" description="The server will have a quantity of 7 Koths, which will be activated every few days.
            Said Koths are going to rotate and add more so that the user experience on the server is not repetitive." className="kothImage my-5 cursor-pointer hover:scale-105 duration-300 ease-in-out m-2">
              <img src={Koths} alt="" />
            </div>
            <div className="kothInfo max-w-xs font-normal text-gray-700">
              <p>Custom and themed Koths to enjoy them to the fullest</p>
            </div>
          </div>
          <div className="road flex flex-col items-center ">
            <div className="roadTitle font-bold text-3xl text-main-rose">
              <h5>ROADS</h5>
            </div>
            <div onClick={handleCardClick} title="Roads" description="The server will have fully themed Roads depending on the map.
            These Roads will change and update as the map goes by.
            They are also designed so that the user does not have difficulties when playing" className="roadImag my-5 cursor-pointer hover:scale-105 duration-300 ease-in-out">
              <img src={Roads} alt="" />
            </div>
            <div className="roadInfo max-w-xs font-normal text-main-rose">
              <p>Roads created with the intention of making your walks better</p>
            </div>
          </div>
          <div className="citadel flex flex-col items-center ">
            <div className="citadelTitle font-bold text-3xl">
              <h5>CITADELS</h5>
            </div>
            <div onClick={handleCardClick} title="Citadels" description="As we all know, the Citadels is a very special event for each map, so we take care of optimizing it and making it as beautiful as possible so that the user experience is totally satisfactory." className="citadelImage my-5 cursor-pointer hover:scale-105 duration-300 ease-in-out">
              <img src={Citadels} alt="" />
            </div>
            <div className="citadelInfo max-w-xs font-normal text-gray-700">
              <p>Some of the most important events have to have good views</p>
            </div>
          </div>
        </div>
        {open && (
          <ModesCard title={title} description={description} onClick={toggleModal} />
        )}
      </div>
    </>
  )
}

export default CustomBuilds