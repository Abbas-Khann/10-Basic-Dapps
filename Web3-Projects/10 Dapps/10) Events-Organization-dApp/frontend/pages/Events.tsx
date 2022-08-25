import React from 'react'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'

const Events = () => {
  return (
    <div className='bg-[#10172a] min-h-screen'>
        <Navbar />
        <EventCard />
    </div>
  )
}

export default Events