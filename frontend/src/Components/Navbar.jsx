import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center">
        <img src={logo} className="px-6 py-6" alt="Carrotar Logo" />
        <h1 className="font-semibold text-[24px] text-white">Carrotar</h1>
      </div>

      <div className="flex-grow flex justify-center">
        <div className="flex items-center gap-8">
          <h1 className="text-white font-semibold text-[16px]">Feature</h1>
          <h1 className="text-white font-semibold text-[16px]">Plans</h1>
          <h1 className="text-white font-semibold text-[16px]">FAQs</h1>
        </div> 
      </div>

      <div className="flex items-center pr-[80px]">
        <h1 className="text-white font-semibold text-[16px]">Home</h1>
      </div>
    </div>
    </>
  )
}

export default Navbar