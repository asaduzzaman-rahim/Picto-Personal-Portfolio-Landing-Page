import React from 'react'
import Section from "./Section"
import Container from "./Container"
const WorkProcess = () => {
  return (
    <>
     <Section className="bg-[#F0F1F3]">
        <Container>
            <div className='flex flex-wrap justify-center items-center gap-[143px] lg:justify-between'>
                <div className='max-w-[529px] '>
                    <h3 className='text-5xl font-semibold leading-14 text-gray9 '>Work Process </h3>
                    <p className='pt-6 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                </div> 
                <div>
                    <div className='p-8 '>
                        
                    </div>
                </div>
            </div>  
        </Container>    
    </Section> 
    </>
  )
}

export default WorkProcess
