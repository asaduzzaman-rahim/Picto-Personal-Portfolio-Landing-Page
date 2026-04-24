import React from 'react'
import Section from "./Section"
import Container from "./Container"
import HeadingPart from './HeadingPart'
import Button from "./Button"

import { FaArrowRight } from "react-icons/fa6";

import Photo1 from "../assets/Protfolio Photo (1).jpg"
import Photo2 from "../assets/Protfolio Photo (1).png"
import Photo3 from "../assets/Protfolio Photo (2).png"
import Photo4 from "../assets/Protfolio Photo (3).png"
import Photo5 from "../assets/Protfolio Photo (4).png"
import Photo6 from "../assets/Protfolio Photo (5).png"


const Portfolio = () => {
  return (
    <>
     <Section>
        <Container>
            <div>
                <HeadingPart 
                heading="Protfolio" 
                para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."/>
            </div>
            <div className='flex flex-wrap gap-6 justify-center items-center lg:justify-between'>
                <PortfolioCart 
                    image={Photo1}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
                <PortfolioCart 
                    image={Photo2}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
                <PortfolioCart 
                    image={Photo3}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
                <PortfolioCart 
                    image={Photo4}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
                <PortfolioCart 
                    image={Photo5}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
                <PortfolioCart 
                    image={Photo6}
                    short="ui-ux design"
                    heading="Product Admin Dashboard"
                    para="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
                    btn="Case Study"
                
                />
            </div>
            <div className='flex justify-center mt-12'>
                <Button>More Project</Button>
            </div>
        </Container>    
    </Section> 
    </>
  )
}


const PortfolioCart = ({image, short, heading, para, btn}) => {
  return (
    <div className="rounded-[4px] shadow-[0_10px_20px_-5px_#E6E8EB] max-w-[424px] border-1 border-[#E6E8EB]">
      <img src={image} alt="Protfolio cart image" />
      <div className="p-8 max-w-[464px] ">
        <span className='text-xs leading-[16px] uppercase text-gray4'>{short}</span>
        <h3 className="pt-1 pb-3 text-xl leading-6 font-semibold text-gray9 ">{heading}</h3>
        <p className='pb-5'>{para}</p>
        <button className="py-3 px-6 text-[16px] leading-6 text-primary border-1 border-primary flex gap-3 hover:text-white hover:bg-primary transition-all duration-700 items-center cursor-pointer group">{btn}<FaArrowRight className='group-hover:-translate-x-[-12px] transition-all duration-700'/></button>
      </div>
    </div>
  )
}



export default Portfolio
