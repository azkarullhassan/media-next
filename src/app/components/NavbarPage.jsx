// pages/NavbarPage.js
'use client'
import React, { useState } from 'react';

const NavbarPage = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
    
  ];

  const [open, setOpen] = useState(false);

  return (
    <main className='w-full'>
      <div className='w-full top-0 left-0  flex justify-center pt-5'>
        <div className='md:flex items-center justify-between md:py-4  md:max-w-7xl w-full '>
          <div className="inline-flex gap-2 pb-16 md:pb-0">
           <div  className='flex justify-center w-[168px] h-[75px] md:pl-0 pl-6'> 
            <img src="./src/navbar.png" alt="logo" /></div>
           
            <h2 className='text-white md:text-2xl text-xl font-bold font-Poppins leading-16px md:leading-25px'>Logoipusm</h2>
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 pt-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className="text-lg text-black  md:text-xl md:my-0 my-4  font-Plus Jakarta Sans px-8">
                  <a href={link.link} className=' hover:text-[#FF6947] duration-500 '>{link.name}</a>
                </li>
              ))
            }
          </ul>

          <div className=' md:flex md:ml-10 hidden'>
            <button className='text-white font-Poppins lg:p-2.5 md:p-2 pl-2 bg-[#FF6947] rounded-[10.04px] duration-500'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NavbarPage;
