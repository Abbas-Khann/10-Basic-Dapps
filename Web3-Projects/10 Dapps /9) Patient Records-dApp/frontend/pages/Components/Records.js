import React, {useState} from 'react'
import Reports from './Reports'

const Records = ({onChange}) => {


  return (
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-xl mb-4 '>Upload your documents here</h1>
        <input onChange={onChange} className='p-2 rounded text-black' placeholder='Enter your File Name'/>
        <input className='bg-white rounded mt-2 text-black' type="file"/>
        <div>
        <button className="bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 mt-2 text-white">Upload</button>
        </div>
    </div>
    
       
  )
}

export default Records