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
    </div>
  )
}

export default Home
