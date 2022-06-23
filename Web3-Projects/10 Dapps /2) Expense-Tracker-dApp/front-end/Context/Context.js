import React,{createContext, useContext, useState, useRef, useEffect} from "react";
import Web3Modal from 'web3modal'
import { providers, Contract} from 'ethers'
import { EXPENSE_TRACKER_CONTRACT_ABI, EXPENSE_TRACKER_CONTRACT_ADDRESS } from "../constants/constants";


export const IndexContext = createContext();

const IndexProvider = ( {children} ) => {

  // here we created a state darkMode so that we could toggle it and have both light mode and darkMode in our app
  const [darkMode, setDarkMode] = useState(false);
  const [inputText, setInputText] = useState(''); // This state is used for the input text that will be rendered next to the amount of the item 
  const [transactionAmount, setTransactionAmount] = useState(0) // Amount
  const [transactionList, setTransactionList] = useState([]) // The main transactionList Array which will store all of the transactions
  const [walletConnected, setWalletConnected] = useState(false) //  This will check if our wallet is connected or not
  const [loading, setLoading] = useState(false) // Loading will be set to true when we are waiting for a transaction to be mined.
  const web3ModalRef = useRef(); // Creating a reference to the Web3 Modal which persists as long as the page is open

   /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */

    const getProviderOrSigner = async (needSigner = false) => {
    // Metamask connection
    // Since we store web3Modal as a reference we need to access the current value in order to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    
    // If the user is not Connected to the the goerli network throw an error and let them know 
    const { chainId } = await web3Provider.getNetwork();

    // Since the chainId of goerli is 5 we need to check the condition here
    if(chainId !== 5) {
            window.alert("Change the network to Goerli tf do you think you're doing dumbass");
            throw new Error('Changeeeee tf did i tell you dumbfuck????');
      }


    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer
    }

    return web3Provider

  };

  
  const toggleDarkMode = () => {
      // set the DarkMode to it's previous mode on toggle
      setDarkMode(prevMode => !prevMode)
  }
    
    
    const setTransaction = async () => {
        // Here in this case we're using the signer since we are writing data to the smart contract.
        const signer = await getProviderOrSigner(true);
        
        // Here we are creating a new instance of the contract
        const contract = new Contract(
            EXPENSE_TRACKER_CONTRACT_ADDRESS,
            EXPENSE_TRACKER_CONTRACT_ABI,
            signer
            );
            // calling the addTransaction function from the contract and passing in the necessary parameters
            const addTransactions = await contract.addTransaction(inputText, transactionAmount);
            // setLoading true since we want to make sure the transaction gets mined
            setLoading(true);
            await addTransactions.wait();
            // transaction mined so back to false
            setLoading(false)
            getTransactionExpenses()
            setInputText('')
            setTransactionAmount(0)
            console.log(setTransaction)
            
        }
        
        const getTransactionExpenses = async () => {
            try {
                // This time we are reading state from the blockchain so a provider will be used
                const provider = await getProviderOrSigner();
                // new instance again
                const contract = new Contract(
                    EXPENSE_TRACKER_CONTRACT_ADDRESS,
                    EXPENSE_TRACKER_CONTRACT_ABI,
                    provider
                    );
                    // fetching the getTransaciton function from the contract
                    const getContractTransactions = await contract.getTransaction();
                    // type conversion 
                    // mapping through everything that exists in our array and returning an object
                    const fetchListFromContract = getContractTransactions.map((transaction) => {
                        return {
                            text: transaction.text, // text here is the transaction.text
                            transactionAmount: parseInt(transaction.amount._hex) // conversion to an integer
                        }
                    })
                    // make sure you log this fetchListFromContract to the console to get a better understanding of what the object is returning
                    
                    setTransactionList(fetchListFromContract);
                    console.table(getContractTransactions)
                    console.log("FetchList",fetchListFromContract)
                    
                }
                catch(err) {
                    console.error(err)
                }
                
        }

        const deleteTransaction = async (index) => {
            try{
                const signer = await getProviderOrSigner(true);
                const contract = new Contract(
                    EXPENSE_TRACKER_CONTRACT_ADDRESS,
                    EXPENSE_TRACKER_CONTRACT_ABI,
                    signer
                )
                // same process here again but this time we're passing in the index so we can delete the particular component on click
                const newTransactionList = await contract.deleteTransactions(index);
                setLoading(true);
                await newTransactionList.wait();
                setLoading(false);
                getTransactionExpenses();
            }
            catch(err) {
                console.error(err)
            }
        }    
        
        // This function connects the metamask wallet 
        const connectWallet = async () => {
            try {
                // get the provider from web3Modal, Which in our case is Metamask
                await getProviderOrSigner();
                setWalletConnected(true);
                getTransactionExpenses();
              }
          
            catch(err) {
                console.error(err)
              }
          
        }
        // The useEffect hook is dependent on the dependancy array which in this hook is the walletConnected state. So everytime the walletConnected State changes this effect will be called
        useEffect(() => {
            if(!walletConnected) {
                // Assiging the web3Modal class to the reference object by setting it's `current` value
                web3ModalRef.current = new Web3Modal({
                  network: "goerli",
                  providerOptions: {},
                  disableInjectedProvider: false
            })
                connectWallet();
            }
          
        }, [walletConnected])
            
  return (
    <IndexContext.Provider value={ {darkMode, toggleDarkMode, setInputText, inputText, transactionAmount, setTransactionAmount, transactionList, setTransactionList, getTransactionExpenses, setTransaction, deleteTransaction} }>
        {children}
    </IndexContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(IndexContext)
}

export { IndexProvider }
