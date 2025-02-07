import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import About from './Routes/About'
import Home from './Routes/Home'
import Vans, {loader as vansLoader} from './Routes/Vans'
import VanDetail, {loader as vanDetailLoader} from './Routes/VanDetail'
import Layout from "./components/Layout"
import Dashboard from './Routes/Host/Dashboard'
import Income from './Routes/Host/Income'
import Reviews from './Routes/Host/Reviews'
import HostVans, {loader as hostVansLoader} from './Routes/Host/HostVans/HostVans'
import HostLayout from './components/HostLayout'
import HostVansLayout, {loader as hostVansLayoutLoader} from './components/HostVansLayout'
import HostVansDetail from './Routes/Host/HostVans/HostVansDetail'
import HostVansPricing from './Routes/Host/HostVans/HostVansPricing'
import HostVansPhotos from './Routes/Host/HostVans/HostVansPhotos'
import PageNotFound from './Routes/PageNotFound'
import Error from './components/Error'
import Login from './components/Login'
import AuthLayout from './components/AuthLayout'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router'
import "./server"

function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="vans" element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
      <Route path="vans/:id" element={<VanDetail/>} loader={vanDetailLoader}/>
      <Route path="login" element={<Login/>} />

      <Route element={<AuthLayout/>}>
        <Route path="host" element={<HostLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path="reviews" element={<Reviews/>}/>
          <Route path="vans" element={<HostVans/>} loader={hostVansLoader} />
          <Route path='vans/:id' element={<HostVansLayout/>} loader={hostVansLayoutLoader}>
            <Route index element={<HostVansDetail/>}/>
            <Route path="pricing" element={<HostVansPricing/>}/>
            <Route path="photos" element={<HostVansPhotos/>}/>
          </Route>
        </Route>
      </Route>
      

      <Route path='*' element={<PageNotFound/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={myRouter}/>
  )
}

export default App
