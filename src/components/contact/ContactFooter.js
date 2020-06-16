import React from 'react'

import Button from '../global/Button'

export default function ContactFooter() {
  return (
    <div className="w-5/6 m-auto p-10 flex justify-between">
      <div className="flex flex-col">
        <p className="font-serif text-white">O puedes escribirnos directamente al</p>        

        <div className="flex items-center">
          <p className="font-serif text-white font-black text-2xl mr-3">945 328 727</p>
          <Button styled={{marginTop: '0px'}}>
            <a href="https://bit.ly/2U9MkGX" target="_blank" rel="noopener noreferrer">CLICK AQUÍ</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-serif text-white">Visita nuestras redes sociales</p>
        <div className="flex justify-center">
          <p>f</p>
          <p>i</p>
        </div>
      </div>
    </div>
  )
}