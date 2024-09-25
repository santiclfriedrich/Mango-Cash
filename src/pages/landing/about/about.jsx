import { Link } from 'react-router-dom'
import React from 'react'
import './about.css'

const people = [
  {
    name: 'Juan Gabriel Mollo',
    role: 'Desarrollador Full Stack',
    imageUrl: './src/assets/profile_photos/Gabriel_Mollo.jpg',
    linkedin: 'https://www.linkedin.com/in/juangabrielmollo/'
  },
  {
    name: 'Santiago Friedrich',
    role: 'Desarrollador Full Stack',
    imageUrl: './src/assets/profile_photos/Santiago_Friedrich.jpeg',
    linkedin: 'https://www.linkedin.com/in/santiago-claros-friedrich/'
  },
  {
    name: 'Lucia Shiro',
    role: 'Diseñadora UX/UI',
    imageUrl: './src/assets/profile_photos/Lucia_shiro.jpg',
    linkedin: 'https://www.linkedin.com/in/lucia-schiro-23b56b236/'
  },
  {
    name: 'Valentina Romero',
    role: 'Tester QA',
    imageUrl: './src/assets/profile_photos/valen.png',
    linkedin: 'https://www.linkedin.com/in/valentinaromero2003/'
  },
]

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

      <section className='about-section4'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce al Equipo</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nuestro equipo de profesionales <br></br>enfocado en darte las mejores soluciones.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        <img 
                          src="./src/assets/profile_photos/linkedin.png"
                          alt="LinkedIn"
                          className="h-5 w-5 mt-2"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
    
  );
}

export default About;