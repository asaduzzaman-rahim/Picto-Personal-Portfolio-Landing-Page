import React from 'react'
import Container from "./Container"
import Button from './Button'
import BenarPhoto from "../assets/Benar.jpg"

const Benar = () => {
  return (
    <>
     <section className='pt-10 lg:pt-32'>
        <Container>
            <div className='flex flex-wrap-reverse justify-between gap-3.5 lg:flex-nowrap '>
                <div className='max-w-[648px] flex flex-col justify-between gap-5'>
                    <div className='space-y-6'>
                      <h1 className='text-7xl font-semibold leading-[84px] text-gray9'>Hello, I’m Brooklyn Gilbert</h1>
                      <p>I'm a Freelance <span className='text-gray9'>UI/UX Designer</span> and <span className='text-gray9'>Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                      <Button>Say Hello!</Button>
                    </div>
                    <div className="flex flex-wrap gap-3 w-full">
                      <div className="text-center md:w-[200px] max-w-[200px] py-4 px-2 bg-[#f6ebfe]">
                        <h3 className='text-[32px] text-gray7 font-semibold leading-10'>15 Y.</h3>
                        <p>Experience</p>
                      </div>
                      <div className="text-center md:w-[200px] max-w-[200px] py-4 px-2 bg-[#f6ebfe]">
                        <h3 className='text-[32px] text-gray7 font-semibold leading-10'>15 Y.</h3>
                        <p>Experience</p>
                      </div>
                      <div className="text-center md:w-[200px] max-w-[200px] py-4 px-2 bg-[#f6ebfe]">
                        <h3 className='text-[32px] text-gray7 font-semibold leading-10'>15 Y.</h3>
                        <p>Experience</p>
                      </div>
                    </div>
                </div>
                <div>
                  <img src={BenarPhoto} alt="Benar Photo" />
                </div>
            </div>
        </Container>
    </section> 
    </>
  )
}

export default Benar
