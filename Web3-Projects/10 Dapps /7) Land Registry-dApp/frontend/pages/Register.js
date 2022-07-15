import React from 'react'
import Navbar from './Components/Navbar'

const Register = () => {
  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl m-4 text-center sm:text-2xl md:text-3xl'>Register your Land details</h1>
        <div className='flex items-center justify-center w-8/12 mx-auto'>
            <div className=''>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Country</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>City</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Address</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Location Latitude</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Location Longitude</h1>
            </div>
            <div className='flex flex-col w-11/12 items-end '>
        <input className='rounded w-5/12 sm:w-3/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='country...'/>
        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='city...'/>
        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='address...'/>
        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='latitude...'/>
        <input className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='longitude...'/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='bg-blue-400 text-2xl rounded px-4 mt-2 py-2'>Register</button>
        </div>
    </div>
  )
}

export default Register
