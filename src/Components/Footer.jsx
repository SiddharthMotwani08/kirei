import React from 'react';

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-speed=".2"
      className='w-full h-screen p-8 md:p-16 flex flex-col md:flex-row'
    >
      <div className='w-full md:w-1/2 h-full flex flex-col justify-between'>
        <div>
          <h1 className='text-4xl md:text-[10vh] font-semibold -mb-4 leading-none tracking-tighter'>
            EYE-
          </h1>
          <h1 className='text-4xl md:text-[10vh] font-semibold -mb-4 leading-none tracking-tighter'>
            OPENING
          </h1>
        </div>
        <div className='w-32'>
          <img
            src="https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png"
            alt="Kirei logo"
          />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl md:text-[10vh] font-semibold leading-none tracking-tighter'>
          PRESENTATIONS
        </h1>
        <div className='mt-8 md:mt-60'>
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
