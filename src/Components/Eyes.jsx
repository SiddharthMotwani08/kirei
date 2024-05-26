import React, { useEffect, useState } from 'react'

function Eyes() {
  
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=> {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            
            var angle = Math.atan2(deltaX, deltaY) * (180/(Math.PI))

            setRotate(270-angle)
        })
    })
    
    return (
    <div className='w-full h-screen overflow-hidden bg-zinc-900 px-40 py-20'>
        <div data-scroll data-scroll-speed="-.7" className='w-full h-full bg-cover bg-center relative bg-[url("https://i.ibb.co/583YBTS/Ochi.png")] rounded-md'>
            <div className='absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-8'>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                    <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                    <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                    </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                    <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
                    <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes