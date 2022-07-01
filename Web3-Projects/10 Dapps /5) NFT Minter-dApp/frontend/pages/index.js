import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Components/Navbar'
import styles from '../styles/Home.module.css'
import Input from "./Components/Input"
import Button from './Components/Button';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [metaDataURL,setMetaDataURL] = useState("");
  const [trackImage, setTrackImage] = useState(false)
  const [minted, setMinted] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

    
  return (
    <div className={`${darkMode ? `bg-[#10172a]` : `bg-gradient-to-l from-sky-500 to-emerald-200`} flex flex-col items-center justify-start gap-2 ${trackImage ? `h-fit` : `h-screen`}`} >
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
      {minted &&  
      <a
      className="text-lg font-medium  text-white cursor-pointer underline"
      href="https://testnets.opensea.io/collection/khannft">
        Here is your NFT ➡️
      </a> 
      }
      <Input
      setMetaDataURL={setMetaDataURL}
      setTrackImage={setTrackImage}
      trackImage={trackImage}
      />
      {trackImage && <Button metaDataURL={metaDataURL} setMinted={setMinted} />}
      <ToastContainer />
      </div>
    </div>
  )
}

export default Home