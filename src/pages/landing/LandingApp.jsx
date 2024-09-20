import './LandingApp.css'
import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import LandingLayout from '../../components/landing/LandingLayout/LandingLayout'
import Home from './home/home'
import About from './about/about'

function LandingApp() {
  return (
    <>
     <Routes>
      {/* Ruta para el layout general de la landing */}
      <Route element={<LandingLayout />}>
        {/* Las rutas anidadas dentro del layout */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Route>
    </Routes>
    
    </>
  )
}

export default LandingApp