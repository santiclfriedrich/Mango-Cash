import './register.css'
import React from 'react'
import { Link } from 'react-router-dom'

function register() {
  return (
    <div>

        <div class="register-container">
        <form class="register-form">
            <div class="form-logo">
                <img src="../../src/assets/Logo_MangoCash.svg" alt="logo" />
                <h1>Mango<span>Cash</span></h1>
            </div>

            <label for="name">Nombre Completo</label>
            <input type="text" id="name" name="name" placeholder="Ingrese su nombre completo" required />

            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Ingrese su correo" required />
            
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />

            <label for="confirm-password">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme su contraseña" required />

            <div class="options">
                <label class="subscribe-newsletter">
                    <input type="checkbox" id="subscribe-newsletter" />
                    <span>Acepto los términos y políticas de privacidad</span>
                </label>
            </div>

            <button type="submit" class="submit-btn">Registrarse</button>

            <p class="login-link">¿Ya tienes una cuenta? <Link to={'/login'} className='link'>Inicia sesión</Link></p>
        </form>
    </div>

    </div>
  )
}

export default register