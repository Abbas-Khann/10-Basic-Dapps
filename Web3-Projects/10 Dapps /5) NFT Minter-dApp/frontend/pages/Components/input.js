import React from 'react';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage';
const NFT_STORAGE_KEY = process.env.NFT_KEY

const Input = () => {

  const image = "img"
  const name = "hello"
  const description = "world"
    /**
  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
  * @param {string} imagethe path to an image file
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

    return token.url ;
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
    type="file" id="image" accept="image/png, image/jpeg"/>
    <input
    className='bg-red-200'
    type="button" id="upload" placeholder="Submit" />   
    
    </form>
    </div>
  )
}

export default Input