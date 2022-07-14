import React from "react"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"

const Home = () => {
  return (
    <main className="bg-[#10172a]">
      <Navbar />
      <Search />
      <div className="flex flex-col items-center">
      <img src="https://img.icons8.com/external-filled-outline-berkahicon/512/000000/external-property-real-estate-property-filled-outline-berkahicon.png"/>
      </div>
    </main>    
  )
}

export default Home