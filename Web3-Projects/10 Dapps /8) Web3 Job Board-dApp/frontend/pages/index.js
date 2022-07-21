import React,{useState} from "react";
import Navbar from "./Components/navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <section className="py-24">
      <div className="flex flex-col p-8">
        <h1 className="text-2xl border-b-2 border-blue-400 w-52">Web3 Job Board</h1>
        <h1 className="text-2xl w-96 text-sky-600 py-2">For Job Seekers and Recruitors</h1>
        <p className="py-3 text-[#9CB4CC] ">This dApp helps applicants and Employers in finding talent and web3 related jobs</p>

        <div className="flex flex-col py-4">
        <button className="bg-sky-300 rounded p-2">Create a New Job</button>
        <button className="bg-grey-500 rounded">Available Jobs</button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Home
