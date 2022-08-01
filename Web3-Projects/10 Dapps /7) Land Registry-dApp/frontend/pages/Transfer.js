import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { landContractABI } from "../Constants/constants";
import { useContract, useProvider, useSigner } from "wagmi";
import { toast } from "react-toastify";

const Transfer = () => {
  // States here
  const [addressInput, setAddressInput] = useState("");
  const [newOwnerAddress, setNewOwnerAddress] = useState("");
  const [currOwner, setCurrOwner] = useState("");

  // Importing necessary hooks from wagmi
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: addressInput,
    contractInterface: landContractABI,
    signerOrProvider: signer || provider,
  });

  const changeOwner = async (newAddress) => {
    try {
      // We will fetch the change owner function and pass in the new Address
      const changeLandOwner = await contract.changeOwner(newAddress);
      await changeLandOwner.wait();
      toast.success("Owner Changed Successfully!")
    } catch (err) {
      console.error(err);
    }
  };

  const getOwner = async () => {
    try {
      // We will fetch the owner
      const owner = await contract.getOwner();
      await owner;
      // The current owner will be set to the owner
      setCurrOwner(owner);
    } catch (err) {
      console.error(err);
    }
  };

  // Taking the value of the address state
  const handleFirstAddress = (e) => {
    setAddressInput(e.target.value);
  };

  const handleSecondInput = (e) => {
    setNewOwnerAddress(e.target.value);
  };
  // This is for testing purposes
  React.useEffect(() => {
    getOwner();
  }, []);

  return (
    <div className="bg-[#10172a] h-screen">
      <Navbar />
      <h1 className="text-2xl text-center m-4 sm:text-2xl md:text-3xl">
        Transfer Ownership
      </h1>
      <div className="flex items-center justify-center w-8/12 mx-auto">
        <div className="">
          <h1 className="sm:text-2xl md:text-3xl m-1">
            Enter Contract Address
          </h1>
          <h1 className="sm:text-2xl md:text-3xl">New Owner Address</h1>
        </div>
        <div className="flex flex-col w-9/12 items-center">
          <input
            onChange={handleFirstAddress}
            className="rounded w-8/12 m-2 py-2 text-black"
          />
          <input
            onChange={handleSecondInput}
            className="rounded w-8/12 m-2 py-2 text-black"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => changeOwner(newOwnerAddress)}
          className="bg-blue-400 text-2xl rounded px-4 py-2 mt-12"
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Transfer;
