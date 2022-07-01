import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Components/Navbar'
import styles from '../styles/Home.module.css'
import { useProvider, useSigner, useContract } from 'wagmi'
import Input from "./Components/Input"
import { NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI } from '../Constants/constants'
import Button from './Components/Button';



const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [metaDataURL,setMetaDataURL] = useState("");

  const provider = useProvider();
  const {data: signer, isError, isLoading} = useSigner();
  
  const contract = useContract({
    addressOrName: NFT_CONTRACT_ADDRESS,
    contractInterface: NFT_CONTRACT_ABI,
    signerOrProvider: signer, provider
  })

  // const nftContract = useContract({
  //   addressOrName: '',
  //   contractInterface: abi,
  //   signerOrProvider: signer || provider,
  // })
  const mint = async () => {
    if (metaDataURL !== ""){

      const tx = await contract.mintNFT(metaDataURL) ;
      await tx.wait();

      toast.success(`NFT minted Successfully`);
      console.log("DONE")      
    }
    else
    {
      toast.log("Please upload an image and then mint");
      console.error("Nope!!!")
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
      <ToastContainer />
      <span 
      className={`text-2xl my-3 ${darkMode ? `text-white` : `text-black` }`}
      >Store your Memories in a Decentralized Manner</span>
      <div className={`${styles.cards} flex flex-col mx-1.5 py-1.5 w-2/4 h-3/5`}>
        <div className={styles.logo}><span className={styles.log1} >NFT</span><span className={styles.log2}>HUB</span> </div>
      
      <Input
      setMetaDataURL={setMetaDataURL}
      />
        <Button />
     
      </div>
    </div>
  )
}

export default Home