import './LandingApp.css'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Route, Routes, } from 'react-router-dom'
import LandingLayout from '../../components/landing/LandingLayout/LandingLayout'
import Home from './home/home'
import About from './about/about'
import Help from './help/help'
import Why from './why/why'

function LandingApp() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated } = useSelector((state) => state.auth )

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/app/dashboard')
    }

  }, [isAuthenticated, navigate])

  return (
    <>
     <Routes>
      {/* Ruta para el layout general de la landing */}
      <Route element={<LandingLayout />}>
        {/* Las rutas anidadas dentro del layout */}
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