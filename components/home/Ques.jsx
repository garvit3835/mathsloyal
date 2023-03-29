import React from 'react'
import Image from 'next/image'

const Ques = () => {
  return (
    <div className='bg-white h-max'>
      <div className='text-lg md:text-3xl lg:text-4xl font-semibold md:leading-relaxed lg:leading-[80px] mt-20 text-[#5a598d] text-center w-full mx-auto  max-w-[1400px]  px-5  py-5  relative  sm:pt-5 md:p-16 pb-8'>
We Are the new age doubt solving platform, where you can ask your doubts and get them solved by AI or subject experts.
    </div>
      <div className=" w-full mx-auto  max-w-[1400px]  px-5  py-5  relative  sm:pt-5 md:p-16 ">
<div className='w-full md:flex gap-10 md:w-[90%]'>
        <Image src="/icons/Ques.webp" width={350} height={460} className='shadow-xl w-[250px] mx-auto md:ml-20' alt='image'/>
        <div className=''>
          <div className='text-2xl md:text-5xl xl:text-6xl font-semibold px-5 md:leading-[90px] mt-8 md:mt-20'>
Struggling with your math Doubt? 
          </div>
        
          </div>
    </div>
<div className='w-full md:flex md:w-[90%] gap-10 md:pt-20 mt-14'>
        <div className='hidden md:flex'>
          <div className='text-4xl md:text-5xl xl:text-6xl font-semibold leading-[80px] ml-10 mt-20'>
            We Got You Covered with our AI and Subject Experts
          </div>
         
          </div>
          <Image src="/icons/Solu.webp" width={350} height={460} className='shadow-xl w-[250px] mx-auto md:ml-20' alt='image' />
          <div className='md:hidden'>
            <div className='text-2xl md:text-5xl xl:text-6xl font-semibold px-5 md:leading-[90px] mt-8 md:mt-20'>

              We Got You Covered with our AI and Subject Experts
            </div>

          </div>
    </div>
    </div>
    </div>
  )
}

export default Ques