import React from 'react'

const Section = ({children, className}) => {
  return (
    <section className={`${className} py-[30px] lg:py-[100px]`}>
      {children}
    </section>
  )
}

export default Section
