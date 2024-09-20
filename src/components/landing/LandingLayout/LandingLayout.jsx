import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    <>
    
    <Navbar />
    <div> 
      
      <Outlet />
      
    </div>
    { <Footer /> }
    
    </>
  )
}

export default LandingLayout