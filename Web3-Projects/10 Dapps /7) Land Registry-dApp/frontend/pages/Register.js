import React from 'react'
import Navbar from './Components/Navbar'

const Register = () => {
  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl m-4 text-center'>Register your Land details</h1>
        <div className='flex flex-col items-center'>
        <h1>Country</h1>
        <input className='rounded w-7/12 ' />
        <h1>City</h1>
        <input className='rounded w-7/12 ' />
        <h1>Address</h1>
        <input className='rounded w-7/12 ' />
        <h1>Location Latitude</h1>
        <input className='rounded w-7/12 ' />
        <h1>Location Longitude</h1>
        <input className='rounded w-7/12 ' />
        <button className='bg-blue-400 text-2xl rounded px-3 mt-2'>Register</button>
        </div>
    </div>
  )
}

export default Register
