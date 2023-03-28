import React from 'react'
import { Leftbar } from '../../../components/admin/tariq/Leftbar'
import IssandSol from '../../../components/admin/tariq/IssandSol'

const index = () => {
  return (
    <div className='flex'>
        <Leftbar />
      <div className="w-full xl:w-4/5 mx-auto pt-10 h-screen overflow-y-scroll">


        <IssandSol/>
        </div>
    </div>
  )
}

export default index