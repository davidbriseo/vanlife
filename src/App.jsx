import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import vanlifeLogo from './assets/vanlife-logo.png'
import './App.css'
import About from './Routes/About'
import Home from './Routes/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

function App() {

  return (
    <div className='container'>
        <BrowserRouter>
          <header className='navBar'>
            <div className='logo'>
              <Link to="/"><img src={vanlifeLogo}/></Link>
            </div>
            <nav>
              <Link to="/about">About</Link>
              <Link to="/vans" >Vans</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <footer>Ⓒ 2022 #VANLIFE</footer>
      </BrowserRouter>
    </div>
  )
}





export default App
