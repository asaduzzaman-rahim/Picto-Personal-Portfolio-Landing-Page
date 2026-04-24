import React from 'react'
import Section from "./Section"
import Container from "./Container"

import { LiaResearchgate } from "react-icons/lia";
import { SiAlwaysdata } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineRocketLaunch } from "react-icons/md";



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
                <div className='grid grid-cols-2 items-center gap-6 '>
                   <Data 
                        icon={<LiaResearchgate className='z-10'/>}
                        tittle="Research"
                        dittails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                   />
                   <Data 
                        icon={<LiaResearchgate className='z-10'/>}
                        tittle="Research"
                        dittails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                   />
                   <Data 
                        icon={<LiaResearchgate className='z-10'/>}
                        tittle="Research"
                        dittails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                   />
                   <Data 
                        icon={<LiaResearchgate className='z-10'/>}
                        tittle="Research"
                        dittails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
                   />
                </div>
            </div>  
        </Container>    
    </Section> 
    </>
  )
}



const Data = ({icon, tittle, dittails}) => {
  return (
    <>
       <div className='p-8 bg-white max-w-[312px] group hover:-translate-y-3 transition-all duration-700 '>
            <div className="text-5xl p-6 bg-[#f4e9fd] !h-8 !w-8 flex justify-between items-center transition-all duration-700 text-black group-hover:bg-primary group-hover:text-black">{icon}</div> 
            <h4 className='pb-3 pt-8 text-xl font-semibold leading-5'>{tittle}</h4>
            <p>{dittails}</p>
        </div>
    </>
  )
}

export default WorkProcess
