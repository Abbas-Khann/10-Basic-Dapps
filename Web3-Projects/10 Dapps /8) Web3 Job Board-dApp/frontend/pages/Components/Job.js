import Link from 'next/link'
import React from 'react'
import { useGlobalContext } from '../../Context/Context'

const AllJobs = () => {
  const {darkMode} = useGlobalContext();
  return (
    <div className={`${darkMode && 'dark'}`}> 
    <div className='flex flex-col justify-center p-6 bg-[#ebeef9] rounded dark:bg-[#222b44] dark:text-white my-4 '>
        <h1 className='text-2xl'>Junior Full Stack Developer</h1>
          <span className='text-[#83bdf6] text-xl'>at LearnWeb3</span>
          <div className='text-base flex justify-between lg:flex lg:justify-start'>
        <span className='bg-gray-300 rounded p-1 dark:text-black'>Full Time</span>
        <span className='bg-gray-300 rounded p-1 dark:text-black lg:mx-8'>Remote</span>
        <span className='bg-gray-300 rounded p-1 dark:text-black'>120k-180k</span>
          </div>
          <Link href='/description'>
          <a className='m-1 text-xl cursor-pointer text-blue-500 hover:text-blue-400 active:text-violet-300'>Job Description...</a>
          </Link>
    </div>
    
    </div>
  )
}

export default AllJobs