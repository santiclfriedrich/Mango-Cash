import './register.css'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    const FormularioRegistro = () => {
        const [formData, setFormData] = useState({
        "nombre": '',
        "apellido": '',
        "email": '',
        "password": '',
        "fechaNacimiento": '',
        "genero": ''
        });

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', formData);
      
        try {
          const response = await fetch('http://localhost:8080/api/v1/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
      
          // Muestra el toast dependiendo de la respuesta
          if (response.ok) {
            toast.success(data.message || 'Registro exitoso');
            // Refresca la página
            setTimeout(() => {
                window.location.href = 'http://localhost:5173/app/dashboard';
            }, 3000);
          } else {
            toast.error(data.error || 'Error al registrar el usuario');
          }
        } catch (error) {
          console.error('Error al enviar el formulario:', error);
          toast.error('Error al enviar el formulario');
        }
      };   

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

                <form  className='form-login' onSubmit={handleSubmit}>
                    <div className='container-row-register'>
                        <div>
                            <label className="form-label-register" htmlFor="nombre">Nombre</label>
                            <input className='form-input-login form-input-register' type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </div>
                        <div>
                            <label className="form-label-register" htmlFor="apellido">Apellido</label>
                            <input className='form-input-login form-input-register' type="text" name="apellido" value={formData.apellido} onChange={handleChange}/>
                        </div>

                    </div>

                    <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
                    <input className='form-input-login' type="email" name="email" value={formData.email} onChange={handleChange}/>

                    <label className="form-label-login" htmlFor="password">Contraseña</label>
                    <input className='form-input-login' type="password" name="password" value={formData.password} onChange={handleChange}/>

                    <div className='container-row-register'>
                        <div>
                            <label className="form-label-login" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                            <input className='form-input-login form-input-register' type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange}/>
                        </div>
                        <div>
                            <label className="form-label-login" htmlFor="genero">Género</label>
                            <select className='form-select-register' name="genero" value={formData.genero} onChange={handleChange}>
                                <option hidden value=""></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                                <option value="NB">No Binarie</option>
                                <option value="X">Otro</option>
                            </select>
                        </div>
                    </div>


                    <button className='form-button-registro' type="submit">Registrate</button>
                </form>
            </div>

            <ToastContainer 
                position="top-right" 
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover 
            />

        </div>
    )
};

export default FormularioRegistro