import React, { useState } from 'react'
import logo from "./assets/logo.png"
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-black flex flex-col md:flex-row pt-2 h-auto md:h-[90px] justify-between px-4 md:px-10 items-center py-2'>
      <div className='flex justify-between w-full md:w-auto items-center'>
        <img src={logo} className='h-8 md:h-10 cursor-pointer' alt="Logo" />
        <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row text-white w-full md:w-auto mt-4 md:mt-0`}>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Home</span>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Our Team</span>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Our Story</span>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Events</span>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Contact us</span>
        <span className='text-lg cursor-pointer hover:text-green-400 duration-300 py-2 md:py-0 md:px-3'>Recruitment</span>
      </div>
    </div>
  )
}

export default Navbar