import './styles/global.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Team from './pages/Team'
import Rules from './pages/Rules'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/rules' element={<Rules />} />
          <Route path='/team' element={<Team />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NoMatch />} />
      </Routes>
      </BrowserRouter>
      )
}

      export default App
