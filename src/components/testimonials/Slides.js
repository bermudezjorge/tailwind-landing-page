import React from 'react'

export default function Slides({ style, testimonial, by }) {

  return (
    <div className="w-full inline-block md:p-12 mt-5 md:mt-0" style={style}>
      <p className="w-7/12 md:w-1/2 m-auto font-serif text-purple-900 text-center">
        {testimonial}
      </p>
      <h1 className="w-7/12 md:w-1/2 m-auto mt-3 font-sans font-bold text-purple-900 text-center">
        {by}
      </h1>
    </div>
  )
}