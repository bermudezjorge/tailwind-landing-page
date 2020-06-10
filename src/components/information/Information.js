import React from 'react'

import Title from '../global/Title'
import InformationDetailed from './InformationDetailed'

import TimeIcon from '../../assets/img/horario.png'
import CardIcon from '../../assets/img/abonalo.png'
import GuaranteeIcon from '../../assets/img/garantia.png'
import OnSaleIcon from '../../assets/img/descuentos.png'

export default function Information() {

  const IMFORMATION_DETAILED = [
    {
      icon: TimeIcon,
      title: 'Horario',
      description: 'Puedes reservar tu servicio de limpieza cuando prefieras. De Lunes a Sábado desde las 9am hasta las 6pm.'
    },
    {
      icon: CardIcon,
      title: 'Abónalo como gustes',
      description: 'Puedes pagar en efectivo o depositar a nuestra cuenta. Aceptamos todas las tarjetas.'
    },
    {
      icon: GuaranteeIcon,
      title: 'Garantía de satisfacción',
      description: 'El 90% valora nuestros servicios como excelentes.'
    },
    {
      icon: OnSaleIcon,
      title: 'Promociones',
      description: 'Promoción y descuento para nuestros clientes habituales.'
    },
  ]

  return (
    <div className="w-5/6 flex flex-col m-auto p-10">
      <div className="w-1/2 m-auto text-center">
        <Title color="purple" text="Somos la MEJOR OPCIÓN para tu HOGAR u OFICINA"/>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {IMFORMATION_DETAILED.map(info => (
          <InformationDetailed key={info.title} {...info} />
        ))}
      </div>
    </div>
  )
}