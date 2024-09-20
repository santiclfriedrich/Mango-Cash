import './help.css'
import React from 'react'
import clocksand from '../../../assets/iconos-help/sand-clock.png'
import list from '../../../assets/iconos-help/list.png'
import users from '../../../assets/iconos-help/users.png'
import book from '../../../assets/iconos-help/book.png'
import linechart from '../../../assets/iconos-help/line-chart.png'
import offer from '../../../assets/iconos-help/offer.png'
import project from '../../../assets/iconos-help/up-finance.png'
import download from '../../../assets/iconos-help/download.png'


function Help() {
  return (
    <div className='help-page'>

        <div className='help-banner-container'>
            <div className='help-content'>
                <p className='support'>Support Center</p>
                <h1>Bienvenido al Centro de Soporte de Mango<span>Cash.</span></h1>
                <p className='help-wanted'>¿Puedo ayudarte?</p>
            </div>
        </div>

        <div className='help-options'>

            <h2>Tema de ayuda frecuente</h2>

            <div className='help-icons-container'>
                
                <div className='help-icon'>
                    <img src={clocksand} alt="clocksand" />
                    <p>Sobre MangoCash</p>
                </div>

                <div className='help-icon'>
                    <img src={list} alt="clocksand" />
                    <p>Guía para principiantes</p>
                </div>

                <div className='help-icon'>
                    <img src={users} alt="clocksand" />
                    <p>Apertura de cuenta</p>
                </div>

                <div className='help-icon'>
                    <img src={book} alt="clocksand" />
                    <p>Educación Financiera</p>
                </div>

                <div className='help-icon'>
                    <img src={linechart} alt="clocksand" />
                    <p>Herramientas Financieras</p>
                </div>

                <div className='help-icon'>
                    <img src={offer} alt="clocksand" />
                    <p>Promoción Especial</p>
                </div>

                <div className='help-icon'>
                    <img src={project} alt="clocksand" />
                    <p>Gestión de Presupuestos</p>
                </div>

                <div className='help-icon'>
                    <img src={download} alt="clocksand" />
                    <p>Descargar plataforma</p>
                </div>

            </div>
            
            <h3>¿Aún no has encontrado la respuesta a tu pregunta?</h3>

             <div className='help-button-contact'>
                <button>Contactanos</button>
            </div>

        </div>

    </div>
  )
}

export default Help