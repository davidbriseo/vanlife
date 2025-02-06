import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import About from './Routes/About'
import Home from './Routes/Home'
import Vans from './Routes/Vans'
import VanDetail from './Routes/VanDetail'
import Layout from "./components/Layout"
import Dashboard from './Routes/Host/Dashboard'
import Income from './Routes/Host/Income'
import Reviews from './Routes/Host/Reviews'
import HostVans from './Routes/Host/HostVans/HostVans'
import HostLayout from './components/HostLayout'
import HostVansLayout from './components/HostVansLayout'
import HostVansDetail from './Routes/Host/HostVans/HostVansDetail'
import HostVansPricing from './Routes/Host/HostVans/HostVansPricing'
import HostVansPhotos from './Routes/Host/HostVans/HostVansPhotos'
import PageNotFound from './Routes/PageNotFound'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import "./server"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="vans" element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetail/>}/>

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVansLayout/>}>
              <Route index element={<HostVansDetail/>}/>
              <Route path="pricing" element={<HostVansPricing/>}/>
              <Route path="photos" element={<HostVansPhotos/>}/>
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
      
  </BrowserRouter>
  )
}





export default App
