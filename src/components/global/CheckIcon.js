import React from 'react'

export default function CheckIcon() {
  
  const CheckIconStyle = {
    width: '20px',
    height: '20px',
    padding: '0 5px',
    background: 'linear-gradient(48deg, rgba(121,10,205,1) 0%, rgba(150,36,150,1) 50%)'
  }
  
  return (
    <i className="rounded-full text-white mr-3" style={CheckIconStyle}>
      &#10004;
    </i>
  )
}