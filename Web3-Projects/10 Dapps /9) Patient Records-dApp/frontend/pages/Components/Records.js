import React, {useEffect, useState} from 'react'
import *  as IPFS  from 'ipfs-core'
import { useContract, useSigner, useProvider } from 'wagmi'
import { HEALTHCARE_CONTRACT_ABI, HEALTHCARE_CONTRACT_ADDRESS } from '../../Constants/constants';

const Records = ({onChange, setHash, fileName, selectedFile, setSelectedFile, hash}) => {
  const provider = useProvider();
	const { data: signer } = useSigner();
	const contract = useContract({
		addressOrName: HEALTHCARE_CONTRACT_ADDRESS,
		contractInterface: HEALTHCARE_CONTRACT_ABI,
		signerOrProvider: signer || provider
	})

  const [documentsData, setDocumentsData] = useState([])

  const [passingData , setPassingData] = useState();

  const addDataIPFS = async () => {
    try{

      const node = await IPFS.create();
      const data = selectedFile;
      const result = node.add(data);
      const resolvedPromise = result.then((promise) => setHash(promise.path))
      console.log("resolvedPromise", resolvedPromise)
      console.log(result)
      setTimeout(() => {
        // addDocuments(fileName, hash);
        setPassingData({
          fileName : fileName,
          hash : hash
        } )
        addDocuments()
     }, 5000) 
      return true;
    }
    catch(err){
      console.error(err)
    }
  }
  
  const addDocuments = async() => {
    try{
      const addDocs = await contract.addToDocsArr(passingData.fileName, passingData.hash);
      await addDocs.wait();
      await getDocumentsData();
    }
    catch(err){
      console.error(err)
    }
  }
  
  const getDocumentsData =  async () => {
    try{
      const getDocs = await contract.getDocsInfo();
      await getDocs;
      setDocumentsData(getDocs);
    }
    catch(err){
      console.error(err)
    }
  }

  console.log("documentsData State", documentsData)

  useEffect(() => {
    getDocumentsData();
  }, [])
//----------------------------------------------------

  return (
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-xl mb-4 '>Upload your documents here</h1>
        <input onChange={onChange} className='p-2 rounded text-black' placeholder='Enter your File Name'/>
        <input 
        onChange={(e) => setSelectedFile(e.target.files[0])}
        className='bg-white rounded mt-2 text-black' type="file"
        />
        <div>
        <button
        onClick={() => addDataIPFS()}
        className="bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 mt-2 text-white">
        Upload
        </button>
        </div>
    </div>
    
       
  )
}

export default Records