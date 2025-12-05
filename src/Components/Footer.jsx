import React from 'react';
import Logo from '../assets/Logo.png';

function Footer() {
  return (
    <div
      className='w-full h-screen p-8 md:p-16 flex'
    >
        <div className='w-1/2 h-full flex flex-col justify-between items-start '>
        <div>
          <h1 className='text-3xl lg:text-6xl font-semibold md:-mb-2 leading-none tracking-tighter'>
            EYE-
          </h1>
          <h1 className='text-3xl lg:text-6xl font-semibold -mb-4 leading-none tracking-tighter'>
            OPENING
          </h1>
        </div>
        <img src={Logo} className='w-40 -ml-8' alt="Kirei Logo" />
      </div>
      <div className='w-1/2 h-full flex flex-col justify-between'>
        <h1 className='text-3xl lg:text-6xl font-semibold leading-none tracking-tighter hyphens-manual'>
          PRESENTATIO&shy;NS
        </h1>
        <div className='mb-5'>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="/">
            Facebook
          </a>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="/">
            Instagram
          </a>
          <a className='block text-lg md:text-xl font-extralight mb-2' href="/">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
