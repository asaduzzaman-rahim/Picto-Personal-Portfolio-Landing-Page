import React, { Children } from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`${className} px-6 py-3 text-base font-semibold leading-6 text-white bg-primary rounded-[4px] cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button
