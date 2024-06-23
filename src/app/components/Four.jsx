import React from 'react'

const Four = () => {
  return (
    <section className='w-full md:py-28 py-8'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-10 px-4 justify-center'>
    

        {/* image div */}
     <div className='w-full md:w-1/2 flex justify-center items-center ' >
    
    <img className='' src="/src/img444.png" alt="arrow" />
   </div>
   
     <div className='w-full md:w-1/2 flex justify-center  '>
        
        <div className=' pt-44 pl-8'>
         <h1 className="font-extrabold text-[44px]">Introducing Your Win- <span className='text-[#FF6947]'>Win Solution</span></h1>
          <p className='font-normal text-[18px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, corrupti. undivided attention, and unmatched reliability, we pledge to make you feel valued and understood. </p>
           <p className='font-normal text-[18px] pt-14'>We exclusively partner with real estate professionals like you, where we see a clear path to mutual success.</p>
          
        </div>
      </div>
    
    </main>
   
  </section>
  )
}

export default Four