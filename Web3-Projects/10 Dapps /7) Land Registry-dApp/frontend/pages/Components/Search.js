import React, {useState} from 'react'
import { useProvider, useContract, useSigner } from 'wagmi';
import { landContractABI } from '../../Constants/constants';

const Search = () => {
  const [addressInput, setAddressInput] = useState('')

  
  // const [country, setCountry] = useState('');
  // const [city, setCity] = useState('');
  // const [contractAddress, setContractAddress] = useState('');
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const [currentOwner, setCurrentOwner] = useState('');
  // const [prevOwner, setPrevOwner] = useState('');
  
  const provider = useProvider();
  const {data: signer} = useSigner();
  const landContract = useContract({
    addressOrName:'' ,
    contractInterface: landContractABI,
    signerOrProvider: signer || provider
  })
  
  const [dataFromBlockchain, setDataFromBlockchain] = useState([]);
  const [resultedData, setResultedData] = useState('');


  const[registeredData , setRegisteredData] = useState({
    country:'',
    city:'',
    contractAddress:'',
     latitude:'',
     longitude:'',
     currentOwner:'',
     prevOwner:''
  });

  function handleSearch(e){ //notused now
    const searchedData  = dataFromBlockchain.find(itm=>{ itm.contractAddress.includes(e.target.value)})
    // searched data should be a object 
    setResultedData(searchedData)
    // setAddressInput(e.target.value)
  }

  const handleAddressVal = (e) => {
    setAddressInput(e.target.value)
  }
  console.log("addressInput", addressInput)

  return (
    <div className='w-full'>
        <h1 className='text-center m-4 text-2xl sm:text-3xl'>Search For Registered Land</h1>
        <div className='mx-2 py-4 flex flex-col justify-evenly items-center'>
            <h1 className='sm:text-xl md:text-3xl mb-2'>Search for land by contract</h1>
            <input onChange={handleAddressVal} className='rounded w-5/12 mt-1 sm:py-2 mb-1 text-black text-center'/>
            <button className='bg-indigo-400 rounded ml-2 px-4 mt-2  hover:bg-sky-300 sm:text-2xl md:text-3xl'>Search</button>
        </div>
        <div className='flex items-center justify-center'>
        <div className='w-6/12 m-4'>

            <h1 className='sm:text-xl md:text-2xl py-2'>Country </h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>City </h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>Address </h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>Location Latitude</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>Location Longitude</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>Current Owner</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>Previous Owner</h1>
        </div>
        <div>
            <h1 className='sm:text-xl md:text-2xl py-2'>Afghanistan</h1> {/* resultedData.country      */}
            <h1 className='sm:text-xl md:text-2xl py-2'>Kabul</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1> 
            <h1 className='sm:text-xl md:text-2xl py-2'>1.093E</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>9.589N</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>0x7B4A8d0862F049E35078E49F2561630Fac079eB9</h1>
        </div>
        </div>
    </div>
  )
}

export default Search