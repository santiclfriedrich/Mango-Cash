import { Link } from 'react-router-dom'
import './login.css'
import React from 'react'

function login() {
  return (
    <div>

        <div class="login-container">
        <form class="login-form">
            <div class="form-logo">
                <img src="../../src/assets/Logo_MangoCash.svg" alt="logo" />
                <h1>Mango<span>Cash</span></h1>
            </div>
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Ingrese su correo" required />
            
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            
            <div class="options">
                <label class="remember-me">
                    <input type="checkbox" id="remember-me-check" />
                    <span>Recordarme</span>
                </label>
                <Link to={'/'} className='forgot-password'>¿Olvidaste la contraseña?</Link>
            </div>

            <button type="submit" class="submit-btn"><Link to={'/app/dashboard'}>Iniciar sesión</Link></button>

            <p class="register-link">¿No tienes una cuenta? <Link to={'/register'}>Regístrate</Link></p>
        </form>
    </div>

    </div>
  )
}

export default login