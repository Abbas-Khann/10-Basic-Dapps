import Link from "next/link";
import React from "react";
import Navbar from "./Components/navbar";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const {darkMode, toggleDarkMode} = useGlobalContext();

  return (
    <div className={`${darkMode && 'dark'}`}>
      <Navbar 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}
      />
      <section className="py-24 dark:bg-[#10172a] md:flex md:justify-around md:h-screen">
      <div className="flex flex-col p-8 md:w-4/12 ">
        <h1 className="text-2xl border-b-2 border-blue-400 w-52 dark:text-white md:text-4xl md:w-80 md:font-bold">Web3 Job Board</h1>
        <h1 className="text-2xl w-96 text-sky-600 py-2">For Job Seekers and Recruitors</h1>
        <p className="py-3 text-[#9CB4CC] ">This dApp helps applicants and Employers in finding talent and web3 related jobs</p>

        <div className="flex flex-col py-6 md:w-8/12">
          <Link href='/CreateNewJob'>
        <button className="bg-sky-300 hover:bg-sky-500 rounded-full p-2 mb-2 md:py-2">Create a New Job</button>
          </Link>
          <Link href='/AvailableJobs'>
        <button className="bg-[#c3e6f8] hover:bg-[#8fceed] rounded-full p-2">Available Jobs</button>
          </Link>
        </div>
      </div>
        <div className="flex justify-center md:w-4/12 md:h-3/5">
          <img src="https://img.icons8.com/dusk/350/000000/find-matching-job.png"/>
        </div>
      </section>
    </div>
  )
}

export default Home
