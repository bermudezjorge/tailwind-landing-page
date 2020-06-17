import React from 'react'

export default function InformationDetailed({ icon, title, description }) {

  const customColor = {
    color: '#790acd'
  }

  return (
    <div className="w-full flex">
      <img className="w-32" src={icon} alt="icono"/>
      <div className="flex flex-col justify-center ml-3">
        <h1 className="text-2xl font-semibold" style={customColor}>{title}</h1>
        <p className="w-4/5 text-lg font-serif" style={customColor}>{description}</p>
      </div>
    </div>
  )
}