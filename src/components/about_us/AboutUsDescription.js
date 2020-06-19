import React from 'react'

import Title from '../global/Title'
import Description from '../global/Description'

export default function AboutUsDescription() {
  return (
    <div className="w-full h-full flex flex-col text-left md:mt-32 md:ml-32 ">
      <Title classes="font-sans text-4xl" color="purple" text="Sobre NOSOTROS"/>
      <Description classes="mt-1 md:w-2/3" color="purple" text="Somos una empresa peruana y ofrecemos servicios especializados de limpieza y desinfección en todo Lima, tanto para ambientes del hogar y corporativos. Aseguramos servicios de la mayor calidad y 100% garantizados."/>
      <Description classes="mt-5 md:w-2/3" color="purple" withIcon={true} text="Aseguramos servicios de la mayor calidad y 100% garantizados."/>
    </div>
  )
}