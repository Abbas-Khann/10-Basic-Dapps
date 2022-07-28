import React, {useState} from 'react'
import Records from './Components/Records'
import Reports from './Components/Reports'
import Table from './Components/Table'

const Patient = () => {
  const [fileName, setFileName] = useState('')
  const [hash, setHash] = useState('')

  const onChange = event => {
    setFileName(event.target.value)
  }

  // console.log(fileName)

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
            <Records onChange={onChange} setHash={setHash} fileName={fileName}/>
            </div>
            <div className='flex justify-center items-center'>
            <Reports fileName={fileName} hash={hash}/>
            </div>
        </div>
    </section>
  )
}

export default Patient