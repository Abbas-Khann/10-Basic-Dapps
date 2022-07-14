import React from 'react'

const Search = () => {
  return (
    <div className='w-full'>
        <h1 className='text-center m-4 text-2xl'>Search For Registered Land</h1>
        <div className='mx-2 py-4 flex flex-col justify-evenly items-center'>
            <h1>Search for land by contract</h1>
            <input className='rounded w-7/12 mt-1' />
            <button className='bg-indigo-400 rounded ml-2 px-2 mt-2 hover:bg-sky-300'>Search</button>
        </div>
        <div className='break-all text-center'>

            <h1 className=''>Country</h1>
            <span className=''>Afghanistan</span>
            <h1 className=''>City</h1>
            <h1 className=''>Kabul</h1>
            <h1 className=''>Address</h1>
            <h1 className=''>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1> 
            <h1 className=''>Location Latitude</h1>
            <h1 className=''>1.093E</h1>
            <h1 className=''>Location Longitude</h1>
            <h1 className=''>9.589N</h1>
            <h1 className=''>Current Owner</h1>
            <h1 className=''>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1>
            <h1 className=''>Previous Owner</h1>
            <h1 className=''>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1>
        </div>
    </div>
  )
}

export default Search