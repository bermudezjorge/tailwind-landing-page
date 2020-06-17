import React from 'react'

import Title from '../../components/global/Title'
import TinySlider from './TinySlider'
import Slides from './Slides'
import Arrows from './Arrows'

export default function Testimonials() {

  const SLIDES = [
    {
      testimonial: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”`,
      by: 'Lorem Ipsum'
    },
    {
      testimonial: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”`,
      by: 'Lorem Ipsum'
    },
    {
      testimonial: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”`,
      by: 'Lorem Ipsum'
    }
  ]

  return (
    <div id="testimonios" className="w-5/6 m-auto p-10">
      <Title classes="text-center" color="purple" text="Lo que dicen de NOSOTROS"/>

      <TinySlider
        classes="w-full text-center"
        style={{ height: '230px' }}
        data={SLIDES}
        slide={<Slides />}
        arrows={<Arrows />}
      />
    </div>
  )
}