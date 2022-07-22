import React,{useState, useContext, createContext} from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import { JOB_BOARD_CONTRACT_ADDRESS, JOB_BOARD_CONTRACT_ABI } from "../Constants/constants";

export const IndexContext = createContext();

const IndexProvider = ( {children} ) => {
    
    // States here
    const [darkMode, setDarkMode] = useState(true);
    const [indexData , setIndexData] = useState('');
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return(
        <IndexContext.Provider value={ {toggleDarkMode, darkMode,  indexData , setIndexData} }>
        {children}
        </IndexContext.Provider>
)

}

export const useGlobalContext = () => {
    return useContext(IndexContext)
}

export { IndexProvider }