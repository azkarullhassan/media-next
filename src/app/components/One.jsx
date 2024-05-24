

const One = () => {
    return (
      <section className='w-full md:py-28 py-8  '>
      <div className='mx-auto max-w-[80rem] flex flex-col md:flex-row  px-4 justify-center'>
      
       <div className='w-full md:w-1/2 flex justify-center '>
          
          <div className=' pt-14 '>
           <h1 className="font-extrabold text-[52px]">Elevate Your <span className="text-[#FF6947]">Real Estate <br /> Brand</span>  with Professional <br /> Video Content</h1>
            
            <p className="font-medium text-[20px] leading-8 pt-6 pb-6">In the bustling world of real estate, where every closing is a <br /> celebration and your brand is legacy, it's time to revolutionize <br /> the way you connect with your audience.</p>
           
            <button className='border-[1px] md:px-8 px-3 py-3 bg-[#FF6947] rounded-lg text-[16px] text-white font-extrabold'>
            Get Started
          </button>
          </div>
        </div>
  

       {/* image div */}
       <div className='w-full md:w-1/2 flex justify-center ' >
      
        <img className='w-[565px] h-[565px]' src="/src/img1 (2).png" alt="arrow" />
       </div>
       
      
      </div>
      <div className="mx-auto max-w-[80rem] flex justify-center gap-32">
        <div>
        <h1 className="font-extrabold text-[45px]">8+</h1>
        <p className="font-medium text-[18px]">Years Experience</p>
        </div>
        <div>
          <h1 className="font-extrabold text-[45px]">87%</h1>
          <p className="font-medium text-[18px]"> Average Increase in Social <br /> Media Engagement</p>
        </div>
        <div>
          <h1 className="font-extrabold text-[45px]">120+</h1>
          <p className="font-medium text-[18px]">Clients</p>
        </div>
        <div>
          <h1 className="font-extrabold text-[45px]">48%</h1>
          <p className="font-medium text-[18px]">Average Increase in Sales</p>
        </div>
       </div>
    </section>
  );
  };
    
  
  
  export default One