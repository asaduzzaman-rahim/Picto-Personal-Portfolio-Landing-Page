import React from 'react'
import Section from './Section'
import Container from './Container'
import Button from "./Button"

import AboutPhoto from "../assets/AboutImage.jpg"
import { FaFacebookF , FaInstagram, FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";



const About = () => {
  return (
    <>
      <Section>
        <Container>
            <div className='lg:p-[112px]'>
                <div className='flex flex-wrap justify-center lg:items-center lg:justify-between lg:flex-nowrap'>
                    <div className='flex flex-col justify-center'>
                    <img className='max-w-[424px]' src={AboutPhoto} alt="About Photo" />
                        <div className='flex  text-3xl '>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaBehance />
                            <FaTwitter />
                        </div>
                </div>

                <div className='space-y-8 max-w-[536px]'>
                  <h2 className='text-[38px] font-semibold leading-12.5 text-gray9'>I am Profesional User Experience Designer</h2>
                  <div className='space-y-4'>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                    <p>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <Button>My Project</Button>
                    <Button className="!bg-white !text-primary !border-1 !border-primary hover:!bg-primary hover:!text-white transition-all duration-700 flex gap-3 items-center"><LuDownload className='text-xl'/> Download</Button>
                  </div>
                </div>
                </div>
            </div>
        </Container>
      </Section>
    </>
  )
}

export default About
