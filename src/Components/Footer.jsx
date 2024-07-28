import React from 'react';
import {useImage} from 'react-image'

function FooterImage() {
  const {src} = useImage({
    srcList: 'https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png',
  })

  return <img src={src} className='w-40'/>
}

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      className='w-full h-screen p-8 md:p-16 flex'
    >
      <div className='w-1/2 h-full flex flex-col justify-between items-start overflow-hidden'>
        <div>
          <h1 className='text-4xl md:text-[8vh] font-semibold md:-mb-2 leading-none tracking-tighter'>
            EYE-
          </h1>
          <h1 className='text-4xl md:text-[8vh] font-semibold -mb-4 leading-none tracking-tighter'>
            OPENING
          </h1>
        </div>
        <FooterImage />
      </div>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <h1 className='text-4xl md:text-[8vh] font-semibold leading-none tracking-tighter hyphens-manual'>
          PRESENTATIO&shy;NS
        </h1>
        <div>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="">
            Facebook
          </a>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="">
            Instagram
          </a>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
