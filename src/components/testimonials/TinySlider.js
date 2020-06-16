import React, { useState } from 'react'

export default function TinySlider({ classes, style, data, slide, arrows }) {

  const [currectSlide, setCurrectSlide] = useState(1)
  
  function changeSlide(direction) {
    direction === '>' ? setCurrectSlide(currectSlide + 1) : setCurrectSlide(currectSlide - 1)
  }

  const c = classes || ''
  const s = style || {}
  const styles = {
    position: 'relative',
    overflow: 'hidden'
  }
  const sM = {...s, ...styles}

  function calPos(slide) {
    if(slide === currectSlide) {
      return '0%'
    } else {
      if(slide < currectSlide) {
        return `${slide * -100}%`
      } else if(slide > currectSlide) {
        return `${slide * 100}%`
      }
    }
  }

  return (
    <div className={c} style={sM}>
      <arrows.type direction="<" disabled={currectSlide <= 1 ? true : false} changeSlide={changeSlide} />

      {data.map((dataSlide, index) => {
        return (
          <slide.type
            key={index}
            style={{
              position: 'absolute',
              top: '0%',
              left: `${calPos(index+1)}`,
              transition: 'all 0.3s ease'
            }}
            {...dataSlide}
          />
        )
      })}

      <arrows.type direction=">" disabled={currectSlide >= data.length ? true : false} changeSlide={changeSlide} />
    </div>
  )
}