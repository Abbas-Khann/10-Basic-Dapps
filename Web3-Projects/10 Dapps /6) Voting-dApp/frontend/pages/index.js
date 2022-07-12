import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import { VOTING_DAPP_ADDRESS, VOTING_DAPP_ABI } from '../constants/constants';
import { useContract, useProvider, useSigner } from 'wagmi';
import { utils } from 'ethers';
 
// I need to be able to fetch the ID and render the amount of votes each candidate has got
// Test it with payable

const Home = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [amount, setAmount] = useState(0);
  const [votersAddresses, setVotersAddresses] = useState([])
  const [candidatesInfo, setCandidatesInfo] = useState()

  // const votingFixedValue = 0.1;


  const provider = useProvider();
  const {data: signer, isLoading} = useSigner();
  const contract = useContract({
    addressOrName: VOTING_DAPP_ADDRESS,
    contractInterface: VOTING_DAPP_ABI,
    signerOrProvider: signer || provider
  })

  const fetchCandidatesData = async () => {
    try{
      let arr = [];
      for(let i = 0; i < 2; i++) {
        const candidates = await contract.candidates(i)
        // console.log("candidate Var", candidates)
        .then((candidate) => {
          arr = [
            ...arr,
            {id: i + 1, name: candidate[0], votes: candidate[1]},
          ]
          setCandidatesInfo(arr);
        })
      }
    }
    catch(err){
      console.error(err)
    } 
  }


  console.log(candidatesInfo)


  const voteForCandidate = async (id) => {
    try{
      // const value = 0.2;
      // console.log("value in line 1", value)
      // const valueToInt = parseInt(value);

      // console.log(valueToInt, "os ogura")
      // const vote = await contract.vote(amount, {value: utils.parseEther(value.toString())});
      // isLoading = true;
      const vote = await contract.vote(id);
      await vote.wait();
      getVotersAddresses()
      // isLoading = false;

    }
    catch(err){
      console.error("err", err)
    }
  }
  
  const getVotersAddresses = async () => {
    try{
      const voters = await contract.getAddressesArray();

      setVotersAddresses(voters)
    }
    catch(err) {
      console.error(err)
    }
  }

  const allVoters = votersAddresses.map((address) => {
    return <h1 className='text-xl py-1'>{address}</h1>
  })

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  const handleVoting = (event) => {
    const getValue = event.target.value;
    const changeToInteger = parseInt(getValue);
    setAmount(changeToInteger)
  }

  useEffect(() => {
    fetchCandidatesData();
      getVotersAddresses();
  }, [])
  return (
    <main
    className={`${darkMode && 'dark'}  bg-[#495C83] h-screen `}>
      <div
      className='dark:bg-[#10172a] h-screen'
      >
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <div className='bg-[#C8B6E2] '> 
      <h1 className=' text-center text-4xl font-bold text-gray-900  '>Candidates</h1>
      <div
      className='flex flex-col items-center justify-between max-w-4xl rounded mx-auto'
      >
     <table className='sm:w-8/12 w-6/12 text-sm	sm:text-xl'>
      <tbody className='flex items-center justify-around bg-white rounded m-4'>
        <td className='  p-2 ml-4'>ID</td>
        <td className='mr-16 font-bold'>Candidates Name</td>
        <img src="https://img.icons8.com/ios/48/000000/name--v1.png"/>

        <td>Votes</td>
      </tbody>
     </table>
     {/* {setInterval(() => {
       candidatesInfo.map((item) => {
        return <table className='sm:w-8/12 text-2xl'>
        <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
          <td className='  p-2'>1</td>
          <td className='mr-16 font-bold'>Orange Julius</td>
          <img src="https://img.icons8.com/color/48/000000/donald-trump.png"/>
          <td className=' '>sds</td>
        </tbody>
       </table>
       })
    }, 5000)} */}
        <table className='sm:w-8/12 text-2xl'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className='  p-2'>1</td>
        <td className='mr-16 font-bold'>Orange Julius</td>
        <img src="https://img.icons8.com/color/48/000000/donald-trump.png"/>
        <td className=' '>1</td>
      </tbody>
     </table>
     <table className='sm:w-8/12 text-2xl'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className=' p-2'>2</td>
        <td className='mr-16 font-bold'>Stuttering Joe</td>
        <img src="https://img.icons8.com/color/48/000000/joe-biden.png"/>
        <td className=' '>2</td>
      </tbody>
     </table>
      </div>
      </div>
      <section className='flex'>
      <div className='flex flex-col items-center justify-center w-6/12'>
      <h2 className='text-3xl text-center text-white'>Select the candidate and click the vote button</h2>
      <div className='flex m-5 items-center'>

        <p className='text-2xl dark:text-white'>Select ID</p>
      <select className='px-3 py-2 mx-2' onChange={handleVoting}>
        <option>1</option>
        <option>2</option>
      </select>
        <button className='bg-fuchsia-400 px-10 py-2 rounded text-xl dark:text-white'
        onClick={() => voteForCandidate(amount)}
        >Vote</button>
      </div>
      </div>
      <div className='w-6/12 flex flex-col items-center py-4 dark:text-white'>
        <h1 className='text-3xl text-white'>Addresses of People who submitted their votes</h1>
        {allVoters}
      </div>
      </section>
        </div>
    </main>
  )
}

export default Home