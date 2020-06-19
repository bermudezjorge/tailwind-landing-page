 import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'

import fbIcon from '../../assets/img/facebook.png'
import igIcon from '../../assets/img/ig_icon.png'

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  const NAVS = [
    { title: 'Home', href: '#home'},
    { title: 'Nosotros', href: '#nosotros'},
    { title: 'Somos los mejores', href: '#somos-los-mejores'},
    { title: 'Testimonios', href: '#testimonios'},
    { title: 'Contactenos', href: '#contactenos'}
  ]

  if(showMenu && document.body.clientWidth < 768) {
    document.body.style.width = '100wh'
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.height = '100%'
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    document.body.clientWidth >= 768 ? setShowMenu(true) : setShowMenu(false)
  }, [])

  return (
    <>
      {
        showMenu ? (
          <div className="w-screen h-screen md:w-full md:h-full flex flex-col-reverse justify-center md:justify-start md:flex-row-reverse space-y-10 md:space-y-0 md:space-x-8 space-x-reverse items-center absolute md:sticky bg-white md:bg-transparent transition duration-500 ease-in-out" style={{ top: '-20%', right: '-18.5%' }}>
            <h1
              className="block md:hidden absolute text-black text-6xl cursor-pointer"
              style={{ top: '0%', right: '5%' }}
              onClick={() => setShowMenu(false)}
            >
              &times;
            </h1>
            <div className="flex space-x-2 mt-10 md:mt-0 md:ml-8">
              <a href="https://www.facebook.com/CleansedHome" target="_blank" rel="noopener noreferrer">
                <img className="transform hover:scale-90" src={fbIcon} alt="icon"/>
              </a>
              <a href="https://www.instagram.com/cleansedhome/" target="_blank" rel="noopener noreferrer">
                <img className="transform hover:scale-90" src={igIcon} alt="icon"/>
              </a>
            </div>
            {NAVS.reverse().map((navData, index) => (
              <NavLink key={index} {...navData} hideMenu={setShowMenu}/>
            ))}
          </div>
        ) : (
          <h1
            className="flex absolute md:hidden cursor-pointer text-xl text-white font-black"
            style={{ top: '30%', right: '5%' }}
            onClick={() => setShowMenu(true)}
          >
            <div className="flex flex-col space-y-2">
              <span className="w-12 h-1 bg-white"></span>
              <span className="w-12 h-1 bg-white"></span>
              <span className="w-12 h-1 bg-white"></span>
            </div>
          </h1>
        )
      }
    </>
  )
}