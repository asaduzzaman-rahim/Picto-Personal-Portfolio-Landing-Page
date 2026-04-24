import React from 'react'

const Section = ({children, className}) => {
  return (
    <section className={`${className} py-[70px]`}>
      {children}
    </section>
  )
}

export default Section
