import React from 'react'

import Title from '../global/Title'
import Description from '../global/Description'

import CouchImg from '../../assets/img/mueble.png'

export default function OurServices() {

  const SERVICES = [
    'Limpieza y Desinfección COVID del hogar y oficinas.',
    'Limpieza y Desinfección COVID de coches.',
    'Lavado de muebles',
    'Lavado de alfombras',
    'Lavado de colchones'
  ]

  return (
    <div className="w-5/6 flex m-auto pt-5 md:p-10">
      <div className="w-1/2 hidden md:block">
        <img src={CouchImg} alt="Sofa"/>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-12 mt-40 md:mt-0">
        <Title color="purple" text="Nuestros SERVICIOS"/>
        <Description classes="mb-6" text="Contamos con los mejores profesionales, garantizando a nuestros clientes y a todos los usuarios ambientes de trabajo limpios y agradables."/>

        {SERVICES.map((text, index) => (
          <Description key={index} classes="mt-5" color="purple" withIcon={true} text={text}/>
        ))}
      </div>
    </div>
  )
}