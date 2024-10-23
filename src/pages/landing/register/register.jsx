import './register.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { actualizarFormulario, registrarUsuario, resetRegistroState } from '../../../redux/registroSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    const FormularioRegistro = () => {
       
        const dispatch = useDispatch();
        const navigate = useNavigate()
        const { formData, status, isRegistered } = useSelector((state) => state.registro )

        const handleChange = (e) => {
            const {name, value} = e.target
            dispatch(actualizarFormulario({name, value }))
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(registrarUsuario(formData))
        }

        useEffect(() => {
            if (status === 'succeeded' || status === 'failed') {
                dispatch(resetRegistroState()); // Asegúrate de que reseteamos el estado
            }
        }, [status, dispatch]);

        useEffect(() => {
            console.log('Estado del registro:', { formData, status, isRegistered }); // Agregado para depuración
        }, [formData, status, isRegistered]);

        useEffect(() => {
            dispatch(resetRegistroState())

        }, [dispatch])

        useEffect(() => {
            console.log(status);
            if(isRegistered){
                navigate('/login')
            }
            dispatch(resetRegistroState());
        }, [isRegistered, navigate] )


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
                            <input className='form-input-login form-input-register' type="text" name="nombre" value={formData.nombre || ''} onChange={handleChange}/>
                        </div>
                        <div>
                            <label className="form-label-register" htmlFor="apellido">Apellido</label>
                            <input className='form-input-login form-input-register' type="text" name="apellido" value={formData.apellido || ''} onChange={handleChange}/>
                        </div>

                    </div>

                    <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
                    <input className='form-input-login' type="email" name="email" value={formData.email || ''} onChange={handleChange}/>

                    <label className="form-label-login" htmlFor="password">Contraseña</label>
                    <input className='form-input-login' type="password" name="password" value={formData.password || ''} onChange={handleChange}/>

                    <div className='container-row-register'>
                        <div>
                            <label className="form-label-login" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                            <input className='form-input-login form-input-register' type="date" name="fechaNacimiento" value={formData.fechaNacimiento || ''} onChange={handleChange}/>
                        </div>
                        <div>
                            <label className="form-label-login" htmlFor="genero">Género</label>
                            <select className='form-select-register' name="genero" value={formData.genero || ''} onChange={handleChange}>
                                <option hidden value=""></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                                <option value="NB">No Binarie</option>
                                <option value="X">Otro</option>
                            </select>
                        </div>
                    </div>


                    <button className='form-button-registro' type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Registrando...' : 'Registrate'}
                    </button>
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