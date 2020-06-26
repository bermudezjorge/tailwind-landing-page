import React from 'react'

export default function Arrows({ direction, disabled, changeSlide }) {

  const directionClass = direction === '>' ? 'transform rotate-180' : null

  const verticalPosition = { top: '12%'}
  let hPos = '12%'

  document.body.clientWidth >= 768 ? hPos = '12%' : hPos = '3%'
  const horizontalPosition = direction === '>' ? { right: hPos } : { left: hPos }
  const position = {...verticalPosition, ...horizontalPosition}

  const buttonActive = disabled ? 'cursor-default' : 'cursor-pointer'
  const lineColor = disabled ? 'bg-blue-300' : 'bg-blue-500'
  
  return (
    <button className={`w-12 h-24 absolute z-10 ${buttonActive} ${directionClass}`} style={position} onClick={() => changeSlide(direction)} disabled={disabled}>
      <div className={`w-12 h-1 absolute ${lineColor} bg-opacity-25 transform -rotate-45`} style={{ top: '31%'}}></div>
      <div className={`w-12 h-1 absolute ${lineColor} bg-opacity-25 transform rotate-45`} style={{ bottom: '31%'}}></div>
    </button>
  )
}