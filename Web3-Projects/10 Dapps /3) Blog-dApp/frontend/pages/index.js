import React, {useState, useRef, useEffect} from 'react'
import Navbar from './Components/Navbar'
import AddBlog from './Components/AddBlog'
import BlogCard from './Components/BlogCard'
import Web3Modal from 'web3modal'
import { providers, Contract } from 'ethers'
import { BlogContractAddress, BlogContractAbi } from '../constants/constants'

const Home = () => {
  // const [imgUrl, setImgUrl] = useState('')
  const [blogs, setBlogs] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [modal, setModal] = useState(false)
  // Will keep track of wallet connection 
  const [walletConnected, setWalletConnected] = useState(false)
  // will be used when we are waiting for a transaction to be mined
  const [loading, setLoading] = useState(false)
  // create a reference to the web3Modal 
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider)

    const { chainId } = await web3Provider.getNetwork()
    // if the user is not connected to the correct network throw an error and let them know which network they should connect to
    if(chainId !== 80001) {
      window.alert("Change the network to mumbai");
      throw new Error("Change Network to Polygon Testnet")
    }
    
    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }

  const addBlogPosts = async (url, title, type, description) => {
    // we need a signer here since this is a write transaction 
    const signer = await getProviderOrSigner(true);
    const contract = new Contract(
      BlogContractAddress, 
      BlogContractAbi,
      signer
    )
    // fetching addBlogPost() function from the contract and passing in the necessary parameters
    const addBlogs = await contract.addBlogPost(url, title, type, description);
    setLoading(true);
    // waiting for the transaction to be mined
    await addBlogs.wait();
    getBlogPosts();
    setLoading(false);
    console.log("addBlogs", addBlogs)  
  }

  const getBlogPosts = async () => {
    try {
      // Using a provider since we are reading from smart contract
      const provider = await getProviderOrSigner();
      const contract = new Contract(
        BlogContractAddress,
        BlogContractAbi,
        provider
        )
        // fetching getBlogPost() function from the contract
        const getBlogs = await contract.getBlogPosts();
        setBlogs(getBlogs)
        console.table(blogs)
      }
      catch(err){
        console.error(err)
      }
      
    }

    const deleteBlogPosts = async (index) => {
      try{
        const signer = await getProviderOrSigner(true);
        const contract = new Contract(
          BlogContractAddress,
          BlogContractAbi,
          signer
        )
        // passing in the parameter to delete the particular selected blog
        const deleteBlogs = await contract.deleteBlogPosts(index);
        setLoading(true);
        await deleteBlogs.wait();
        setLoading(false)
        getBlogPosts();
      }
      catch(err){
        console.error(err)
      }

    }


    console.log(blogs)

    // mapping through the blogs array which consists of the data and render the BlogCard component 
    const getDynamicBlogs = blogs.map((blog, index) => {
      return <BlogCard key={index} darkMode={darkMode} {...blog} index={index} deleteBlogPosts={deleteBlogPosts}
      imgUrl={blog.url}
      />
    })


  const connectWallet = async () => {
      try{
        // get the provider from web3Modal which in our case is MetaMask
        // When used for the first time it prompts the user to connect their wallet
        await getProviderOrSigner();
        setWalletConnected(true);
      }

      catch(err) {
        console.error(err)
      }
  }

  useEffect(() => {
    // if wallet is not connected create a new instance of web3Modal and connect the wallet
    if(!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false
      })
      connectWallet()
      getBlogPosts();
    }

  }, [walletConnected])


  const toggleModal = () => {
    setModal(prevState => !prevState)
  }

  
  return (
    <main
      className={`${darkMode && 'dark'} dark:bg-[#10172a]`}
      >
        <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleModal={toggleModal}
        />
        <div
        className="dark:bg-[#10172a]"
        >
          {modal && 
          <AddBlog 
          toggleModal={toggleModal}
          addBlogPosts={addBlogPosts}
          />
        }
       
          </div>

        <div
        className="flex flex-wrap dark:bg-[#10172a]"
        >

        {getDynamicBlogs}

        </div>
        <button
        onClick={getBlogPosts}
        >

        </button>
      </main>
    
  )
}

export default Home