import React from 'react'

const Two = () => {
  return (
    <section className='w-full md:py-28 py-8'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row  px-4 justify-center'>
    

        {/* image div */}
     <div className='w-full md:w-1/2 flex justify-center items-center ' >
    
    <img className='' src="/src/img222.png" alt="arrow" />
   </div>
   
     <div className='w-full md:w-1/2 flex justify-center  '>
        
        <div className=' pt-28 '>
         <h1 className="font-extrabold text-[44px]">You&apos;ve Mastered Real Estate;  Now <span className='text-[#FF6947]'> Master Your Online </span>Presence</h1>
          
          <p className="font-medium text-[20px] leading-8 pt-6 pb-6">With a stellar year behind you, youre no stranger to success. But as your br business grows and your team of dynamic female realtors blooms, the days seem shorter. Balancing closings, client meetings, and family has left you little time for the one thing that can set you apart in the digital age—engaging, professional-quality video content.</p>
         
          <button className='border-[1px] md:px-8 px-3 py-3 bg-[#FF6947] rounded-lg text-[16px] text-white font-extrabold'>
          Get Started
        </button>
        </div>
      </div>


    
     
    
    </main>
   
  </section>
  )
}

export default Two