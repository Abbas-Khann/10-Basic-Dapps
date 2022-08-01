import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Components/navbar";
import { useGlobalContext } from "../Context/Context";
import { useSigner, useProvider, useContract } from "wagmi";
import {
  JOB_BOARD_CONTRACT_ADDRESS,
  JOB_BOARD_CONTRACT_ABI,
} from "../Constants/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNewJob = () => {
  const { darkMode } = useGlobalContext();
  // JobData state
  const [jobData, setJobData] = useState({
    title: "",
    CompanyName: "",
    JobDescription: "",
    EmploymentType: "",
    JobLocation: "",
    SalaryRange: 0,
    OrganisationUrl: "",
    ContactEmail: "",
  });

  const handleInputData = (event) => {
    setJobData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  console.log(jobData);

  // fetching the necessary hooks from wagmi
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: JOB_BOARD_CONTRACT_ADDRESS,
    contractInterface: JOB_BOARD_CONTRACT_ABI,
    signerOrProvider: signer || provider,
  });

  // function to add a new job
  const addNewJob = async (val) => {
    try {
      // if all of these values are provided then add the jobs
      if (
        val.title &&
        val.CompanyName &&
        val.JobDescription &&
        val.EmploymentType &&
        val.JobLocation &&
        val.SalaryRange &&
        val.OrganisationUrl &&
        val.ContactEmail
      ) {
        // passing in the values
        const addJobs = await contract.addJob(
          val.title,
          val.CompanyName,
          val.JobDescription,
          val.EmploymentType,
          val.JobLocation,
          +val.SalaryRange,
          val.OrganisationUrl,
          val.ContactEmail
        );
        await addJobs.wait();
        toast.success("New Job Created!!!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className={`${darkMode && "dark"}`}>
      <Navbar />
      <section className="dark:bg-[#10172a] dark:text-white">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-center my-4">Add a New Job</h1>
          <Image
            width={40}
            height={40}
            alt="icon"
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-recruiter-recruitment-agency-flaticons-flat-flat-icons-4.png"
          />
        </div>

        <div className="bg-sky-0 flex flex-col p-12 sm:py-4 sm:px-44 lg:px-72">
          <h1 className="text-xl ">
            Enter your Job title<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="title"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none  dark:text-black bg-[#F1F6F9]"
            placeholder="Job title..."
          />
          <h1 className="text-xl ">
            Enter your Company Name<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="CompanyName"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Company Name..."
          />
          <h1 className="text-xl ">
            Enter the Job Description and requirements
            <span className="text-red-400">*</span>
          </h1>
          <textarea
            onChange={handleInputData}
            name="JobDescription"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Job title..."
          />
          <h1 className="text-xl ">
            Enter the Employment Type<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="EmploymentType"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Part Time, full time etc..."
          />
          <h1 className="text-xl ">
            Enter your Job Location<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="JobLocation"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Location..."
          />
          <h1 className="text-xl ">
            Enter the Salary Range<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            type="number"
            name="SalaryRange"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Salary...."
          />
          <h1 className="text-xl ">
            Enter your Organization Url<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="OrganisationUrl"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Website etc..."
          />
          <h1 className="text-xl ">
            Enter your Contact Email<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleInputData}
            name="ContactEmail"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Company Email..."
          />
          <button
            onClick={() => addNewJob(jobData)}
            className="hover:bg-sky-100 text-black rounded w-4/12 p-2 mx-auto md:2/12 bg-blue-200"
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
};

export default CreateNewJob;
