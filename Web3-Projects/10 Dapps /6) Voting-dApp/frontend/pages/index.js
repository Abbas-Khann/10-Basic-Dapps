import React, {useState} from 'react'
import Navbar from './Components/Navbar'


const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }


  
  return (
    <main
    className={`${darkMode && 'dark'} bg-gradient-to-l from-sky-500 to-emerald-200 h-screen`}>
      <div
      className='dark:bg-[#10172a] h-screen'
      >
      <Navbar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <h1 className='text-4xl text-center bg-gradient-to-l from-indigo-500 to-indigo-700 text-white mt-4 p-4 rounded w-2/12 mx-auto'>Candidates</h1>
      <div
      className='flex flex-col items-center justify-between m-4 max-w-4xl rounded mx-auto'
      >
     <table className='w-8/12'>
      <tbody className='flex items-center justify-around bg-white rounded m-4'>
        <td className=' text-2xl p-2 ml-4'>ID</td>
        <td className='mr-16 text-2xl'>Name</td>
        <img src="https://img.icons8.com/ios/48/000000/name--v1.png"/>

        <td className=' text-2xl'>Votes</td>
      </tbody>
     </table>
     <table className='w-8/12'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className=' text-2xl p-2'>1</td>
        <td className='mr-16 text-2xl'>Orange Julius</td>
        <img src="https://img.icons8.com/color/48/000000/donald-trump.png"/>
        <td className=' text-2xl'>1</td>
      </tbody>
     </table>
     <table className='w-8/12'>
      <tbody className='flex items-center justify-evenly bg-white rounded m-4'>
        <td className=' text-2xl p-2'>2</td>
        <td className='mr-16 text-2xl'>Stuttering Joe</td>
        <img src="https://img.icons8.com/color/48/000000/joe-biden.png"/>
        <td className=' text-2xl'>2</td>
      </tbody>
     </table>
      </div>
      <section className='flex'>
      <div className='flex flex-col items-center justify-center w-6/12'>
      <h2 className='text-3xl text-center text-white'>Select the candidate and click the vote button</h2>
      <div className='flex m-5 items-center'>

        <p className='text-2xl dark:text-white'>Select ID</p>
      <select className='px-3 py-2 mx-2'>
        <option>1</option>
        <option>2</option>
      </select>
        <button className='bg-fuchsia-400 px-10 py-2 rounded text-xl dark:text-white'>Vote</button>
      </div>
      <div className='w-6/12 flex flex-col items-center py-4 dark:text-white'>
       <h2 className='text-3xl text-center text-white py-2'>Find the leading Candidate</h2>
       <button className='bg-gradient-to-l from-rose-300 to-pink-500 px-6 py-2 rounded text-xl py-2'>Leading Candidate</button>
       <p className='text-xl py-2'>Name: Orange Julius</p>
       <p className='text-xl py-2'>Votes: 2</p>
      </div>
      </div>
      <div className='w-6/12 flex flex-col items-center py-4 dark:text-white'>
        <h1 className='text-3xl text-white'>Addresses of People who submitted their votes</h1>
        <h1 className='text-xl py-1'>0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</h1>
        <h1 className='text-xl py-1'>0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</h1>
      </div>
      </section>
        </div>
    </main>
  )
}

export default Home