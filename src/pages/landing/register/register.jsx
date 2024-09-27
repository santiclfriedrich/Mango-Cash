import './register.css'
import React from 'react'
import { Link } from 'react-router-dom'

function register() {
  return (
      <div className="login-container">
        <Link to={"/"} className="link-home">
            <img className="img-logo" src="./src/assets/logo-nombre.png" alt="logo con nombre mangocash" />
        </Link>

        <div className="img-container">
            <img className="img" src="./src/assets/login-register/formulario.png" alt="autentication-Img" />
        </div>

        <div className="form-container">
            <h2 className="h2-registro">Registrate</h2>

            <form  className='form-login' action="#" method="POST">
                <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
                <input className='form-input-login' type="email" />

                <div className="container-label-contraseña">    
                    <label className="form-label-login" htmlFor="password">Contraseña</label>
                    <a className='form-a-registro' href="#">¿Olvidaste la constraseña?</a>
                </div>
                <input className='form-input-login' type="password" />

                <button className='form-button-registro' type="submit">Ingresa</button>
            </form>
        </div>
    </div>
  )
}

export default register