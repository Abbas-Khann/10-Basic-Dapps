import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='bg-[#10172a] min-h-screen'>
      <Navbar />
      <div className='p-10 md:flex items-center justify-center md:py-44'>
        <div className='text-white my-6'>
        <h1 className='text-3xl border-b-4 border-blue-300 w-80 md:w-96 md:text-4xl'>Create and Join Events</h1>
        <p className='text-lg md:text-lg my-2 text-[#9CB4CC]'>This dApp allows you to create new events and join other events created by other people</p>
        <Link href="/CreateEvent">
        <button className='bg-blue-500 rounded-full w-72 py-2 text-white hover:bg-blue-400 text-center md:w-52'>
          Create Event
        </button>
        </Link>
        </div>
        <div className='md:ml-40'>
        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/350/000000/external-events-dance-flaticons-flat-flat-icons-2.png"/>
        </div>

      </div>

    </div>
  )
}

export default Home
