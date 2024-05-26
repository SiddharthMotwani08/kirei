import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 flex justify-between items-center'>
       <div className='logo w-1/12'>
       <img src="https://i.ibb.co/sWrK8Zf/A-logo-for-a-website-design-company-named-Kirei.png" />
       </div>
       <div className='links gap-8 flex'>
        {["Services", "Our work", "About us", "Insights", "Contact us"].map((item, index) => (
          <button key={index} className={`text-lg font-mono ${index === 4 && "ml-28"}`}>{item}</button>
        ))}
       </div>
    </div>
  )
}

export default Navbar