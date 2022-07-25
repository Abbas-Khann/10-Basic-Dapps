import React from 'react'
import Records from './Components/Records'
import Table from './Components/Table'

const Patient = () => {

  

  return (
    
    <section className="h-screen bg-cover bg-[url('/img/doctorr.jpeg')] lg:bg-[url('/img/doctor.jpeg')]">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
        </style>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-80'>
            <h1 className='text-center text-white text-3xl mt-4'>Abbas Khan</h1>
            <div className='flex justify-around'>
            <Table />
            <Records />
            </div>
            <h1>Upload the records</h1>
        </div>
    </section>
  )
}

export default Patient