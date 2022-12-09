import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Wave from './components/Wave/wave'
import Footer from './components/Footer/footer'

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
