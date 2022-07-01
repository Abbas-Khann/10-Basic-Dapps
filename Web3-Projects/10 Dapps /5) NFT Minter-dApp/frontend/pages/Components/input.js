import React, {useState, useEffect} from 'react';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
// import { NFTStorage } from 'nft.storage';
// const NFT_STORAGE_KEY = process.env.NFT_KEY
import { toast } from 'react-toastify';

import nftStorage from './nftstorage'

const Input = (props) => {
  const [metaData, setMetaData] = useState("");
  const [img, setImg] = useState("")
  // const [text,setText] = useState()
 
    /**
  *
  * @param {string} image path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */
// const storeNFT = (img) => {
//     console.log("start")
//     // create a new NFTStorage client using our API key
//     const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

//     const name= "Sweet Memory" ;
//     const description = "This is a beautiful and sweet memory of yours "
//     console.log("upload")
//     const image = img 

//     // call client.store, passing in the image & metadata
//     // const token = nftstorage.store({
//     //     image,
//     //     name,
//     //     description,
//     // })

//     console.log("completed")

//     // setMetaData(token.ipfs) ;
//     // return token.url ;
//     // console.log(token.ipfs) ;
//     console.log("end")
// }
  // // Handles file upload event and updates state
  // function handleUpload(event) {
  //   setFile(event.target.files[0]);
  //   console.log("end");
  // }

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
    console.log(img, "hereeeee");
  };

  const handleForm = e => {
    e.preventDefault();
  }

 return (
    <div
    className='w-11/12 mx-auto '
    >
    <form 
    onChange={handleForm}
    >
    {/* <input 
     className="text-xl p-1 m-2 rounded ml-12 text-center"
     type="text" id="name" placeholder='Name Your NFT'/>
    <input className='text-xl p-1 m-2 rounded text-center'
     type="text" id="description" placeholder="Describe Your NFT" />  */}
    <input 
    className='ml-12'
    type="file" id="image" onChange={onImageChange} accept="image/png, image/jpeg"/>
    <img src={img} alt="" />
    <p>{metaData}</p>
    <button 
    className='bg-red-200 py-1 px-3 rounded' onClick={nftStorage(img)}
    type="button">Submit</button> 
    </form>
    </div>
  )
}

export default Input