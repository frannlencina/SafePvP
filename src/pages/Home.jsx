import React, { Suspense, lazy } from 'react'

import Navbar from '../components/navbar'
const Hero = lazy(() => import('../components/hero'));
import Wave from '../components/wave'
const GameMode = lazy(() => import('../components/gameMode'));
const CustomBuilds = lazy(() => import('../components/customBuilds'));
import Footer from '../components/footer'



function Home() {
    return (
        <>
            <section className='heroApp'>
                <section className='navbar'>
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Navbar />
                    </Suspense>
                </section>
                <section className='hero mt-20'>
                    <Suspense fallback={<h1>Cargando...</h1>}>
                        <Hero />
                    </Suspense>
                </section>
                <Wave />
            </section>
            <section className='gameModes'>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <GameMode />
                </Suspense>
            </section>
            <section className='customBuilds'>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <CustomBuilds />
                </Suspense>
            </section>
            <section className='footer pt-20'>
                <Suspense fallback={<h1>Cargando...</h1>}>
                    <Footer />
                </Suspense>
            </section>
        </>
    )
}

export default Home