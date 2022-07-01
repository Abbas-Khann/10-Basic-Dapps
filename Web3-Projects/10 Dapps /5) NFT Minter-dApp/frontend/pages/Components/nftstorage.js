import React from 'react'
import { NFTStorage } from 'nft.storage';
const NFT_STORAGE_KEY = process.env.NFT_KEY

const nftstorage = (img) => {
        console.log("start")
        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
    
        const name= "Sweet Memory" ;
        const description = "This is a beautiful and sweet memory of yours "
        console.log("upload")
        const image = img 
    
        // call client.store, passing in the image & metadata
        const token = nftstorage.store({
            image,
            name,
            description,
        })
    
        console.log("completed")
    
        // setMetaData(token.ipfs) ;
        // return token.url ;
        // console.log(token.ipfs) ;
        console.log("end")
  return (
    <div></div>
  )
}

export default nftstorage