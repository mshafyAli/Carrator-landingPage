// import React from 'react'
// import logo from '../assets/logo.png'

// const Navbar = () => {
//   return (
//     <>
//     <div className="flex items-center justify-between px-6">
//       <div className="flex items-center">
//         <img src={logo} className="px-6 py-6" alt="Carrotar Logo" />
//         <h1 className="font-semibold text-[24px] text-white">Carrotar</h1>
//       </div>

//       <div className="flex-grow flex justify-center">
//         <div className="800px:hidden flex items-center gap-8">
//           <h1 className="text-white font-semibold text-[16px]">Feature</h1>
//           <h1 className="text-white font-semibold text-[16px]">Plans</h1>
//           <h1 className="text-white font-semibold text-[16px]">FAQs</h1>
//         </div> 
//       </div>

//       <div className="flex items-center pr-[80px]">
//         <h1 className="text-white font-semibold text-[16px]">Home</h1>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Navbar


import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} className="px-6 py-6" alt="Carrotar Logo" />
        <h1 className="font-semibold text-[24px] text-white">Carrotar</h1>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-6 py-4">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-white font-semibold text-[16px]">Feature</h1>
              <h1 className="text-white font-semibold text-[16px]">Plans</h1>
              <h1 className="text-white font-semibold text-[16px]">FAQs</h1>
            </div>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <div className="hidden md:flex md:justify-center">
        <div className="flex items-center gap-8">
          <h1 className="text-white font-semibold text-[16px]">Features</h1>
          <h1 className="text-white font-semibold text-[16px]">Plans</h1>
          <h1 className="text-white font-semibold text-[16px]">FAQs</h1>
        </div>
            <div className="gap-2 px-[10rem]">

          <h1 className="text-white font-semibold text-[16px]">Home</h1>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
