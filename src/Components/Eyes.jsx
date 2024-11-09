import React, { useEffect, useState } from 'react';
import {useImage} from 'react-image';

function EyeComponent() {
  const {src} = useImage({
    srcList: 'https://i.ibb.co/583YBTS/Ochi.png',
  })

  return <img src={src} className='w-full h-full object-cover' />
}

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);

      setRotate(270 - angle);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-full h-screen overflow-hidden bg-zinc-900 px-4 md:px-40 py-20'>
      <div
        data-scroll
        data-scroll-speed='-.7'
        className='w-full h-full bg-cover bg-center relative rounded-md'
      >
        <EyeComponent />
        <div className='absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-8'>
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
            <div className='w-3/4 h-3/4 relative bg-zinc-900 rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
              >
                <div className='w-[20px] h-[20px] md:w-10 md:h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
            <div className='w-3/4 h-3/4 relative bg-zinc-900 rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
              >
                <div className='w-[20px] h-[20px] md:w-10 md:h-10 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
