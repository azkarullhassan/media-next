import React from 'react'

const Footer = () => {
  return (
    <section className='w-ful bg-black py-12 '>
      <main className='mx-auto max-w-[80rem]'>
          <div className='flex md:flex-row flex-col md:justify-between  text-center items-center'>
           
            <div  className='flex bg-white bg-transparent justify-center w-[168px] h-[75px]'> 
            <img src="/src/image 131.png" alt="logo" />
            </div>
           
            <div className='pt-8'>
              <h1 className='font-normal text-[12px] text-white '>Copyright © 2023 Designify. All Rights Reserved</h1>
            </div>
          </div>
      </main>
    </section>
  )
}

export default Footer