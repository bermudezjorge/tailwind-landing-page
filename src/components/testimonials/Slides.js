import React from 'react'

export default function Slides({ style, testimonial, by }) {

  return (
    <div className="w-full inline-block p-12" style={style}>
      <p className="w-1/2 m-auto font-serif text-purple-900">
        {testimonial}
      </p>
      <h1 className="w-1/2 m-auto mt-3 font-sans font-bold text-purple-900">
        {by}
      </h1>
    </div>
  )
}