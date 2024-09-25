import './why.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Why() {
  return (
    <div>
      <section class="container-main">
        <div class="row">
          <div class="column-left">
            <div class="text-container">
              <h2>Transformando</h2>
              <h2>tus Finanzas</h2>

              <p>Gestionar tus finanzas nunca fue tan simple</p>
            </div>
          </div>

          <div class="column-right">
            <img class="hero-img-about" src="./src/assets/why/calculator-43.png" alt=""/>
          </div>
        </div>
      </section>

      <section class="about-section1">
      <div class="why-title">
          <h2 class="h2-about">Un compañero en el que puedes confiar</h2>
          <p class="p-about">En Mangocash, te ayudamos a tener tus finanzas al día sin vueltas. Sabemos que llevar las cuentas puede ser un bajón, pero con nosotros es tan fácil como pelar un mango. Acá lo que importa es que vos sepas en qué se te va la plata, y nosotros te damos una mano para que llegues a fin de mes sin dramas.</p>
      </div>

      <div className="container-row-about">
        <div className="container-left-about">
          <img class="about-img" src="./src/assets/why/thunder-icon.png" />
          <h3 className='h3-about'>Gestion eficiente</h3>
          <p className='p-v2-about'>Te ofrecemos analisis detallado y funciones intuitivas para una experiencia facil y precisa. Te ayudamos a tomar mejores decisiones financieras.</p>
        </div>
        <div className="container-right-about">
          <img class="about-img" src="./src/assets/why/book-icon.png" />
          <h3 className='h3-about'>Educación Financiera</h3>
          <p className='p-v2-about'>Tu educación nos importa. A medida que aprendes mas sobre el manejo de tu dinero, tendrás una mejor visión de tus finanzas y como optimizarlas. Nuestro blog te acompaña en cada paso del proceso.</p>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Why;