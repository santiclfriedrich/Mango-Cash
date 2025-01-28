import './SideNav.css'
import React, { useEffect } from 'react'
import defaultUserImage from '../../../assets/profile_photos/Santiago_Friedrich.jpeg'
import logoname from '../../../assets/logo-nombre.png'
import { Link, useNavigate} from 'react-router-dom'


function SideNav() {

  return (
    <>
    <div className="sidebar">

        <div className="logo_content">
            <div className="logo">
                <img className='logo-sidebar' src={logoname} alt="logo" />
            </div>
            <i className='bx bx-menu' id="btn"></i>
        </div>

        <ul className="nav_list">
            <li>
                <Link to={"/app/dashboard"}>
                    <i className='bx bx-grid-alt'></i>
                    <span className="links_name">Dashboard</span>
                </Link>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <Link to={"/app/profile"}>
                    <i className='bx bx-user'></i>
                    <span className="links_name">Perfil</span>
                </Link>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <Link to={"/app/transactions"}>
                    <i className='bx bx-transfer'></i>
                    <span className="links_name">Transacciones</span>
                </Link>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-receipt'></i>
                    <span className="links_name">Facturas</span>
                </a>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-crosshair'></i>
                    <span className="links_name">Objetivos</span>
                </a>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i className='bx bx-book'></i>
                    <span className="links_name">Educación</span>
                </a>
                 {/* <span className="tooltip">Dashboard</span>  */}
            </li>
        </ul>
        <div className="profile_content">
            <div className="profile">
                <div className="profile_details">
                    <img src={defaultUserImage} alt="user_photo" />
                    <div className="name_content">
                        <div className="name">{user ? `${user.nombre} ${user.apellido}` : 'Usuario'}</div>
                    </div>
                </div>
                <i className='bx bx-log-out' id="log_out" onClick={handleLogout}></i>
            </div>
        </div>

    </div>

    

    </>
  )
}

export default SideNav