import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='p-16 text-5xl leading-none tracking-tight'>Kirei is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='flex w-full border-t-2 border-zinc-300 mt-20 px-16 py-6'>
            <div className='w-1/2'>
                <h1 className='font-medium text-5xl'>Our approach:</h1>
                <button className='flex items-center gap-6 mt-8 bg-black text-white rounded-full p-4'>READ MORE
                <div className='w-2 h-2 bg-white rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] bg-[#74882c] rounded-3xl overflow-hidden'>
              <img className='w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About