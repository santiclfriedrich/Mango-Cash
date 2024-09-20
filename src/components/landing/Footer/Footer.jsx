import './Footer.css'
import { Link } from 'react-router-dom'
import React from 'react'
import logoConNombre from '../../../assets/logo-nombre.png'

function Footer() { 
  return (
    
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-logo">
          <img src={ logoConNombre } alt="Logo" />
        </div>
        
        <div class="footer-columns">
          <div class="footer-column">
            <h3>Nuestra Empresa</h3>
            <ul>
              <li><Link to={'/about'}>Sobre Nosotros</Link></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Recursos</h3>
            <ul>
              <li><a href="#">Tutoriales</a></li>

            </ul>
          </div>

          <div class="footer-column">
            <h3>Ayuda</h3>
            <ul>
              <li><a href="#">Guía de uso</a></li>
              <li><a href="#">Nuestros Términos</a></li>
              <li><a href="#">Privacidad y Política</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Contactanos</h3>
            <ul>
              <li><a href="#">MangoCash@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer