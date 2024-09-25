import './Navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    
    
    <nav class="navbar">
      <div class="navbar-left">
      <Link to={"/"} className='navbar-link'>
        <img class="navbar-logo" src="./src/assets/logo-nombre.png" alt="logo-mangocash" />
      </Link>
        
      </div>

      <div class="navbar-center">
        <Link to={"/about_us"} className='navbar-link'>Sobre nosotros</Link>
        <Link to={"/why_choose_mangocash"} className='navbar-link'>Porqué Elegirnos</Link>
        <Link to={"/help"} className='navbar-link'>Ayuda</Link>
      </div>

      <div class="navbar-right">
        <Link to={"/register"}><button class="button --signup">Registrarse</button></Link>
        <Link to={"/login"}><button class="button --signin">Ingresar</button></Link>
      </div>
    </nav>
    
    
  )
}

export default Navbar