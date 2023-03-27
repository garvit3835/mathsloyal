import React from 'react'

const ViewImage = ({Image,setImage}) => {
  return (
    <>
  { Image && <div
    className='absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex justify-center items-center'
    >
        <div className='absolute top-5 right-5 p-3 w-[50px] h-[50px] text-center cursor-pointer bg-gray-300 hover:bg-gray-500 rounded-full'
        onClick={()=>{
            setImage("")
            }}
        >
            X
            </div>
            <div>
            <img src={Image} alt="" className="w-[500px] h-[500px] object-contain"/>
            </div>
        </div>}
      </>
  )
}

export default ViewImage