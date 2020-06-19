import React from 'react'

import AUBox from './AUBox'

import PersonIcon from '../../assets/img/icon_personal.png'
import HappyCustomerIcon from '../../assets/img/clientes_felices.png'
import ImpeccableServiceIcon from '../../assets/img/servicio_impecable.png'

export default function AboutUsBoxes() {

  const ABOUTBOXES = [
    {
      icon: PersonIcon,
      title: 'Personal Confiable',
      description: 'Cuidadosamente seleccionado y capaces'
    },
    {
      icon: HappyCustomerIcon,
      title: 'Clientes Felices',
      description: 'Te aseguramos un excelente servicio'
    },
    {
      icon: ImpeccableServiceIcon,
      title: 'Servicio Impecable',
      description: 'Cuidamos hasta el indediasdas dsaasdad de dasda de los procesos'
    }
  ]

  return (
    <div className="w-full flex flex-col md:flex-row space-x-8 mt-12 md:mt-0">
      <div className="w-4/5 md:w-1/2 flex m-auto flex-col space-y-8">
        <AUBox boxData={ABOUTBOXES[0]}/>
        <AUBox boxData={ABOUTBOXES[1]}/>
      </div>
      <div className="w-4/5 md:w-1/2 flex items-center mt-8 md:mt-0">
        <AUBox boxData={ABOUTBOXES[2]}/>
      </div>
    </div>
  )
}