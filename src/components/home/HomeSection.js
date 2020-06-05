import React from 'react'

import Button from '../global/Button'
import HomeSectionImg from '../../assets/imgs/img_foto_banner.png'

function HomeSection() {
  return (
    <div className="flex w-5/6 m-auto p-10 mt-3">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-3xl font-sans text-white font-black">Una correcta LIMPIEZA y DESINFECCIÓN te ayuda a trabajar, descansar y disfrutar del día a día</h1>
        <h4 className="text-2xl text-white mt-3">Te ofrecemos servicios profesionales de primer nivel.</h4>

        <Button>EMPEZAR AQUÍ</Button>
      </div>

      <div className="w-1/2">
        <img className="-mt-24" src={HomeSectionImg} alt="Hombre con traje limpiando"/>
      </div>
    </div>
  )
}

export default HomeSection