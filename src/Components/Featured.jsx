import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import fydeImg from '../assets/fyde-illustration.png';
import Vise from '../assets/Vise.png';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const isHovering = (index) => {
    cards[index].start({ y: '0' });
  };

  const isNotHovering = (index) => {
    cards[index].start({ y: '100%' });
  };

  return (
    <div className='w-full py-14'>
      <div className='px-6 md:px-16 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-3xl md:text-5xl'>Featured Projects</h1>
      </div>
      <div className='px-6 md:px-14'>
        <div className='flex flex-col md:flex-row w-full mt-10 md:mt-20 gap-5'>
          <motion.div
            onHoverStart={() => isHovering(0)}
            onHoverEnd={() => isNotHovering(0)}
            className='w-full md:w-1/2 h-[50vh] relative'
          >
            <div className='w-full h-full rounded-lg overflow-hidden transition ease-in-out hover:scale-90 duration-300'>    
              <div className='w-full h-full relative'>
                <img src={fydeImg} className='w-full h-full object-cover rounded-md' alt="Fyde Project" />
              </div>
            </div>
            <h1 className='absolute flex overflow-hidden text-4xl md:text-6xl text-[#74882c] font-bold tracking-tight leading-none z-[9] left-1/2 md:left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                {'FYDE'.split('').map((item, index) => (
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={cards[0]}
                    transition={{ ease: [0.65, 0, 0.35, 1], delay: index * 0.05 }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
          </motion.div>
          <motion.div
            onHoverStart={() => isHovering(1)}
            onHoverEnd={() => isNotHovering(1)}
            className='w-full md:w-1/2 h-[50vh] relative'
          >
            <div className='w-full h-full rounded-lg overflow-hidden bg-zinc-800 transition ease-in-out hover:scale-90 duration-300'>
              <img src={Vise} className='w-full h-full object-cover' alt="Vise Project" />
            </div>
            <h1 className='absolute flex overflow-hidden text-4xl md:text-6xl text-[#74882c] font-bold tracking-tight leading-none z-[9] right-1/2 md:right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                {'VISE'.split('').map((item, index) => (
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={cards[1]}
                    transition={{ ease: [0.65, 0, 0.35, 1], delay: index * 0.05 }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
