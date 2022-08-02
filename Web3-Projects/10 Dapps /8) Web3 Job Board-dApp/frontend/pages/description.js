import React, { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import { useGlobalContext } from "../Context/Context";
import {
  JOB_BOARD_CONTRACT_ADDRESS,
  JOB_BOARD_CONTRACT_ABI,
} from "../Constants/constants";
import { useProvider, useSigner, useContract } from "wagmi";

const description = () => {
  const { darkMode, indexData } = useGlobalContext();
  const [descriptionData, setDescriptionData] = useState([]);
  
  // fetching the necessary hooks from wagmi
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: JOB_BOARD_CONTRACT_ADDRESS,
    contractInterface: JOB_BOARD_CONTRACT_ABI,
    signerOrProvider: signer || provider,
  });

  const getAllJobs = async () => {
    try {
      // fetching the jobs that were added using the getJobs function 
      const getJobsArr = contract.getJobs();
      await getJobsArr;

      const resolvedArray = await getJobsArr.then((promise) => promise);
      // Cleaning up 
      let desArr = [];
      resolvedArray.forEach((item) => {
        desArr.push({
          title: item.title,
          companyName: item.companyName,
          description: item.description,
          employmentType: item.employmentType,
          location: item.location,
          salary: item.salary,
          applyUrl: item.applyUrl,
          contactEmail: item.contactEmail,
        });
      });
      // setting up the descriptionData state to the array that received all the values
      setDescriptionData(desArr);
    } catch (err) {
      console.error(err);
    }
  };

  // Calling the function on page load
  useEffect(() => {
    getAllJobs();
  }, []);

  console.log("idx", descriptionData[indexData]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar />
      {descriptionData[indexData] && (
        <section className="p-8 dark:bg-[#10172a] dark:text-white sm:p-20 lg:p-24 ">
          <div>
            <div className="flex flex-col items-center h-48">
              <p className="text-2xl">
                {descriptionData[indexData].companyName} is hiring a
              </p>
              <p className="text-2xl font-bold md:text-3xl">
                {descriptionData[indexData].title}
              </p>
              <p className="text-base mt-8 md:text-lg">
                Compensation {descriptionData[indexData].salary.toString()}k
              </p>
              <p className="mt-4 md:text-xl">
                {descriptionData[indexData].location}
              </p>
            </div>

            <p className="md:px-8 lg:px-12">
              {descriptionData[indexData].description}
            </p>

            <div className="mt-4 md:px-8 lg:px-12">
              <p className="text-lg">Contact us at</p>
              <p className="text-lg">
                {descriptionData[indexData].contactEmail}
              </p>
              <p className="text-lg">Official Website</p>
              <p className="text-blue-400 text-lg">
                {descriptionData[indexData].applyUrl}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default description;
