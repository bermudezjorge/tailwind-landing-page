import React from 'react'

export default function AUBox({ boxData }) {

  const { icon, title, description } = boxData

  const AUBOXstyle = {
    borderRadius: '4rem',
    boxShadow: 'rgba(0, 0, 0, 0.1) -3px 6px 25px -5px, rgba(0, 0, 0, 0.04) -1px 15px 10px -5px'
  }

  const AUBOXtextColor = {
    color: '#790acd'
  }

  return (
    <div className="w-full h-64 bg-white flex flex-col items-center py-10 hover:shadow-lg" style={AUBOXstyle}>
      <img className="w-20" src={icon} alt="icono descriptivo sobre nosotros"/>

      <h1 className="mt-3 text-xl font-sans font-black" style={AUBOXtextColor}>{title}</h1>
      <p className="w-56 text-center font-serif" style={AUBOXtextColor}>{description}</p>
    </div>
  )
}