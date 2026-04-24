import React from 'react'

const HeadingPart = ({className, heading, para}) => {
  return (
    <div className={`${className} max-w-[577px] mx-auto text-center py-[30px]  space-y-6`}>
      <h2 className={` text-5xl font-semibold text-gray9 leading-14`}>{heading}</h2>
      <p>{para}</p>
    </div>
  )
}

export default HeadingPart
