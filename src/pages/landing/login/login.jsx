import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actualizarLoginFormulario, loginUsuario } from "../../../redux/loginSlice";
import { ToastContainer } from "react-toastify";


function LoginForm() {

  const dispatch = useDispatch();
  const { loginData, status } = useSelector((state) => state.auth );

  const handleChange = (e) => {
    const {name, value} = e.target;
    dispatch(actualizarLoginFormulario({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUsuario(loginData))
  }

  return (
    <div className="login-container">
      <Link to={"/"} className="link-home">
        <img className="img-logo" src="./src/assets/logo-nombre.png" alt="logo con nombre mangocash" />
      </Link>

      <div className="form-container">
        <h2 className="h2-login">Iniciar Sesión</h2>

        <form  className='form-login' onSubmit={handleSubmit}>
            <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
            <input className='form-input-login' type="email" name="email" value={loginData.email}  onChange={handleChange} />

            <div className="container-label-contraseña">    
                <label className="form-label-login" htmlFor="password">Contraseña</label>
                <a className='form-a-login' href="#">¿Olvidaste la constraseña?</a>
            </div>
            <input className='form-input-login' type="password" name="password" value={loginData.password || ''} onChange={handleChange} />

            <button className='form-button' type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>

        </form>

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

export default LoginForm;
