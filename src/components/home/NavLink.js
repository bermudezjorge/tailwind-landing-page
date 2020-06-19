import React from "react"

export default function NavLink({ title, href, hideMenu }) {

  const hideMenuFn = () => {
    if(document.body.clientWidth < 768){
      hideMenu(false)
    }
  }

  return (
    <a
      className="text-purple-900 md:text-white font-black md:font-normal cursor-pointer box-content font-serif text-3xl md:text-base  hover:font-black duration-100 transition-all transform md:hover:translate-y-1"
      href={href}
      onClick={() => hideMenuFn()}
    >
      {title}
    </a>
  )
}