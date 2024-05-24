import React from 'react'

const Three = () => {
  return (
    <section className='w-full md:py-28 py-8'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-8 px-4 justify-center'>
    
     <div className='w-full md:w-1/2 flex justify-center '>
        
        <div className=' pt-14 '>
         <h1 className="font-extrabold text-[44px]">Your <span className='text-[#FF6947]'>Pain Points,</span> Directly Addressed</h1>
          
        <div className='flex flex-col gap-5'>
        <div className='flex gap-4'>
         <ion-icon name="checkmark-done-circle" size="large"></ion-icon>
            <p className='font-medium text-[18px]'>The clock is always against you, leaving no room to bring your video ideas to life.</p>
         </div>

         <div className='flex gap-4'>
         <ion-icon name="checkmark-done-circle" size="large"></ion-icon>
            <p className='font-medium text-[18px]'>The clock is always against you, leaving no room to bring your video ideas to life.</p>
         </div>

         <div className='flex gap-4'>
         <ion-icon name="checkmark-done-circle" size="large"></ion-icon>
            <p className='font-medium text-[18px]'>The clock is always against you, leaving no room to bring your video ideas to life.</p>
         </div>
        </div>
          
        </div>
      </div>


     {/* image div */}
     <div className='w-full md:w-1/2 flex justify-center ' >
    
      <img  src="/src/img333.png" alt="arrow" />
     </div>
     
    
    </main>
   
  </section>
  )
}

export default Three ;