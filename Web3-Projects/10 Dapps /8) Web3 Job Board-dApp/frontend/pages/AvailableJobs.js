import React from "react";
import Job from "./Components/Job";
import Navbar from "./Components/navbar";
import { useGlobalContext } from "../Context/Context";

const AvailableJobs = () => {
  const { darkMode } = useGlobalContext();
  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar />
      <section className="dark:bg-[#10172a] h-screen p-5 sm:p-10 md:p-10 lg:px-60 lg:py-10">
        <Job />
      </section>
    </div>
  );
};

export default AvailableJobs;
