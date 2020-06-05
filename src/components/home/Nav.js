import React from 'react'
import NavLink from './NavLink'

function Nav() {
  const NAVS = ['Home', 'Nosotros', 'Somos los mejores', 'Testimonios', 'Contactenos']

  return (
    <div className="h-full flex flex-row-reverse space-x-8 space-x-reverse items-center">
      {NAVS.reverse().map(text => (
        <NavLink text={text}/>
      ))}
    </div>
  )
}

export default Nav