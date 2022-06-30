import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import styles from '../styles/Home.module.css'
import { useProvider, useSigner, useContract } from 'wagmi'
import Input from "./Components/Input"
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../Constants/constants'


const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [metadataURL,setMetaDataURL] = useState("");

  const provider = useProvider();
  const {data: signer, isError, isLoading} = useSigner();
  
  const mint = async() => {
    if (metadataURL !== ""){
      const nftContract = useContract({
        addressOrName: '',
        contractInterface: abi,
        signerOrProvider: signer || provider,
      })

      const tx = await nftContract.mintNFT(metadataURL) ;
      await tx.wait();

      console.log(`NFT mineted for your memory`)      
    }else{
      console.log("Please upload and image and then mints")
    }
    
  }
  

  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

    
  return (
    <div className={`${darkMode ? `bg-[#10172a]` : `bg-gradient-to-l from-sky-500 to-emerald-200`} flex flex-col items-center justify-start gap-2 h-screen`} >
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <div className={`${styles.cards} flex flex-col mx-1.5 py-1.5 w-2/4 h-3/5`}>
        <div className={styles.logo}><span className={styles.log1} >NFT</span><span className={styles.log2}>HUB</span> </div>
      <span 
      className={`text-xl ${darkMode ? `text-white` : `text-black` }`}
      >A decentralized way to store your memories</span>
      {/* <span
      className={`text-xl ${darkMode ? `text-white` : `text-black` }`}
      >Are you worried that your private moments could be leaked in public??</span> */}
      <span 
      className={`text-xl ${darkMode ? `text-white` : `text-black` }`}>
       Now you can store your special moments in a decentralized manner </span>
      <Input/>
      </div>
    </div>
  )
}

export default Home