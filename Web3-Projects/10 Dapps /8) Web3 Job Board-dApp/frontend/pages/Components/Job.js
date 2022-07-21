import Link from 'next/link'
import React from 'react'

const AllJobs = () => {
  return (
    <div className='flex flex-col justify-center p-6 bg-[#F9F9F9]'>
        <h1 className='text-2xl'>Junior Full Stack Developer</h1>
          <span className='text-[#83bdf6] text-xl'>at LearnWeb3</span>
          <div className='text-base flex justify-between'>
        <span className='bg-gray-300 rounded p-1'>Full Time</span>
        <span className='bg-gray-300 rounded p-1'>Remote</span>
        <span className='bg-gray-300 rounded p-1'>120k-180k</span>
          </div>
          <Link href='/description'>
          <a className='m-1 text-xl cursor-pointer text-blue-500 hover:text-blue-400 active:text-violet-300'>Job Description...</a>
          </Link>
    </div>
  )
}

export default AllJobs