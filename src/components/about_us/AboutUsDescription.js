import React from 'react'

import Title from '../global/Title'
import Description from '../global/Description'

export default function AboutUsDescription() {
  return (
    <div className="w-full h-full flex flex-col text-left mt-32 ml-32 ">
      <Title classes="font-sans text-4xl" color="purple" text="Sobre NOSOTROS"/>
      <Description classes="mt-1 w-2/3" color="purple" text="Somos una empresa peruana y ofrecemos servicios especializados de limpieza y desinfección en todo Lima, tanto para ambientes del hogar y corporativos. Aseguramos servicios de la mayor calidad y 100% garantizados."/>
      <Description classes="mt-5 w-2/3" color="purple" withIcon={true} text="Aseguramos servicios de la mayor calidad y 100% garantizados."/>
    </div>
  )
}