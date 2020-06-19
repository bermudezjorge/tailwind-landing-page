import React from 'react'

import Nav from './Nav'

import Logo from '../../assets/img/logo.png'

export default function Header() {
  return (
    <div className="flex w-5/6 m-auto p-1 pt-5 md:p-10">
      <div className="w-3/6 md:w-1/6">
        <img className="mr-auto" src={Logo} alt="Logo"/>
      </div>
      <div className="w-5/6 relative z-10">
        <Nav />
      </div>
    </div>
  )
}