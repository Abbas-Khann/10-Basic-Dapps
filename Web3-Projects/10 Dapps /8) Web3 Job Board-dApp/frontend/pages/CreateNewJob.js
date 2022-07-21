import React from 'react'
import { darkMode } from '../tailwind.config'
import Navbar from './Components/navbar'
import { useGlobalContext } from '../Context/Context'

const CreateNewJob = () => {
    const {darkMode} = useGlobalContext();
  return (
    <main className={`${darkMode && 'dark'}`}>
        <Navbar />
        <section className='dark:bg-[#10172a] dark:text-white'>

        <div className='flex justify-center items-center'>
            <h1 className='text-3xl text-center my-4'>Add a New Job</h1>
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-recruiter-recruitment-agency-flaticons-flat-flat-icons-4.png"/>
        </div>
        
            <div className='bg-sky-0 flex flex-col p-5'>
                <h1 className='text-xl '>Enter your Job title<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Job title...' />
                <h1 className='text-xl '>Enter your Company Name<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Company Name...' />
                <h1 className='text-xl '>Enter the Job Description and requirements<span className='text-red-400'>*</span></h1>
                <textarea className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Job title...' />
                <h1 className='text-xl '>Enter the Employment Type<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Part Time, full time etc...' />
                <h1 className='text-xl '>Enter your Job Location<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Location...' />
                <h1 className='text-xl '>Enter the Salary Range<span className='text-red-400'>*</span></h1>
                <input type="number" className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Salary....' />
                <h1 className='text-xl '>Enter your Organization Url<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Website etc...' />
                <h1 className='text-xl '>Enter your Contact Email<span className='text-red-400'>*</span></h1>
                <input className='border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none' placeholder='Company Email...' />

        </div>
        </section>
    </main>
  )
}

export default CreateNewJob