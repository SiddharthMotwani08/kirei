import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import {useImage} from 'react-image'

function MyImageComponent() {
  const {src} = useImage({
    srcList: 'https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png',
  })

  return <img src={src} />
}

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const navbarRef = useRef(null);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling down
        setIsNavbarVisible(true);
      } else {
        // Scrolling up
        setIsNavbarVisible(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNavbarVisible) {
      gsap.to(navbarRef.current, { y: 0, ease: "power3.inOut", duration: 0.5 });
    } else {
      gsap.to(navbarRef.current, { y: -100, ease: "power3.inOut", duration: 0.5 });
    }
  }, [isNavbarVisible]);
  
  return (
    <div ref={navbarRef}
         className='fixed w-full z-[999] px-5 md:px-8 flex justify-between items-center'>
      <div className='logo w-1/6 md:w-[8vw] md:mb-0'>  
         <MyImageComponent />
      </div>
      <div className='links gap-4 md:gap-6 flex'>
        {["Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
          <button key={index} className={`text-sm md:text-lg font-mono ${index === 4 ? "ml-8 md:ml-16" : ""}`}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
