import React from 'react'
import {useImage} from 'react-image'
import Logo from '../assets/Logo.png';
import Logo2 from '../assets/Logo2.svg';
import Logo3 from '../assets/Logo3.png';

function CardOne() {
    const {src} = useImage({
      srcList: Logo,
    })
  
    return <img src={src} className='w-28'/>
  }

  function CardTwo() {
    const {src} = useImage({
      srcList: Logo2,
    })
  
    return <img src={src} className='w-16' />
  }

  function CardThree() {
    const {src} = useImage({
      srcList: Logo3,
    })
  
    return <img src={src} className='w-16'/>
  }

function Cards() {
  return (
    <div className='w-full h-screen md:flex-row flex flex-col gap-5 items-center px-8'>
        <div className='w-full md:w-1/2 h-[50vh] bg-[#004D43] rounded-lg flex items-center justify-center'>
            <CardOne />
        </div>
        <div className='w-full md:w-1/2 flex gap-5 items-center'>
            <div className='relative w-full md:w-1/2 h-[50vh] bg-[#142523] rounded-lg flex items-center justify-center'>
                <CardTwo />
                <h5 className='absolute left-[1vw] bottom-[1vw] text-[12px] rounded-full border-2 py-1 px-3 md:opacity-100 opacity-0'>RATING 5.0 ON CLUTCH</h5>
            </div>
            <div className='relative w-full md:w-1/2 h-[50vh] bg-[#142523] rounded-lg flex items-center justify-center'>
                <CardThree />
                <p className='absolute left-[1vw] bottom-[1vw] text-[12px] rounded-full border-2 py-1 px-3 md:opacity-100 opacity-0'>BUSINESS BOOTCAMP ALUMNI</p>
            </div>
        </div>
    </div>
  )
}

export default Cards
