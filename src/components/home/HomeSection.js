import React from 'react'

import Title from '../global/Title'
import Description from '../global/Description'
import Button from '../global/Button'
import HomeSectionImg from '../../assets/img/img_foto_banner.png'

export default function HomeSection() {
  return (
    <div className="flex flex-col md:flex-row w-5/6 m-auto p-1 md:p-10 mt-10 md:mt-3">
      <div className="w-full md:w-1/2 flex flex-col">
        <Title color="white" text="Una correcta LIMPIEZA y DESINFECCIÓN te ayuda a trabajar, descansar y disfrutar del día a día" />
        <Description classes="mt-3" color="white" text="Te ofrecemos servicios profesionales de primer nivel"/>

        <Button>EMPEZAR AQUÍ</Button>
      </div>

      <div className="w-1/2 hidden md:block">
        <img className="-mt-24" src={HomeSectionImg} alt="Hombre con traje limpiando"/>
      </div>
    </div>
  )
}