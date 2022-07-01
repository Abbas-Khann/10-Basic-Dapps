import React, {useState} from 'react';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage';
import { NFT_KEY } from '../../env';
import { toast } from 'react-toastify';
import Axios from 'axios'

const Input = (props) => {
  const {setMetaDataURL} = props

  const [img, setImg] = useState("")
    /**
  *
  * @param {string} image path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */
const storeNFT = async(blob) => {
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_KEY })
    const description = "This is a beautiful and sweet memory of yours "

    const image = new File([blob],"Sweet Memory")
    // call client.store, passing in the image & metadata
    const token = await nftstorage.store({
        image,
        name,
        description,
    })

    console.log(token.url);
    setMetaDataURL(token.url) ;
    return token.url ;
}
  
  var FormData = require('form-data');
  let formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0])
    if(e.target && e.target.files[0]) {
      formData.append('file', e.target.files[0])
    }
    console.log("onfilechange", formData)
    const [file] = e.target.files;
    console.log(URL.createObjectURL(file)) ;
    setImg(URL.createObjectURL(file))
  }

  const submitFileData = () => {
    console.log("form data", formData);
    const token = storeNFT(img);
    // Axios.post('https://v2.convertapi.com/upload',
    // { formData }
    // )
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.error(err)
    // })
  }

 return (
    <div
    className='w-11/12 mx-auto mb-4'
    >
    
    <input 
     className="text-xl p-1 m-2 rounded ml-12 text-center"
     type="text" id="name" placeholder='Name Your NFT'/>
    <input className='text-xl p-1 m-2 rounded text-center'
     type="text" id="description" placeholder="Describe Your NFT" /> 
    <input 
    className='ml-12'
    type="file" name='image' onChange={onFileChange}
    
    />
    {/* <p>{metaData}</p> */}
    <button 
    className='inline-block px-8 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
    onClick={submitFileData}
    >
    Submit</button>
    <img src={img} alt="" />
    </div>
  )
}

export default Input