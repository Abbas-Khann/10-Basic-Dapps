import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../../Context/Context';
import { useSigner, useContract, useProvider } from 'wagmi';
import { JOB_BOARD_CONTRACT_ADDRESS, JOB_BOARD_CONTRACT_ABI } from '../../Constants/constants';

const AllJobs = () => {
  const {darkMode} = useGlobalContext();
  const [job, setJob] = useState([]);
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleType, setRoleType] = useState('');
  const [roleLocation, setRoleLocation] = useState('');
  const [estimatedSalary, setEstimatedSalary] = useState(0)

  const provider = useProvider();
  const {data: signer} = useSigner();
  const contract = useContract( {
    addressOrName: JOB_BOARD_CONTRACT_ADDRESS,
    contractInterface: JOB_BOARD_CONTRACT_ABI,
    signerOrProvider: signer || provider
  });

  const getAllJobs = async () => {
    try{
      const getJobsArr = contract.getJobs();
      await getJobsArr;
      getJobsArr.then((promise) => setJob(promise))
      console.log("Job State: ", job)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getAllJobs()
  }, [])

  return (
    <div className={`${darkMode && 'dark'}`}> 
    {job.map((job) => {
      return <>
    <div className='flex flex-col justify-center p-6 bg-[#ebeef9] rounded dark:bg-[#222b44] dark:text-white my-4 '>
        <h1 className='text-2xl'>{job.title}</h1>
          <span className='text-[#83bdf6] text-xl'>at {job.companyName}</span>
          <div className='text-base flex justify-between lg:flex lg:justify-start'>
        <span className='bg-gray-300 rounded p-1 dark:text-black'>{job.employmentType}</span>
        <span className='bg-gray-300 rounded p-1 dark:text-black lg:mx-8'>{job.location}</span>
        <span className='bg-gray-300 rounded p-1 dark:text-black'>{job.salary.toString()}k</span>
          </div>
          <Link href='/description'>
          <a className='m-1 text-xl cursor-pointer text-blue-500 hover:text-blue-400 active:text-violet-300'>Job Description...</a>
          </Link>
    </div>
      </>
    })}
    
    </div>
  )
}

export default AllJobs