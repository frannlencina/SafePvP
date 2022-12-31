import React from 'react'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Wave from '../components/wave'
import Footer from '../components/footer'
import GameMode from '../components/gameMode'
import CustomBuilds from '../components/customBuilds'

function Home() {
    return (
        <>
            <section className='heroApp'>
                <section className='navbar'>
                    <Navbar />
                </section>
                <section className='hero mt-20'>
                    <Hero />
                </section>
                <Wave />
            </section>
            <section className='gameModes'>
                <GameMode />
            </section>
            <section className='customBuilds'>
                <CustomBuilds />
            </section>
            <section className='footer pt-20'>
                <Footer />
            </section>
        </>
    )
}

export default Home