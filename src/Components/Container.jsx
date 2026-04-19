import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} container px-2 lg:p-0`}>
      {children}
    </div>
  )
}

export default Container
