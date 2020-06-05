import React from 'react'

function Button({ children }) {
  return (
    <button className="w-40 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md mt-10 border-2 border-solid border-blue-700 transform hover:translate-y-1">
      {children}
    </button>
  )
}

export default Button