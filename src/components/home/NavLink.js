import React from "react"

export default function NavLink({ text }) {
  return (
    <p className="text-white cursor-pointer box-content font-serif hover:font-black duration-100 transition-all transform hover:translate-y-1">
      {text}
    </p>
  )
}