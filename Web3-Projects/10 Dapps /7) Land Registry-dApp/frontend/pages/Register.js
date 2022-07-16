import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import { useContract, useSigner, useProvider } from 'wagmi';
import { deployerContractABI, deployerContractAddress } from '../Constants/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from "copy-to-clipboard"; 


const Register = () => {

  const [copyText, setCopyText] = useState('')

  const provider = useProvider();
  const {data: signer} = useSigner();
  const deployerContract = useContract({
    addressOrName: deployerContractAddress,
    contractInterface: deployerContractABI,
    signerOrProvider: signer || provider
  })



 const [landData , setLandData] = useState({
  country:'',
  city:'',
  address:'',
  latitude:'',
  longitude:''
 });

console.log(landData)

 function handleLandData(e) {
  setLandData(prev=> {
    return{
      ...prev,
      [e.target.name] : e.target.value
     }
  })
 }

 const checkingToastify = () => {
  toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
 }

 //----------------------------------------------------------------
 //CONTRACT INTERACTION

 const registerData = async(val) => {
  try{
      if(val.country && val.city && val.address && val.latitude && val.longitude){
  
      const createNewLandContract = await deployerContract.create(val.country, val.city, val.address, val.latitude, val.longitude);

      createNewLandContract.wait();

      console.log("Transaction details", createNewLandContract);
      getNewlyDeployedContractAddress();
}
  }
  catch(err){
    console.log(err)
  }
 }


 const getNewlyDeployedContractAddress = async() => {
  try{
    const deployedContractAddress = deployerContract.getDeployedContractAddress();
    await deployedContractAddress;
    console.log("Address here :", deployedContractAddress)
    const addressToCopy = deployedContractAddress.then((promise) => setCopyText(promise));
    navigator.clipboard.writeText(copyText);
    toast.success('Address copied to clipboard')
    // console.log("alertValue", alertValue)
    // alert("Contract Address:",alertValue)
    // copy(alertValue)
  }
  catch(err) {
    console.error(err)
  }
 }

 const fetchAllContracts = async () => {
  try{
    const allDeployedContracts = deployerContract.getContractAddresses();
    await allDeployedContracts;
    console.log("All addresses", allDeployedContracts)
  }
  catch(err) {
    console.error(err)
  }
 }


 useEffect(() => {
  checkingToastify()
    fetchAllContracts();
 }, [])
//  const handleCopyText = (e) => {
//     setCopyText(e.target.value);
//  }

//  const copyToClipboard = () => {
//   copy(copyText);
//   alert("copied to clipboard")
//  }

 //----------------------------------------------------------------
  return (
    <div className="bg-[#10172a] h-screen">
        <Navbar />
        <h1 className='text-2xl m-4 text-center sm:text-2xl md:text-3xl'>Register your Land details</h1>
        <div className='flex items-center justify-center w-8/12 mx-auto'>
            <div className=''>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Country</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>City</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Address</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Location Latitude</h1>
        <h1 className='sm:text-2xl md:text-3xl m-1'>Location Longitude</h1>
            </div>
            <div className='flex flex-col w-11/12 items-end '>
        <input onChange={handleLandData} name="country" className='rounded w-5/12 sm:w-3/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='country...'/>
        <input onChange={handleLandData} name="city" className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='city...'/>
        <input onChange={handleLandData} name="address" className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='address...'/>
        <input onChange={handleLandData} name="latitude" className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='latitude...'/>
        <input onChange={handleLandData} name="longitude" className='rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black' placeholder='longitude...'/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button onClick={()=>registerData(landData)} className='bg-blue-400 text-2xl rounded px-4 mt-2 py-2'>Register</button>
        </div>
        
    </div>
  )
}

export default Register
