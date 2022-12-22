import './styles/global.css'

import Navbar from './components/navbar'
import Hero from './components/hero'
import Wave from './components/wave'
import Footer from './components/footer'


function App() {

  return (
    <div className="App">
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='hero'>
        <Hero />
      </section>
      <Wave />
      <section className='footer'>
        <Footer />
      </section>
    </div>
  )
}

export default App
