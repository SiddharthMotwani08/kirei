import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 uppercase px-20 text-8xl font-sans font-bold leading-[11vh] tracking-tighter'>
        {["We Create", "Eye Opening", "presentations"].map((item, index) => {
          return <div>
            <div className='flex w-fit items-end overflow-hidden'>
              {index === 1 && (<motion.div initial={{ width: 0 }} animate={{width: "7.5vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[7.5vw] h-[4.5vw] bg-red-500 rounded-md relative ml-2 mr-2'></motion.div>)}
          <h1 key={index} className='masker'>{item}</h1>
          </div>
            </div>
        })}
      </div>
    <div className='mt-36 border-zinc-800 border-t-2 flex justify-between items-center px-20 py-4'>
      {["For public and private companies", "From the first pitch to IPO"].map((item) => (
        <p>{item}</p>
      ))}
      <div className='flex gap-1'>
        <div className='uppercase px-3 py-1 border-2 rounded-full'>
          start the project
        </div>
        <div className='border-2 rounded-full flex items-center px-2'>
          <span className='rotate-[45deg]'>
          <FaLongArrowAltUp />
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage