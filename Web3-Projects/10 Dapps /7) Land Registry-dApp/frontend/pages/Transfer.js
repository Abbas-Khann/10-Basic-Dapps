import React from 'react'
import Navbar from './Components/Navbar'

const Transfer = () => {
  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl text-center m-4 sm:text-2xl md:text-3xl'>Transfer Ownership</h1>
        <div className='flex items-center justify-center w-8/12 mx-auto'>

        <div className=''>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Enter Contract Address</h1>
        <h1 className='sm:text-2xl md:text-3xl'>New Owner Address</h1>
        </div>
        <div className='flex flex-col w-9/12 items-center'>

        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2'/>
        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2'/>
        
        </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='bg-blue-400 text-2xl rounded px-4 py-2 mt-2'>Transfer</button>
        </div>
    </div>
  )
}

export default Transfer