import React, {useState} from 'react'

const Records = () => {

  const [fileName, setFileName] = useState('')

  const onChange = event => {
    setFileName(event.target.value)
  }

  console.log(fileName)

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