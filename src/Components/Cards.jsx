import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-speed="-0.2" className='w-full h-screen flex gap-5 items-center px-12'>
        <div className='w-1/2 h-[50vh] bg-[#004D43] rounded-lg flex items-center justify-center'>
            <img className='w-[12vw]' src="https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png" alt="" />
        </div>
        <div className='w-1/2 flex gap-5 items-center'>
            <div className='relative w-1/2 h-[50vh] bg-[#142523] rounded-lg flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <h5 className='absolute left-[1vw] bottom-[1vw] rounded-full border-2 py-1 px-3'>RATING 5.0 ON CLUTCH</h5>
            </div>
            <div className='relative w-1/2 h-[50vh] bg-[#142523] rounded-lg flex items-center justify-center'>
                <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <h5 className='absolute left-[1vw] bottom-[1vw] rounded-full border-2 py-1 px-3'>BUSINESS BOOTCAMP ALUMNI</h5>
            </div>
        </div>
    </div>
  )
}

export default Cards
