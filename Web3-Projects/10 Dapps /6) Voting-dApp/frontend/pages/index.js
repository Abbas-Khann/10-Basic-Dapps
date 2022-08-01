import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import { VOTING_DAPP_ADDRESS, VOTING_DAPP_ABI } from '../constants/constants';
import { useContract, useProvider, useSigner } from 'wagmi';

const Home = () => {

  const [darkMode, setDarkMode] = useState(true);
  // States
  const [amount, setAmount] = useState(0);
  const [votersAddresses, setVotersAddresses] = useState([]);
  const [firstCandidateName, setFirstCandidateName] = useState('')
  const [secondCandidateName, setSecondCandidateName] = useState('')
  const [firstCandidateVotes, setFirstCandidateVotes] = useState(0)
  const [secondCandidateVotes, setSecondCandidateVotes] = useState(1)

  // Providers and signers fetched from wagmi
  const provider = useProvider();
  const {data: signer } = useSigner();
  const contract = useContract({
    addressOrName: VOTING_DAPP_ADDRESS,
    contractInterface: VOTING_DAPP_ABI,
    signerOrProvider: signer || provider
  })

  // This will fetch the first Candidates Votes
  const getFirstCandidateVotes = async() => {
    try{
      const votes = await contract.countVote(0).then((vote) => {
        return parseInt(vote._hex);
      })
      setFirstCandidateVotes(votes);
    }
    catch(err) {
      console.error(err);
    }
  }

  // Fetching the second Candidates Votes
  const getSecondCandidateVotes = async() => {
    try{
      console.log("Getting Votes");
      // This will fetch the first index's votes
      const votes = await contract.countVote(1).then((vote) => {
        return parseInt(vote._hex)
      })
      setSecondCandidateVotes(votes);
    }
    catch(err) {
      console.error(err);
    }
  }

  // First Candidates Name fetched
  const getFirstCandidateName = async() => {
    try{
      const candidate = await contract.getCandidate(0);
      setFirstCandidateName(candidate)
    }
    catch(err){
      console.error(err) ;
    }
  }

  // Second Candidate Name fetched
  const getSecondCandidateName = async() => {
    try{
      const candidate = await contract.getCandidate(1);
      setSecondCandidateName(candidate)
    }
    catch(err){
      console.error(err) ;
    }
  }

  // This function uses signer and allows users to vote
  const voteForCandidate = async (id) => {
    try{

      const vote = await contract.vote(id);
      await vote.wait();
      getVotersAddresses()

    }
    catch(err){
      alert("You have already Voted Once!")
    }
  }

  // This will fetch all the addresses of voters
  const getVotersAddresses = async () => {
    try{
      const voters = await contract.getAddressesArray();

      setVotersAddresses(voters)
      console.log("voters", voters)
      // Fetch voters indices
      getFirstCandidateVotes(0);
      getSecondCandidateVotes(1);
    }
    catch(err) {
      console.error(err)
    }
  }

  // Mapping through the array
  const allVoters = votersAddresses.map((address) => {
    return <h1 className='text-xl py-1'>{address}</h1>
  })

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  // This will take values
  const handleVoting = (event) => {
    const getValue = event.target.value;
    const changeToInteger = parseInt(getValue - 1);
    setAmount(changeToInteger)
    console.log(amount)
  }

  useEffect(() => {
    getFirstCandidateVotes();
    getSecondCandidateVotes();
    getFirstCandidateName();
    getSecondCandidateName();
    getVotersAddresses();
  }, [])
  return (
    <main
    className={`${darkMode && 'dark'}  bg-[#516BEB] h-screen `}>
      <div
      className='dark:bg-[#10172a] h-screen'
      >
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <div className=''> 
      <h1 className=' text-center text-4xl font-bold text-gray-900 m-6 dark:text-white'>Candidates</h1>
      <div
      className='flex flex-col items-center justify-between max-w-4xl rounded mx-auto'
      >
     <table className='sm:w-8/12 w-6/12 text-sm	sm:text-xl'>
      <tbody className='flex items-center justify-around bg-white rounded m-4'>
        <td className='  p-2 ml-4'>#</td>
        <td className='mr-16 font-bold'>Candidates Name</td>
        <img src="https://img.icons8.com/ios/48/000000/name--v1.png"/>

        <td>Votes</td>
      </tbody>
     </table>
     {/* Here are the candidates */}
        <table className='sm:w-8/12 text-2xl'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className='  p-2'>1</td>
        <td className='mr-16 font-bold'>{firstCandidateName}</td>
        <img src="https://img.icons8.com/color/48/000000/donald-trump.png"/>
        <td className=' '>{firstCandidateVotes}</td>
      </tbody>
     </table>
     <table className='sm:w-8/12 text-2xl'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className=' p-2'>2</td>
        <td className='mr-16 font-bold'>{secondCandidateName}</td>
        <img src="https://img.icons8.com/color/48/000000/joe-biden.png"/>
        <td className=' '>{secondCandidateVotes}</td>
      </tbody>
     </table>
      </div>
      </div>
      <section className='flex py-10'>
      <div className='flex flex-col items-center justify-center w-6/12'>
      <h2 className='text-3xl text-center text-white'>Select the candidate and click the vote button</h2>
      <div className='flex m-5 items-center'>

        <p className='text-2xl dark:text-white'>Select ID</p>
      <select className='px-3 py-2 mx-2 rounded ' onChange={handleVoting}>
        <option>1</option>
        <option>2</option>
      </select>
        <button className='bg-gradient-to-l from-[#FDF6F0] to-[#867AE9] shadow-lg hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none px-10 py-2 rounded text-xl dark:text-white'
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