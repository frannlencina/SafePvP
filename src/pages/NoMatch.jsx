import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'

import '../styles/global.css'

import Frog from '../assets/imgs/frog-nomatch.png'

import frogSound from '../assets/sounds/frogSound.mp3'
const soundd = frogSound
function NoMatch() {
  const sound = new Audio(soundd);
  const frogSound = () => {
    sound.play();
  }
  return (
    <div className='noMatchContainer h-screen'>
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='hero mt-32'>
        <div className="title flex flex-col justify-center items-center">
          <img onClick={frogSound} className='relative w-28 top-10 md:w-36 md:top-16 cursor-pointer hover:scale-110 transition duration-300' src={Frog} alt="" />
          <h1 className='font-bold text-7xl md:text-9xl'>404 ERROR</h1>
          <p className='font-medium text-2xl md:text-3xl'>This is probably not what you were looking for</p>
          <Link to="/" relative="path" class="bg-main-rose text-white font-medium px-3 py-2 rounded-lg mt-10 hover:text-main-black hover:scale-105 transition-all duration-300 "><i class='bx bx-left-arrow-alt'></i> Back to home</Link>
        </div>
      </section>
    </div>
  )
}

export default NoMatch