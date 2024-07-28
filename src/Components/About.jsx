import React from 'react';
import {useImage} from 'react-image'

function AboutComponent() {
  const {src} = useImage({
    srcList: 'https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg',
  })

  return <img src={src} className='w-full h-full object-cover' />
}

function About() {
  return (
    <div
     className='w-full bg-[#CDEA68] text-black mt-[-4.5px]'>
      <h1 className='p-8 md:p-16 text-3xl md:text-5xl leading-none tracking-tight'>
        Kirei is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='flex flex-col md:flex-row w-full border-t-2 border-zinc-300 mt-10 md:mt-20 px-8 md:px-16 py-6'>
        <div className='w-full md:w-1/2'>
          <h1 className='font-medium text-3xl md:text-5xl'>Our approach:</h1>
          <button className='flex items-center gap-4 mt-4 md:mt-8 bg-black text-white rounded-full p-3 md:p-4'>
            READ MORE
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
        </div>
        <div className='w-full md:w-1/2 h-[60vh] bg-[#74882c] rounded-3xl overflow-hidden mt-4 md:mt-0'>
          <AboutComponent />
        </div>
      </div>
    </div>
  );
}

export default About;
