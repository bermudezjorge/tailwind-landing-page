import React from 'react'

import Title from '../global/Title'
import Button from '../global/Button'

import HeroSectionImage from '../../assets/img/franja_familia.png'
import FamilyImg from '../../assets/img/familia.png'

export default function HeroSection() {

  const HeroSectionStyle = {
    backgroundImage: `url(${HeroSectionImage})`,
  }

  return (
    <div className="w-full mt-12 flex bg-cover bg-no-repeat" style={HeroSectionStyle}>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <Title classes="w-3/4 font-sans text-4xl text-center leading-10" color="white" text="DISFRUTA de pasar tiempo con tu FAMILIA, que de la limpieza nos encargamos nosotros."/>
        <Button>EMPEZAR AQUÍ</Button>
      </div>
      <div className="w-1/2">
        <img src={FamilyImg} alt="Familia"/>
      </div>
    </div>
  )
}