import React, { useState } from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import {
  HEALTHCARE_CONTRACT_ABI,
  HEALTHCARE_CONTRACT_ADDRESS,
} from "../../Constants/constants";

const Table = () => {
  // States here
  const [tableData, setTableData] = useState("");
  const [adminAddress, setAdminAddress] = useState("");

  // Setting up the the provider and signer from wagmi 
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: HEALTHCARE_CONTRACT_ADDRESS,
    contractInterface: HEALTHCARE_CONTRACT_ABI,
    signerOrProvider: signer || provider,
  });

  const getPatientData = async () => {
    try {
      // fetching the getPatinetInfo function which consists of the patient data submitted to the contract
      const getPatientInfo = contract.getPatientsInfo();
      await getPatientInfo;
      const resolvedArray = await getPatientInfo.then((promise) => promise);
      console.log(resolvedArray);
      // Pushing the elements to the newArray on looping each time
      let newArray = [];
      resolvedArray.forEach((element) => {
        newArray.push({
          name: element.name,
          age: element.age,
          sex: element.sex,
          location: element.location,
        });
      });
      // setting the tableData to the newArray
      setTableData(newArray);
      getAdmin();
    } catch (err) {
      console.error(err);
    }
  };

  const getAdmin = async () => {
    try {
      // Fetching the admin state variable which shows the deployer of the contract
      const owner = contract.admin();
      await owner;
      owner.then((promise) => setAdminAddress(promise));
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    getPatientData();
  }, []);

  return (
    <>
    {/* rendering the data */}
      {tableData[0] && (
        <table class="shadow-2xl border-2 border-cyan-200">
          <thead class="text-white">
            <tr>
              <th class="py-3 bg-cyan-800">Patient Details</th>
            </tr>
            <tbody class="text-cyan-900 text-center flex">
              <tr class="bg-cyan-200 cursor-pointer duration-300 flex flex-col">
                <td class="py-3 px-6 bg-cyan-100">Name</td>
                <td class="py-3 px-6 bg-cyan-200">Age</td>
                <td class="py-3 px-6 bg-cyan-300">Sex</td>
                <td class="py-3 px-6 bg-cyan-400">Location</td>
                <td class="py-3 px-6 bg-cyan-500">Address</td>
              </tr>
              <tr class="bg-white flex flex-col ">
                <td class="py-3 px-6 bg-cyan-100">{tableData[0].name}</td>
                <td class="py-3 px-6 bg-cyan-200">
                  {tableData[0].age.toString()}
                </td>
                <td class="py-3 px-6 bg-cyan-300">{tableData[0].sex}</td>
                <td class="py-3 px-6 bg-cyan-400">{tableData[0].location}</td>
                <td class="py-3 px-6 bg-cyan-500">{adminAddress}</td>
              </tr>
            </tbody>
          </thead>
        </table>
      )}
    </>
  );
};

export default Table;
