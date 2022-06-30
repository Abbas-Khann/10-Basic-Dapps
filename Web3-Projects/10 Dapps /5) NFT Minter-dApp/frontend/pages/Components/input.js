import React, {useState} from 'react';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage';
const NFT_STORAGE_KEY = process.env.NFT_KEY
import { toast } from 'react-toastify';

const Input = (props) => {
  const { setMetaDataURL } = props
  // const [text,setText] = useState()
  const [file, setFile] = useState("");




    /**
  *
  * @param {string} image path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */
async function storeNFT(image, name, description) {
    
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    const token = nftstorage.store({
        image,
        name,
        description,
    })
    setMetaDataURL(token.url) ;
    return token.url ;
}


  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
    console.log("end");
  }
 return (
    <div
    className='w-11/12 mx-auto '
    >
    <form >
    <input 
     className="text-xl p-1 m-2 rounded ml-12 text-center"
     type="text" id="name" placeholder='Name Your NFT'/>
    <input className='text-xl p-1 m-2 rounded text-center'
     type="text" id="description" placeholder="Describe Your NFT" /> 
    <input 
    className='ml-12'
    type="file" id="image" onChange={handleUpload} accept="image/png, image/jpeg"/>
    
    <button 
    className='bg-red-200 py-1 px-3 rounded'
    type="button">Submit</button> 
    </form>
    </div>
  )
}

export default Input