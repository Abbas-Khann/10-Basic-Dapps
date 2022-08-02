import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { useContract, useSigner, useProvider } from "wagmi";
import {
  deployerContractABI,
  deployerContractAddress,
} from "../Constants/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  // Fetching necessary hooks from Wagmi
  const provider = useProvider();
  const { data: signer } = useSigner();
  const deployerContract = useContract({
    addressOrName: deployerContractAddress,
    contractInterface: deployerContractABI,
    signerOrProvider: signer || provider,
  });

  // LandData state which consists of all the properties
  const [landData, setLandData] = useState({
    country: "",
    city: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  console.log(landData);

  function handleLandData(e) {
    setLandData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  //----------------------------------------------------------------
  //CONTRACT INTERACTION

  const registerData = async (val) => {
    try {
      // If all the values exist then the function below will be used to create a new Land
      if (
        val.country &&
        val.city &&
        val.address &&
        val.latitude &&
        val.longitude
      ) {
        // This will create a new contract and will consist of all the required values
        const createNewLandContract = await deployerContract.create(
          val.country,
          val.city,
          val.address,
          val.latitude,
          val.longitude
        );
        await createNewLandContract.wait();
        console.log("Transaction details", createNewLandContract);
        fetchAllContracts();
        getNewlyDeployedContractAddress();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getNewlyDeployedContractAddress = async () => {
    try {
      // We will get the newly deployed contract address and copy it to clipboard
      const deployedContractAddress =
        deployerContract.getDeployedContractAddress();
      await deployedContractAddress;
      console.log("Address here :", deployedContractAddress);
      // deployedContractAddress.then((promise) => navigator.clipboard.writeText(promise))

      const copyAddress = await deployedContractAddress.then(
        (promise) => promise
      );
      navigator.clipboard.writeText(copyAddress);
      toast.success("Address Copied to Clipboard");
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllContracts = async () => {
    try {
      // This will fetch all the contract addresses inside of an array
      const allDeployedContracts = deployerContract.getContractAddresses();
      await allDeployedContracts;
      console.log("All addresses", allDeployedContracts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllContracts();
  });

  //----------------------------------------------------------------
  return (
    <div className="bg-[#10172a] h-screen">
      <Navbar />
      <h1 className="text-2xl m-4 text-center sm:text-2xl md:text-3xl">
        Register your Land details
      </h1>
      <div className="flex items-center justify-center w-8/12 mx-auto">
        <div className="">
          <h1 className="sm:text-2xl md:text-3xl m-1">Country</h1>
          <h1 className="sm:text-2xl md:text-3xl m-1">City</h1>
          <h1 className="sm:text-2xl md:text-3xl m-1">Address</h1>
          <h1 className="sm:text-2xl md:text-3xl m-1">Location Latitude</h1>
          <h1 className="sm:text-2xl md:text-3xl m-1">Location Longitude</h1>
        </div>
        <div className="flex flex-col w-11/12 items-end ">
          <input
            onChange={handleLandData}
            name="country"
            className="rounded w-5/12 sm:w-3/12 md:w-3/12 m-2 py-2 px-1 text-black"
            placeholder="country..."
          />
          <input
            onChange={handleLandData}
            name="city"
            className="rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black"
            placeholder="city..."
          />
          <input
            onChange={handleLandData}
            name="address"
            className="rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black"
            placeholder="address..."
          />
          <input
            onChange={handleLandData}
            name="latitude"
            className="rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black"
            placeholder="latitude..."
          />
          <input
            onChange={handleLandData}
            name="longitude"
            className="rounded w-5/12 sm:w-4/12 md:w-3/12 m-2 py-2 px-1 text-black"
            placeholder="longitude..."
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => registerData(landData)}
          className="bg-blue-400 text-2xl rounded px-4 mt-2 py-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
