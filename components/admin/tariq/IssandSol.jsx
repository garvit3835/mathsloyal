import React from 'react'

const IssandSol = () => {
  return (
      <div className="flex w-1/2 border bg-white rounded-2xl p-3 sm:p-4 md:p-8 m-5 shadow-lg  ">

<div className='w-1/2 text-center'>
<div className='text-2xl font-semibold mb-5'>
    25 solved
</div>
              <div className='text-2xl font-semibold'>

    10 pending
</div>
</div>
<div className='w-1/2 flex flex-col justify-center text-center'>
    <div className='text-4xl font-bold text-red-500'>

5 
    </div>
<div className='text-sm text-gray-800'>
                  exceeded the 3hr time limit
</div>
</div>
    </div>
  )
}

export default IssandSol