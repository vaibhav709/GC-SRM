import React from 'react'
import logo from "./assets/logo.png"
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#0a0f0c] to-[#0b2a15] py-8">
       <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
         <div className='mb-6 md:mb-0'>
           <img src={logo} className='h-[70px] w-[250px] mb-4'  />
           <span className='text-white'>
             SRM Institute of Science & Technology,
             <br />
             Kattankulathur, Chennai 603203
             <br />
             India
           </span>
         </div>
         <div className='text-center md:text-right'>
           <span className='text-white font-bold text-lg'>
             Follow us on
             <br />
             <span className='flex justify-center md:justify-end mt-2 gap-x-4'>
               <GrLinkedin className='text-4xl cursor-pointer'/>
               <FaInstagram className='text-4xl cursor-pointer'/>
               <BsTwitterX className='text-4xl cursor-pointer'/>
               <FaGithub className='text-4xl cursor-pointer'/>
             </span>
           </span>
         </div>
       </div>
    </div>
  )
}

export default Footer