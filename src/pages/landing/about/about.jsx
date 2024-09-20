import { Link } from 'react-router-dom'
import React from 'react'
import './about.css'

function About() {
  return (
    <div>
      <section class="container-main">
        <div class="row">
          <div class="column-left">
            <div class="text-container">
              <h2>Mas que una app</h2>
              <h2>tu aliado financiero</h2>

              <p>Sabemos que cada mango cuenta. Por eso, te damos el control de tus finanzas de manera simple, transparente y siempre a tu lado para que vivas tranquilo.</p>
            </div>

          </div>

          <div class="column-right">
            <img class="hero-img-about" src="./src/assets/about/finanzas-personales.png" alt="finanzas-personales"/>
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
            <img class="about-img" src="./src/assets/about/thunder-icon.png" />
            <h3 className='h3-about'>Gestion eficiente</h3>
            <p className='p-v2-about'>Te ofrecemos analisis detallado y funciones intuitivas para una experiencia facil y precisa. Te ayudamos a tomar mejores decisiones financieras.</p>
          </div>
          <div className="container-right-about">
            <img class="about-img" src="./src/assets/about/book-icon.png" />
            <h3 className='h3-about'>Educación Financiera</h3>
            <p className='p-v2-about'>Tu educación nos importa. A medida que aprendes mas sobre el manejo de tu dinero, tendrás una mejor visión de tus finanzas y como optimizarlas. Nuestro blog te acompaña en cada paso del proceso.</p>
          </div>
        </div>
      </section>

      <section className='about-section2'>
        <div className="container-row-about">
          <div className="container-left-about">
            <img class="hero-img-about" src="./src/assets/about/vision.png" alt="" />
          </div>
          <div className="container-right-about justify-content-center">
            <h3 className='h3-about h3-enfasis'>Nuestra Vision</h3>
            <p className='p-v2-about'>Ser la plataforma lider en gestión financiera, reconocida por nuestra facilidad de uso, capacidad educativa y compromiso con el bienestar financiero de nuestros usuarios.</p>
          </div>
        </div>
        <div className="container-row-about">
          <div className="container-left-about justify-content-center">
            <h3 className='h3-about h3-enfasis'>Nuestra Mision</h3>
            <p className='p-v2-about'>Empoderar a las personas para que tomen el control de sus finanzas mediante una plataforma accesible y sencilla que promueva la educación financiera y el manejo responsable del dinero.</p>
          </div>
          <div className="container-right-about">
            <img class="hero-img-about" src="./src/assets/about/mision.png" alt="" />
          </div>
        </div>
      </section>
      <section className='about-section3'>
        <div className="container-row-about background-gris">
          <h3 className='h3-about h3-enfasis'>Nuestros Valores</h3>
          <div className="container-row-about marginCards row-gap-30px">
            <div className='about-card'>
              <img class="about-img" src="./src/assets/about/flag.png" />
              <h3 className='h3-about'>Innovacion</h3>
              <p className='p-v2-about'>Estamos siempre a la vanguardia para ofrecerte herramientas modernas y soluciones.</p>
            </div>
            <div className='about-card'>
              <img class="about-img" src="./src/assets/about/transparencia.png" />
              <h3 className='h3-about'>Transparencia</h3>
              <p className='p-v2-about'>Creemos en la importancia de ofrecer información clara y honesta para que puedas tomar mejores decisiones</p>
            </div>
            <div className='about-card'>
              <img class="about-img" src="./src/assets/about/accessibility.png" />
              <h3 className='h3-about'>Accesibilidad</h3>
              <p className='p-v2-about'>Nuestra app está diseñada para que todos, sin importar su edad o conocimiento, puedan usarla</p>
            </div>
            <div className='about-card'>
              <img class="about-img" src="./src/assets/about/graduation.png" />
              <h3 className='h3-about'>Educacion</h3>
              <p className='p-v2-about'>Queremos que aprendas a gestionar mejor tu dinero cada dia</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  );
}

export default About;