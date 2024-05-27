import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className='w-full h-screen bg-zinc-900 pt-1'
    >
      <div className='textstructure mt-52 uppercase px-10 md:px-20 text-4xl md:text-8xl font-sans font-bold leading-[11vh] tracking-tighter'>
        {['We Create', 'Eye Opening', 'presentations'].map((item, index) => (
          <div key={index}>
            <div className='flex w-fit items-baseline overflow-hidden'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '7.5vw' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='w-[7.5vw] h-[4.5vw] bg-red-500 rounded-md relative ml-2 mr-2'
                ></motion.div>
              )}
              <h1 className='masker'>{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-20 md:mt-36 border-zinc-800 border-t-2 flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-4'>
        <p className='md:mr-4'>
          For public and private companies
        </p>
        <p className='md:ml-4'>
          From the first pitch to IPO
        </p>
        <div className='flex gap-1 mt-4 md:mt-0'>
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
  );
}

export default LandingPage;
