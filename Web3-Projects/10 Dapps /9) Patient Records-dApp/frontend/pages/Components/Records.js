import React from 'react'

const Records = () => {
  return (
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-xl mb-4'>Upload your documents here</h1>
        <input className='p-2 rounded text-black' placeholder='Enter your File Name'/>
        <input className='bg-white rounded mt-2 text-black' type="file"/>
    </div>
       
  )
}

export default Records