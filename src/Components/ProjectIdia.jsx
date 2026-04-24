import React from 'react'
import Container from "./Container"
import Section from "./Section"
import Button from "./Button"

import { FaArrowRight } from "react-icons/fa6";


const ProjectIdia = () => {
  return (
    <>
     <Section className="bg-gray9">
        <Container>
            <div className="max-w-[619px] mx-auto space-y-8 text-center">
                <h3 className='text-5xl leading-14 font-semibold text-white'>Do you have Project Idia?. Let's discuss your project!</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                <div className='flex justify-center'>
                  <Button className="flex gap-3 items-center">Let`s Work Together <FaArrowRight/></Button>
                </div>
            </div>    
        </Container>    
    </Section> 
    </>
  )
}

export default ProjectIdia
