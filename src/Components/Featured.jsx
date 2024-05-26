import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const isHovering = (index)=>{
        cards[index].start({y: "0"})
    }

    const isNotHovering = (index)=>{
        cards[index].start({y: "100%"})
    }

  return (
    <div className='w-full py-14'>
        <div className='px-16 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-5xl'>Featured Projects</h1>
        </div>
        <div className='px-14'>
        <div className='flex w-full mt-20 gap-5'>
            <motion.div
            onHoverStart={()=>isHovering(0)}
            onHoverEnd={()=>isNotHovering(0)}
            className='w-1/2 h-[75vh] relative'>
            <div className='w-full h-full rounded-lg overflow-hidden'>             
                    <h1 className='absolute flex overflow-hidden text-6xl text-[#74882c] tracking-tight leading-none z-[9] left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        {"FYDE".split('').map((item, index)=><motion.span initial={{y :"100%"}} animate={cards[0]} transition={{ease: [0.65, 0, 0.35, 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
            </motion.div>
            <motion.div
            onHoverStart={()=>isHovering(1)}
            onHoverEnd={()=>isNotHovering(1)}
            className='w-1/2 h-[75vh] relative'>
            <div className='w-full h-full rounded-lg overflow-hidden bg-zinc-800 p-32'>              
                    <h1 className='absolute flex overflow-hidden text-6xl text-[#74882c] tracking-tight leading-none z-[9] right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                    {"VISE".split('').map((item, index)=><motion.span initial={{y :"100%"}} animate={cards[1]} transition={{ease: [0.65, 0, 0.35, 1], delay: index*0.05}} className='inline-block'>{item}</motion.span>)}
                        </h1>      
                        <img className='bg-cover' src="https://i.ibb.co/zhncwht/Screenshot-2024-05-25-171229.png" alt="" />
                    </div>
            </motion.div>   
        </div>
        </div>
    </div>
  )
}

export default Featured