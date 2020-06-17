import React from 'react'
import NavLink from './NavLink'

import fbIcon from '../../assets/img/facebook.png'
import igIcon from '../../assets/img/ig_icon.png'

export default function Nav() {
  const NAVS = [
    { title: 'Home', href: '#home'},
    { title: 'Nosotros', href: '#nosotros'},
    { title: 'Somos los mejores', href: '#somos-los-mejores'},
    { title: 'Testimonios', href: '#testimonios'},
    { title: 'Contactenos', href: '#contactenos'}
  ]

  return (
    <div className="h-full flex flex-row-reverse space-x-8 space-x-reverse items-center">
      <div className="flex space-x-2">
        <a href="https://www.facebook.com/CleansedHome" target="_blank" rel="noopener noreferrer">
          <img className="transform hover:scale-90" src={fbIcon} alt="icon"/>
        </a>
        <a href="https://www.instagram.com/cleansedhome/" target="_blank" rel="noopener noreferrer">
          <img className="transform hover:scale-90" src={igIcon} alt="icon"/>
        </a>
      </div>
      {NAVS.reverse().map((navData, index) => (
        <NavLink key={index} {...navData}/>
      ))}
    </div>
  )
}