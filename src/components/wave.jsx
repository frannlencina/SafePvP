import React from 'react'
import waveImg from '../assets/imgs/Wave.png'


function Wave() {
  return (
    <div>
        <img className='wave w-full relative top-2' src={waveImg} alt="wave" />
    </div>
  )
}

export default Wave