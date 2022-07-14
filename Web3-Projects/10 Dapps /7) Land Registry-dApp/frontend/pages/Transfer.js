import React from 'react'
import Navbar from './Components/Navbar'

const Transfer = () => {
  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl text-center m-4'>Transfer Ownership</h1>
        <div className='flex flex-col items-center m-8'>
        <h1>Enter Contract Address</h1>
        <input className='rounded w-7/12 m-2' />
        <h1>New Owner Address</h1>
        <input className='rounded w-7/12 mt-2' />
        <button className='bg-blue-400 text-2xl rounded px-3 mt-2'>Transfer</button>
        
        </div>
    </div>
  )
}

export default Transfer