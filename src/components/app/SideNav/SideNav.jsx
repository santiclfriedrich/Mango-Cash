import './SideNav.css'
import React from 'react'
import userImage from '../../../assets/profile_photos/Santiago_Friedrich.jpeg'
import { Link } from 'react-router-dom'
import Dashboard from '../../../pages/app/dashboard/dashboard'

function SideNav() {
  return (
    <>
    <div class="sidebar">

        <div class="logo_content">
            <div class="logo">
                <i class='bx bxl-c-plus-plus'></i>
                <div class="logo_name">Mango Cash</div>
            </div>
            <i class='bx bx-menu' id="btn"></i>
        </div>

        <ul class="nav_list">
            <li>
                <Link to={"/app/dashboard"}>
                    <i class='bx bx-grid-alt' ></i>
                    <span class="links_name">Dashboard</span>
                </Link>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <Link to={"/app/profile"}>
                    <i class='bx bx-user'></i>
                    <span class="links_name">Perfil</span>
                </Link>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-wallet'></i>
                    <span class="links_name">Balances</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-transfer'></i>
                    <span class="links_name">Transacciones</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-receipt'></i>
                    <span class="links_name">Facturas</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-money'></i>
                    <span class="links_name">Gastos</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-crosshair'></i>
                    <span class="links_name">Objetivos</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
             <li>
                <a href="../../../pages/Beneficios-page/Beneficios.html">
                    <i class='bx bx-medal'></i>
                    <span class="links_name">Beneficios</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Configuracion</span>
                </a>
                 {/* <span class="tooltip">Dashboard</span>  */}
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <img src={userImage} alt="user_photo" />
                    <div class="name_content">
                        <div class="name">Santiago Friedrich</div>
                    </div>
                </div>
                <i class='bx bx-log-out' id="log_out"></i>
            </div>
        </div>

    </div>

    

    </>
  )
}

export default SideNav