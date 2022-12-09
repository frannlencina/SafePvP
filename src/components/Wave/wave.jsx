import React from 'react'
import waveImg from '../../assets/imgs/Wave.png'
import './wave.css'

function Wave() {
  return (
    <div>
        <img className='wave' src={waveImg} alt="wave " />
    </div>
  )
}

export default Wave