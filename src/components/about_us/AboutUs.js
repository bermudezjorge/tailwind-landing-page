import React from 'react'

import AboutUsBoxes from './AboutUsBoxes'
import AboutUsDescription from './AboutUsDescription'

export default function AboutUs() {
  return (
    <div id="nosotros" className="flex w-5/6 m-auto p-10 -mt-48">
      <div className="w-1/2 flex flex-col">
        <AboutUsBoxes />
      </div>

      <div className="w-1/2">
        <AboutUsDescription />
      </div>
    </div>
  )
}