import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".007"
      className='w-full bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-20 overflow-hidden'
    >
      <div className='flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300 px-5'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[8vw] md:text-[17vw] pr-10 md:pr-28 font-mono font-semibold leading-none tracking-tighter'
        >
          WE ARE KIREI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[8vw] md:text-[17vw] pr-10 md:pr-28 font-mono font-semibold leading-none tracking-tighter'
        >
          WE ARE KIREI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
