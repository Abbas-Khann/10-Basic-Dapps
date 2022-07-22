import React,{useState, useContext, createContext} from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import { JOB_BOARD_CONTRACT_ADDRESS, JOB_BOARD_CONTRACT_ABI } from "../Constants/constants";

export const IndexContext = createContext();

const IndexProvider= ( {children} ) => {

    // Fetching the provider and signer from Wagmi
    const provider = useProvider();
    const {data: signer} = useSigner();
    const contract = useContract({
        addressOrName: JOB_BOARD_CONTRACT_ADDRESS,
        contractInterface: JOB_BOARD_CONTRACT_ABI,
        signerOrProvider: signer || provider
    });

    // States here
    const [darkMode, setDarkMode] = useState(false);
    const [jobData, setJobData] = useState({
        title: "",
        CompanyName: "",
        JobDescription: "",
        EmploymentType: "",
        JobLocation: "",
        SalaryRange: 0,
        OrganisationUrl: "",
        ContactEmail: ""
    });








    
    const handleInputData = event => {
        setJobData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    }
    console.log(jobData) 
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return(
        <IndexContext.Provider value={ {toggleDarkMode, darkMode, handleInputData} }>
        {children}
        </IndexContext.Provider>
)

}

export const useGlobalContext = () => {
    return useContext(IndexContext)
}

export { IndexProvider }