import React from 'react'

import Button from '../global/Button'

import wspIcon from '../../assets/img/wsp.png'
import fbIcon from '../../assets/img/facebook.png'
import igIcon from '../../assets/img/ig_icon.png'

export default function ContactFooter() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between md:w-5/6 m-auto p-5 md:p-10 mt-5 md:mt-0">
      <div className="flex flex-col">
        <p className="font-serif text-center md:text-left text-white mb-3">O puedes escribirnos directamente al</p>        

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img className="mr-3" style={{ width: '25px', height: '25px'}} src={wspIcon} alt="icon"/>
            <p className="font-serif text-white font-black text-2xl mr-3">945 328 727</p>
          </div>
          <Button styled={{marginTop: '0px'}}>
            <a href="https://bit.ly/2U9MkGX" target="_blank" rel="noopener noreferrer">CLICK AQUÍ</a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-serif text-center md:text-left text-white mb-2 mt-12 :mt-0">Visita nuestras redes sociales</p>
        <div className="flex justify-center space-x-5">
          <a href="https://www.facebook.com/CleansedHome" target="_blank" rel="noopener noreferrer">
            <img className="transform hover:scale-90" src={fbIcon} alt="icon"/>
          </a>
          <a href="https://www.instagram.com/cleansedhome/" target="_blank" rel="noopener noreferrer">
            <img className="transform hover:scale-90" src={igIcon} alt="icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}