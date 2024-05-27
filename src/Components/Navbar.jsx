import React from 'react';

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-5 md:px-20 flex flex-col md:flex-row justify-between items-center'>
      <div className='logo w-full md:w-1/12 mb-4 md:mb-0'>
        <img src="https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png" alt="Kirei logo" />
      </div>
      <div className='links gap-4 md:gap-8 flex flex-wrap'>
        {["Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
          <button key={index} className={`text-lg font-mono ${index === 4 ? "ml-0 md:ml-4" : ""}`}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
