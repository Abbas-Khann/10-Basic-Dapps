import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import { ethers ,utils } from 'ethers';
import { VENDING_MACHINE_CONTRACT_ADDRESS, abi } from '../constants/constants';
import { useProvider, useSigner, useContract } from "wagmi";

const Home = () => {
  // state for darkMode
  const [darkMode, setDarkMode] = useState(false);
  // state to keep track of the remaining donuts
  const [remainingDonuts, setRemainingDonuts] = useState('');
  // state to keep track of amount of restock
  const [restockAmount, setRestockAmount] = useState(0);
  // state to keep track of purchase Amount
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  // state to keep track of the amount of donuts owned by the buyer
  const [ownedDonuts, setOwnedDonuts] = useState('');

  // fetching provider and signer using the provider hook in the wagmi library
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  console.log(signer, isError, isLoading)
  // using the useContract hook to fetch functions from the contract
  const contract = useContract({
        addressOrName: VENDING_MACHINE_CONTRACT_ADDRESS,
        contractInterface: abi,
        signerOrProvider: signer || provider ,
  });

  // get the remaining Donuts from the machine
  // we will use provider here since we are only reading from the blockchain
  const getRemainingDonuts = async () => {
    try{
      const remainingDonutsBalance = await contract.getDonutBalances().then((donut) => {
        return parseInt(donut._hex);
        // the function returns an object and we wanted to fetch and convert it's hex value so we used parseInt
      })
      // setting the state to the reaminingDonutsBalance variable 
      setRemainingDonuts(remainingDonutsBalance);
      console.log(remainingDonutsBalance)
    }
    // error handling
    catch(err) {
      console.error(err)
    }

  }
  
  // restockDonuts function will take an amount parameter
  // So we will input a certian amount we want to input inside the machine
  // We will be using signer here since we want to write to the blockchain 
  const restockDonuts = async (amount) => {
    try{
      const restockMachine = await contract.restock(amount);
      // setting isLoading to true, this is also provided by the signer Hook
      isLoading = true;
      // wait for the transaction to get mined
      await restockMachine.wait();
      isLoading = false;

    }
    // error handling
    catch(err) {
      console.error(err)
    }
  }


  // This function will also use a signer since we are writing to the blockchain again
  // We will enter a certain amount again to purchase from the machine
  const purchaseDonuts = async (amount) => {
    try{
      // the value of each donut is 0.001 eth which can also be found in the Smart Contract solidity code
      const value = amount * 0.001;
      // The purchase function is a payable function if you recheck the solidity code so it will return a value,
      // And in order to change that value we are using the parseEther method from ethersJS and changing it into a readable format
      const purchase = await contract.purchase(amount,{value: utils.parseEther(value.toString())});
      // setting isLoading to true
      isLoading = true;
      await purchase.wait();
      isLoading = false;
    }
    catch(err) {
      console.error(err)
    }
  }

  // This function will fetch the amount of donuts a user owns 
  const getOwnedDonuts = async () => {
    try{
      // similar process here for changing the object
      // In the parameter we are passing in the signer address so that we can directly read the amount
      const donuts = await contract.getOwnedDonuts(signer._address).then((donuts) => {
        return parseInt(donuts._hex);
      });
      // setting up the state to the new variable(donuts)
      setOwnedDonuts(donuts)
      console.log(donuts, "donuts");
    }
    // error handling
    catch(err) {
      console.error(err);
    }
  }

  // The next two functions are taking in the value and changing it to an integer since it returned a string after 1 value input
  const handleRestockAmount = (e) => {
    const getValue = e.target.value;
    const changeTypeValue = parseInt(getValue);
    setRestockAmount(changeTypeValue);
  }
 
  const handlePurchaseDonuts = (e) => {
    const getValue = e.target.value;
    const changeTypeValue = parseInt(getValue);
    setPurchaseAmount(changeTypeValue);
  }

  const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode)
  }
  

  return (
    <div className=''>
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <section
      className={`flex flex-col items-center justify-center transition-all duration-500 dark:w-screen h-screen dark:object-fill bg-cover ${darkMode ?`bg-[url('/images/dark.jpg')]` : `bg-[url(/images/light_.jpg)] opacity-100`}`}
      >
        <div className={`flex flex-col items-center rounded-xl justify-center ${!darkMode ?`bg-white/50 ` : `bg-violet-300/50 ` }  h-5/6 w-3/6`}>

        <div
        className=' w-full flex p-1.5 gap-1 items-center justify-center'
        >
      <div className='flex flex-col p-1.5 gap-1 items-center justify-between m-0'>

      <p
      className={` text-2xl text-center ${darkMode && ` text-white`}`}
      >Enter the amount of donuts<br/> you want to purchase</p>
      <p className='text-2xl'>👇</p>

      <input 
      className={`text-center outline-none w-5/12 py-2 text-2xl rounded-lg  ${darkMode && ` bg-white/50`}`}
      type="number"
      onChange={handlePurchaseDonuts}
      />
    
      <button
      className={`bg-red-300 rounded px-4 text-2xl py-2 mt-4  ${darkMode &&`bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white`}   `}
      onClick={() => purchaseDonuts(purchaseAmount)}
      >Purchase</button>
      {ownedDonuts && (<div
      className={` ${darkMode && ` text-white`} text-xl`}
      >
        You have purchased {ownedDonuts} donuts
      </div>)}

      </div>
     <div className='flex flex-col p-1.5 gap-1 items-center justify-between'>
  
      <p
      className={`  ${darkMode && ` text-white`} text-2xl text-center flex flex-col p-1.5 gap-1 items-center justify-center h-full `}
      >Restock the Vending Machine</p>
      <p className='text-2xl'>👇</p>

      <input 
      className={` outline-none text-center rounded-lg w-5/12 py-2 text-2xl ${darkMode && `  bg-white/50  `}`}
      type="number"
      onChange={handleRestockAmount}
      />

      <button
      className={`bg-red-300 rounded  px-4 text-2xl py-2 mt-4 ${darkMode &&`bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white`}  `}
      onClick={() => restockDonuts(restockAmount)}
      >Restock</button>
      </div>
    
      </div>
      <div
      className='flex flex-col items-center justify-center w-full h-3/6'
      >
      <p
      className={`  ${darkMode && ` text-white`} text-3xl  `}
      >Get the amount of donuts that you own</p>
      <p className='text-2xl'>👇</p>
      <button
      className={`bg-amber-600 rounded px-4 text-2xl py-2  ${darkMode && `bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white`} `}
      onClick={() => getOwnedDonuts()}
      >Donuts Amount owned</button>
     {ownedDonuts && ( <p
      className={` text-2xl ${darkMode && ` text-white`}`}
      >This address owns {ownedDonuts} donuts</p>
      )}
      <p
      className={`  ${darkMode && ` text-white`} text-3xl p-1 m-3 ` }
      >Donuts left in the machine</p>
      <p className='text-2xl'>👇</p>
      <button
      className={`bg-red-300 rounded px-4 text-2xl py-2 ${darkMode &&`bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white`}  `}
      onClick={getRemainingDonuts}
      >Donuts Remaining</button>
     {remainingDonuts && (

       <p
       className={` text-2xl ${darkMode && ` text-white`}`}
       >
      There are {remainingDonuts} donuts remaining in the machine!  
      </p>
        )}

      </div>
      
      </div>

      </section>
    </div>
  )
}

export default Home