import './LandingApp.css'
import React, {useEffect} from 'react'
import { Route, Routes, } from 'react-router-dom'
import LandingLayout from '../../components/landing/LandingLayout/LandingLayout'
import Home from './home/home'
import About from './about/about'
import Help from './help/help'
import Why from './why/why'

function LandingApp() {

  return (
    <>
     <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/why_choose_mangocash" element={<Why />} />
       
      </Route>
    </Routes>
    
    </>
  )
}

export default LandingApp