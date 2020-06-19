import React from 'react'

export default function InformationDetailed({ icon, title, description }) {

  const customColor = {
    color: '#790acd'
  }

  return (
    <div className="w-full flex">
      <img style={{ width: '100px', height: '100px'}} src={icon} alt="icono"/>
      <div className="flex flex-col justify-center ml-3">
        <h1 className="text-xl md:text-2xl font-semibold" style={customColor}>{title}</h1>
        <p className="w-4/5 text-md md:text-lg font-serif" style={customColor}>{description}</p>
      </div>
    </div>
  )
}