import React from 'react'

import Header from './Header'
import HomeSection from './HomeSection'

import BannerBackground from '../../assets/img/fondo_banner.png'

export default function Home() {

  const homeStyle = {
    backgroundImage: `url(${BannerBackground})`,
    height: '903px'
  }

  return (
    <div className="w-full bg-cover bg-no-repeat" style={homeStyle}>
      <Header />
      <HomeSection />
    </div>
  )
}