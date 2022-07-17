import React, {useState, useEffect} from 'react'
import { useProvider, useContract, useSigner } from 'wagmi';
import { landContractABI } from '../../Constants/constants';

const Search = () => {
  const [addressInput, setAddressInput] = useState('')

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [landAddress, setLandAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [currentOwner, setCurrentOwner] = useState('');
  const [prevOwner, setPrevOwner] = useState('');
  
  const provider = useProvider();
  const {data: signer} = useSigner();
  
    const landContract = useContract({
    addressOrName: addressInput,
    contractInterface: landContractABI,
    signerOrProvider: signer || provider
  })
  

  const getCountryName = async () => {
    try{
      const fetchCountry = await landContract.getCountry();
      await fetchCountry;
      setCountry(fetchCountry)
      console.log("country state:", country);
    }
    catch(err){
      console.error(err)
    }
}

const getCityName = async () => {
  try{
    const fetchCity = await landContract.getCity();
    await fetchCity;
    setCity(fetchCity)
    console.log("city state", city);
  }
  catch(err) {
    console.error(err)
  }
}

const getPropertyAddress = async() => {
  try{
    const fetchLandAddress = await landContract.getLandAddress();
    await fetchLandAddress;
    setLandAddress(fetchLandAddress)
    console.log("House Address:", landAddress)
  } 
  catch(err) {
    console.error(err)
  }
}

const getLatitude = async () => {
  try{
    const fetchLatitude = await landContract.getLatitude();
    await fetchLatitude;
    setLatitude(fetchLatitude)
    console.log("latitude:", latitude)
  }
  catch(err) {
    console.error(err)
  }
}


const getLongitude = async () => {
  try{
    const fetchLongitude = await landContract.getLongitude();
    await fetchLongitude;
    setLongitude(fetchLongitude)
    console.log("latitude:", longitude)
  }
  catch(err) {
    console.error(err)
  }
}

const getCurrentOwner = async () => {
  try{
    const currOwner = await landContract.getOwner();
    await currOwner;
    setCurrentOwner(currOwner);
    console.log("Curr Owner state:", currentOwner);
  }
  catch(err) {
    console.error(err)
  }
}

const getPrevOwner = async () => {
  try{
    const fetchPreviousOwner = await landContract.getPreviousOwner();
    await fetchPreviousOwner;
    setPrevOwner(fetchPreviousOwner)
    console.log("prevOwner state:", prevOwner)
  }catch(err){
    console.log(err)
  }
}
  const handleAddressVal = (e) => {
    setAddressInput(e.target.value)
  }
  console.log("addressInput", addressInput)

  
function runAllFunctions(){
  getCountryName();
  getCityName();
  getPropertyAddress();
  getLatitude();
  getLongitude();
  getCurrentOwner();
  getPrevOwner();
}

useEffect(() => {
  getCountryName();
  getCityName();
  getPropertyAddress();
  getLatitude();
  getLongitude();
  getCurrentOwner();
  getPrevOwner();
}, [])
  return (
    <div className='w-full '>
        <h1 className='text-center m-4 text-2xl sm:text-3xl'>Search For Registered Land</h1>
        <div className='mx-2 py-4 flex flex-col justify-evenly items-center'>
            <h1 className='sm:text-xl md:text-3xl mb-2'>Search for land by contract</h1>
            <input onChange={handleAddressVal} className='rounded w-5/12 mt-1 sm:py-2 mb-1 text-black text-center'/>
            <button onClick={runAllFunctions} className='bg-indigo-400 rounded ml-2 px-4 mt-2  hover:bg-sky-300 sm:text-2xl md:text-3xl'>Search</button>
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
            <h1 className='sm:text-xl md:text-2xl py-2'>{country}</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>{city}</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>{landAddress}</h1> 
            <h1 className='sm:text-xl md:text-2xl py-2'>{latitude}</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>{longitude}</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>{currentOwner}</h1>
            <h1 className='sm:text-xl md:text-2xl py-2'>{prevOwner}</h1>
        </div>
        </div>
    </div>
  )
}

export default Search