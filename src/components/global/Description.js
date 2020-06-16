import React from 'react'

import CheckIcon from './CheckIcon'

export default function Title({ classes, color, withIcon, text }) {

  const textColor = color === 'white' ? { color: '#fff'} : { color: '#44337a'}

  return (
    <p className={`text-xl font-serif ${classes}`} style={textColor}>
      {withIcon && <CheckIcon />}
      {text}
    </p>
  )
}