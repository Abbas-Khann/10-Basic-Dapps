import React, {useEffect, useState} from 'react'
import *  as IPFS  from 'ipfs-core'

const Records = ({onChange, setHash}) => {
  // First off i need to push hello world to ipfs for testing purposes
  // Secondly i need to get the data aswell
  // after that i need to set the input box up to the adding data to IPFS and test it by getting the data
  // After i get the CID's i need to fetch the addToDocs function from the backend and push this value through the signer to the blockchain
  // const [path, setPath] = useState('')

  const addDataIPFS = async () => {
    const node = await IPFS.create();
    const data = 'What up dawg!'
    const result = node.add(data);
    const resolvedPromise = result.then((promise) => console.log("resolvedPromise:", setHash(promise.path)))
    console.log(result)
  }
  // getDataIPFS("QmYjtnHhxgaqbSuQW9Xwj2g1EEWJYqaynhnFf6MXHd8SrT")

  // console.table(path)


  useEffect(() => {
    addDataIPFS()
    // getDataIPFS()
    // testSaveNameToIpfs();
  }, [])


  return (
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-xl mb-4 '>Upload your documents here</h1>
        <input onChange={onChange} className='p-2 rounded text-black' placeholder='Enter your File Name'/>
        <input className='bg-white rounded mt-2 text-black' type="file"/>
        <div>
        <button 
        className="bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 mt-2 text-white">
        Upload
        </button>
        </div>
    </div>
    
       
  )
}

export default Records