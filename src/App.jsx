import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import LandingApp from './pages/landing/LandingApp';
import MainApp from './pages/app/MainApp'
import Login from './pages/landing/login/login';
import Register from './pages/landing/register/register';
import { verificarSesionUsuario } from './redux/loginSlice';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {

    dispatch(verificarSesionUsuario());

  }, [dispatch])
  

  return (
      <Routes>
        {/* Ruta para la Landing Page */}
        <Route path="/*" element={<LandingApp />} />
  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Ruta para la aplicación principal */}
        <Route path="/app/*" element={<MainApp />} />
      </Routes>
  )
}

export default App
