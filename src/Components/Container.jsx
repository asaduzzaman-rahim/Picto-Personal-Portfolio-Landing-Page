import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} container px-3 lg:p-0`}>
      {children}
    </div>
  )
}

export default Container
