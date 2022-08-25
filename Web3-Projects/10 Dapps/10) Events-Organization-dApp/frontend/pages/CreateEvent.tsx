import type { NextPage } from 'next'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useContract, useProvider, useSigner, useAccount } from 'wagmi'
import { abi, EVENT_CONTRACT_ADDRESS } from '../constants'

const CreateEvent: NextPage = () => {

  const provider = useProvider();
  const {data: signer} = useSigner();
  const eventContract = useContract({
    addressOrName: EVENT_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer || provider
  });

  const [event, setEventData] = useState<object>({
    name: "",
    location: "",
    date: 0,
    ticketPrice: 0,
    ticketsCount: 0
  });

  const [loading, setLoading] = useState<boolean>(false)

  function handleChange(e: any): void {
    setEventData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      };
    });
  };

  console.log(event)

  const addNewEvent = async(val: any): Promise<void> => {
    try {
      if(val.name &&
         val.location &&
         val.date &&
         val.ticketPrice &&
         val.ticketsCount
        )
        {
          const tx = await eventContract.createEvent(
            val.name,
            val.location,
            +val.date,
            +val.ticketPrice,
            +val.ticketsCount
          );
          setLoading(true);
          await tx.wait();
          setLoading(false);
        }
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className='bg-[#10172a] text-white'>
        <Navbar />
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-center my-4">Add a New Event</h1>
        </div>
        <div className='flex items-center justify-center'>
          <img src="https://img.icons8.com/external-others-sbts2018/100/000000/external-events-social-media-basic-1-others-sbts2018.png"/>
        </div>

        <div className="bg-sky-0 flex flex-col p-12 sm:py-4 sm:px-44 lg:px-72">
          <h1 className="text-xl ">
            Enter your event Name<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleChange}
            name="name"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none  dark:text-black bg-[#F1F6F9]"
            placeholder="Event name..."
          />
          <h1 className="text-xl ">
            Enter your event location<span className="text-red-400">*</span>
          </h1>
          <input
            onChange={handleChange}
            name="location"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Event Location..."
          />
          
          <h1 className="text-xl ">
            Enter the event starting date<span className="text-red-400">*</span>
          </h1>
          <input
            type="number"
            onChange={handleChange}
            name="date"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Starting date..."
          />
          
          <h1 className="text-xl ">
            Enter the ticket price of your event<span className="text-red-400">*</span>
          </h1>
          <input
            type="number"
            onChange={handleChange}
            name="ticketPrice"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Ticket Price...."
          />
          
          <h1 className="text-xl ">
            Enter the maximum amount of tickets in your event<span className="text-red-400">*</span>
          </h1>
          <input
            type="number"
            onChange={handleChange}
            name="ticketsCount"
            className="border-solid border-2 border-zinc-200 py-1 text-lg rounded px-2 my-4 active:border-sky-300 focus:border-sky-300 outline-none dark:text-black bg-[#F1F6F9]"
            placeholder="Tickets Count..."
          />
          <button
            className="hover:bg-sky-100 text-black rounded w-4/12 p-2 mx-auto md:2/12 bg-blue-200"
            onClick={() => addNewEvent(event)}
          >
            Submit
          </button>
        </div>
    </div>
  )
}

export default CreateEvent