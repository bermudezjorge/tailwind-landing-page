import React from 'react'

import Nav from './Nav'

import Logo from '../../assets/imgs/logo.png'

function Header() {
  return (
    <div className="flex w-5/6 m-auto p-10">
      <div className="w-1/6">
        <img className="mr-auto" src={Logo} alt="Logo"/>
      </div>
      <div className="w-5/6">
        <Nav />
      </div>
    </div>
  )
}

export default Header