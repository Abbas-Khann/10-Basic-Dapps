import React, {useState} from 'react'
import Records from './Components/Records'
import Table from './Components/Table'

const Patient = () => {
  const [fileName, setFileName] = useState('')
  const [hash, setHash] = useState('')
  const [selectedFile, setSelectedFile] = useState([]);

  const onChange = event => {
    setFileName(event.target.value)
  }

  console.log("selectedFile", selectedFile)
  console.log("hash", hash)

  return (
    <section className="h-screen bg-cover bg-[url('/img/doctorr.jpeg')] lg:bg-[url('/img/doctor.jpeg')]">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
        </style>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-80'>
            <h1 className='text-center text-white text-3xl mt-4'>Your Admin</h1>
            <div className='sm:flex justify-evenly sm:py-20'>
            <Table />
            <Records onChange={onChange} setHash={setHash} fileName={fileName} hash={hash} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
            </div>
            <div className='flex justify-center items-center'>
              {hash && (
                <div className='flex flex-col'>
                <h1 className='text-2xl text-white text-center my-2'>{fileName}</h1>
                <a 
                href={`ipfs.io/ipfs/${hash}`}
                target="_blank"
                className='text-2xl text-blue-400 border-b-sky-500 border-b-2'>Click here to see it in action</a>
                </div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Patient