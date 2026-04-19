import React, { useState } from 'react'
import Container from "./Container"
import NavLogo from "../assets/Logo.png"
import Button from './Button'

import { IoMdMenu } from "react-icons/io";


const Navber = () => {

  const [navber, setNavber] = useState(false)

  const handleClick =()=>{
      setNavber(!navber)
  }

  return (
    <>
      <header>
        <Container>
           <nav className='flex justify-between items-center pt-5 pb-6 relative w-full'>
                <figure>
                     <img src={NavLogo} alt="Navber Logo" />
                </figure> 
                <div className={`${navber ? "block" : "hidden"} lg:flex items-start lg:items-center gap-6 flex-col lg:flex-row lg:flex-nowrap absolute top-25 left-0 w-full bg-secondary rounded-[10px] p-6 lg:sticky lg:w-[50%] lg:block lg:bg-white`}>
                  <ul className='flex items-start lg:items-center gap-x-12 gap-y-1 flex-col lg:flex-row text-base lg:text-secondary text-white leading-6'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Process</li>
                      <li>Portfolio</li>
                      <li>Blog</li>
                      <li>Service</li>
                  </ul>
                  <Button>Contact</Button>
                </div>
                <div onClick={handleClick} className='cursor-pointer lg:hidden'>
                  <IoMdMenu className='text-4xl' />
                </div>
            </nav> 
        </Container>
       
      </header>
    </>
  )
}

export default Navber
