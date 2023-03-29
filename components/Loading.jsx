import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
      <div className='absolute z-50 w-screen h-full flex flex-col justify-center items-center glass-gradient'>
        <div className='flex text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] flex-wrap'>
            MATHSL
           <Image src="/icons/39.svg" alt="" width={60} height={60} className='w-[30px]  sm:w-[40px]  md:w-[50px] lg:w-[60px]'/>
            YAL.com
        </div>
        <div className='text-md sm:text-lg md:text-xl lg:text-3xl'>
            Preparing best environment for you
        </div>
      </div>
  )
}

export default Loading