import React from 'react'
import Job from './Components/Job'
import Navbar from './Components/navbar'
import { useGlobalContext } from '../Context/Context'

const AvailableJobs = () => {
    const {darkMode} = useGlobalContext();
  return (
    <div className={`${darkMode && 'dark'}`}>
        <section className='dark:bg-[#10172a] h-screen'>
        <Navbar />
        <Job />
        </section>
    </div>
  )
}

export default AvailableJobs