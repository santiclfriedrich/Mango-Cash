import { Link } from "react-router-dom";
import "./login.css";
import React from "react";

function login() {
  return (
    <div className="login-container">
      <Link to={"/"} className="link-home">
        <img className="img-logo" src="./src/assets/logo-nombre.png" alt="logo con nombre mangocash" />
      </Link>

      <div className="form-container">
        <h2 className="h2-login">Iniciar Sesión</h2>

        <form  className='form-login' action="/app/dashoard" method="GET">
            <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
            <input className='form-input-login' type="email" />

            <div className="container-label-contraseña">    
                <label className="form-label-login" htmlFor="password">Contraseña</label>
                <a className='form-a-login' href="#">¿Olvidaste la constraseña?</a>
            </div>
            <input className='form-input-login' type="password" />

            <button className='form-button' type="submit">Ingresa</button>
        </form>
      </div>

      <div className="img-container">
        <img
          className="img"
          src="./src/assets/login-register/autenticacion.png"
          alt="autentication-Img"
        />
      </div>
    </div>
  );
}

export default login;
