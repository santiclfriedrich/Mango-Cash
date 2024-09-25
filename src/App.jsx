import './App.css'
import { Route, Routes } from 'react-router-dom';
import LandingApp from './pages/landing/LandingApp';
import MainApp from './pages/app/MainApp'
import Login from './pages/landing/login/login';
import Register from './pages/landing/register/register';


function App() {
  

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
