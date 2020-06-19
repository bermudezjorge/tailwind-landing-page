import React from 'react'

export default function Title({ classes, color, text }) {

  const textColor = color === 'white' ? { color: '#fff'} : { color: '#44337a'}

  return (
    <h1 className={`text-3xl md:text-4xl font-sans font-semibold ${classes}`} style={textColor}>
      {text}
    </h1>
  )
}