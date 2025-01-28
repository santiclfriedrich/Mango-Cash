import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

        <section class="container-main">
          <div class="row">

            <div class="column-left">

            <div class="text-container">
            <h2>Tu Aliado Financiero,</h2>
            <h2>Siempre A Mano</h2>
          
            <p>Gestionar tus finanzas nunca fue tan simple</p>

          </div>

          <div class="button-container">
            <Link to={"/login"}>
            <button class="button --comienza">
              Comienza         
            </button>
            </Link>
            <button class="button right-button">Mira cómo funciona</button>
          </div>
          

        </div>

        <div class="column-right">
            <div class="container-image">
              <img src="./src/assets/landing-images/Dashboard.png" alt="dashboard-img" />
            </div>
        </div>

      </div>
    </section>

    <section class="container-why">


      <div class="why-title">
          <p>¿Por qué elegir MangoCash?</p>
          <h2>Diseñado especialmente para la gestión financiera</h2>
      </div>
      <div class="why-cards">
        <div class="card">
          <img src="./src/assets/landing-images/online-payment-1.png" alt="payment" />
          <h3>Seguimiento en tiempo real</h3>
          <p>Obtenga actualizaciones instantáneas de sus
              transacciones y balances para mantener el
              control de sus finanzas.
          </p>
        </div>
        <div class="card">
          <img src="./src/assets/landing-images/paypal-42.png" alt="multiple_accounts" />
          <h3>Gestione múltiples cuentas</h3>
          <p>Centralice y administre todas sus cuentas
            bancarias y tarjetas de crédito en un solo
            lugar de forma segura
          </p>
        </div>
        <div class="card">
          <img src="./src/assets/landing-images/finance-app-1-98.png" alt="analisis" />
          <h3>Análisis personalizado</h3>
          <p>Obtenga informes detallados y
            visualizaciones de sus hábitos de gasto y
            progreso hacia sus metas financieras.
          </p>
        </div>
      </div>

      <div class="why-gestion">
        <div class="why-row">

          <div class="why-left">
              <h2>Gestión Financiera Simple y Efectiva</h2>
              <p>Usar MangoCash es la manera más fácil de gestionar tus finanzas
              personales. Equipada con herramientas de análisis que facilitan el
              seguimiento de gastos, presupuestos y ahorros de forma
              automática.
            </p>
            <Link to={"/login"}>
              <button><a href="">Comenzar</a></button>
            </Link>
          </div>

          <div class="why-right">
            <img src="./src/assets/landing-images/personal-finance-45 (1).png" alt="" />
          </div>

        </div>
      </div>

    </section>

    </div>
  )
}

export default Home