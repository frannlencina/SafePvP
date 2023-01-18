import React, { useState } from 'react'

import kitmapCard from '../assets/imgs/Kitmap-Card2-min.png';
import hcfCard from '../assets/imgs/Hcf-Card2-min.png';
import practiceCard from '../assets/imgs/Practice-Card2-min.png';

import ModesCard from './modesCard';


function GameMode() {

    const [open, setOpen] = useState(false);
    const [nick, setNick] = useState('');
    
    const toggleModal = () => {
        setOpen(!open);
    }

    const handleCardClick = (e) => {
        toggleModal();
        setNick(e.currentTarget.getAttribute('nick'));
        console.log(nick + ' abierto')
    }

    

    return (
        <div className=''>
            <div className="gameHeader flex flex-col text-center items-center justify-center w-full h-64">
                <div className="title">
                    <h3 className=' text-white font-bold text-5xl md:text-5xl lg:text-6xl m-2'>GAME MODES</h3>
                    <p className='font-normal text-white opacity-50 text-lg mb-5 md:text-xl lg:text-2xl'>Safe has several game modes, which you will find here with their description.</p>
                </div>
            </div>
            <div className="modes">
                <div className="modesContainer flex flex-col items-center justify-center gap-10 py-20 p-20 lg:flex-row ">
                    <div className="kitmapContainer">
                        <div nick="Kitmap" onClick={handleCardClick} className="kitmapImage w-80 lg:w-auto cursor-pointer hover:scale-105 duration-300 ease-out">
                            <img src={kitmapCard} alt="" />
                        </div>
                    </div>
                    <div className="hcfContainer w-80 lg:w-auto cursor-pointer hover:scale-105 duration-300 ease-out">
                        <div nick="Hcf" onClick={handleCardClick} className="hcfImage">
                            <img src={hcfCard} alt="" />
                        </div>
                    </div>
                    <div className="practiceContainer w-80 lg:w-auto cursor-pointer hover:scale-105 duration-300 ease-out">
                        <div nick="Practice" onClick={handleCardClick} className="practiceImage">
                            <img src={practiceCard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="gameFooter w-full h-64"></div>
            {open && (
                <ModesCard nick={nick} onClick={toggleModal} />
            )}
        </div>
    )
}

export default GameMode

