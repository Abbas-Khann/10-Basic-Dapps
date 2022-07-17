import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import { deployerContractAddress, deployerContractABI } from '../Constants/constants'
import { useContract, useProvider, useSigner } from 'wagmi'

const Transfer = () => {

  const [address, setAddress] = useState('');
  const [newOwnerAddress, setNewOwnerAddress] = useState('');

  const provider = useProvider();
  const {data: signer} = useSigner();
  const contract = useContract({
    addressOrName:  address,
    contractInterface: deployerContractABI,
    signerOrProvider: signer || provider
  })

  const changeOwner = async (val) => {
    try{
        const changeLandOwner = await contract.changeOwner(val.newOwnerAddress);
        await changeLandOwner.wait()
        console.log(changeLandOwner, "Change")
    }
    catch(err){
      console.error(err)
    }
  }


  const handleAddresses = e => {
    setAddress(e.target.value);
    setNewOwnerAddress(e.target.value);
    console.log(address, newOwnerAddress)
  }


  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl text-center m-4 sm:text-2xl md:text-3xl'>Transfer Ownership</h1>
        <div className='flex items-center justify-center w-8/12 mx-auto'>

        <div className=''>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Enter Contract Address</h1>
        <h1 className='sm:text-2xl md:text-3xl'>New Owner Address</h1>
        </div>
        <div className='flex flex-col w-9/12 items-center'>

        <input onChange={handleAddresses} className='rounded w-8/12 m-2 py-2 text-black'/>
        <input onChange={handleAddresses} className='rounded w-8/12 m-2 py-2 text-black'/>
        
        </div>
        </div>
        <div className='flex items-center justify-center'>
        <button onClick={() => changeOwner(newOwnerAddress)} className='bg-blue-400 text-2xl rounded px-4 py-2 mt-12'>Transfer</button>
        </div>
    </div>
  )
}

export default Transfer