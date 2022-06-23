import React, {useState, useEffect, useRef} from 'react';
import Header from './Components/Header';
import List from './Components/List';
import Web3Modal from 'web3modal';
import { providers, Contract } from "ethers";
import { TODO_CONTRACT_ADDRESS, TO_DO_CONTRACT_ABI } from '../constants/constants';

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)

  const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false) => {
    // wallet Connection 
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    
    const { chainId } = await web3Provider.getNetwork();
    if(chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error('Change the network to Mumbai')
    }

    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }

  // Connect Wallet

  const connectWallet = async () => {
    try {
      // get the provider from web3Modal which in our case is Metamask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true)
      getTodos()
    }
    catch(err) {
      console.error(err)
    }

  }

  // const renderButton = () => {
  //   return(
  //     <button onClick={connectWallet}>Connect Your Wallet</button>
  //   )
  // }

  useEffect(() => {
    if(!walletConnected) {
      // Assign the web3Modal class to the reference object 
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false
      });
      connectWallet();
    }
  }, [walletConnected])

  
  const setTodo = async (text) => {
    const signer = await getProviderOrSigner(true)
    
    const contract = new Contract(
      TODO_CONTRACT_ADDRESS,
      TO_DO_CONTRACT_ABI,
      signer
      );
      const setTodos = await contract.setTodo(text);
      setLoading(true)
      await setTodos.wait()
      setLoading(false)
      getTodos()
      console.log(setTodos)
    }

  const getTodos = async () => {
    try {
      const provider = await getProviderOrSigner();
      const contract = new Contract(
        TODO_CONTRACT_ADDRESS,
        TO_DO_CONTRACT_ABI,
        provider
      );
      
      const todoListArray = await contract.getTodo();
      setTodoList(todoListArray)
      console.log(todoListArray)


    } catch(err) {
      console.error('error', err);
    }
  }

  const deleteTodos = async (idx) => {
    try{
      const signer = await getProviderOrSigner(true);
      const contract = new Contract(
        TODO_CONTRACT_ADDRESS,
        TO_DO_CONTRACT_ABI,
        signer
      );
      const deleteTodo = await contract.deleteToDo(idx);
      setLoading(true)
      await deleteTodo.wait();
      setLoading(false)
      getTodos();

    }
    catch(err) {
      console.error('delete Error', err)
    }

  }
    
  console.log("here", todoList)

  const renderTodos = todoList.map((todo, index) => {
    return <List todo={todo} deleteTodos={deleteTodos} idx={index} key={index} />
  })


  return (
    <main className={darkMode && 'dark'}>
      <div className='dark:bg-[#10172a] min-h-screen'>
        <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        getTodos={getTodos}
        setTodo={setTodo}
        />
        {/* <Todo /> */}
        {renderTodos}
        {/* {todoList.map((todo, index) => {
          return <List todo={todo} deleteTodos={deleteTodos} idx={index} />
        })} */}
        </div>
    </main>
  )
}

export default Home

// make the todos dynamic
// log the text value by targeting it
// Take the input text from the input box and save the todo but in the process make sure you keep the previous state
// delete the todo by clicking on the cross icon
// Remove the todo by clicking on the tick icon and alert a message saying are you sure you want to mark this task as completed?