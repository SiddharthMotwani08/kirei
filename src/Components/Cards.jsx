import React from 'react'
import {useImage} from 'react-image'

function CardOne() {
    const {src} = useImage({
      srcList: 'https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png',
    })
  
    return <img src={src} className='w-28'/>
  }

  function CardTwo() {
    const {src} = useImage({
      srcList: 'https://ochi.design/wp-content/uploads/2022/04/logo002.svg',
    })
  
    return <img src={src} className='w-16' />
  }

  function CardThree() {
    const {src} = useImage({
      srcList: 'https://ochi.design/wp-content/uploads/2022/04/logo003.png',
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
