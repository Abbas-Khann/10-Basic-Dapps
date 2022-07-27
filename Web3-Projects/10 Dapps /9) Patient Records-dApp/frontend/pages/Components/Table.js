import React, {useState} from 'react'
import { useContract, useProvider, useSigner } from 'wagmi'
import { HEALTHCARE_CONTRACT_ABI, HEALTHCARE_CONTRACT_ADDRESS } from '../../Constants/constants';

const Table = () => {

    const [tableData, setTableData] = useState('')
    const [adminAddress, setAdminAddress] = useState('')

    const provider = useProvider();
    const {data: signer} = useSigner();
    const contract = useContract({
        addressOrName: HEALTHCARE_CONTRACT_ADDRESS,
        contractInterface: HEALTHCARE_CONTRACT_ABI,
        signerOrProvider: signer || provider
    })

    const getPatientData = async () => {
        try{
            const getPatientInfo = contract.getPatientsInfo();
            await getPatientInfo;

            const resolvedArray = await getPatientInfo.then((promise) => promise);
            console.log(resolvedArray)

            let newArray = [];
            resolvedArray.forEach((element) => {
                newArray.push({
                    name: element.name,
                    age: element.age,
                    sex: element.sex,
                    location: element.location
                });
            });
            setTableData(newArray);
        }   
        catch(err){
            console.error(err)
        }
    }

    const getAdmin = async () => {
        try{
            const owner = contract.admin();
            await owner;
            owner.then((promise) => setAdminAddress(promise))
        }
        catch(err){
            console.error(err)
        }
    }

    console.log("adminAddress", adminAddress)
    console.log(tableData[0])



    React.useEffect(() => {
        getPatientData()
        getAdmin();
    }, [])

  return (
    <>
    {tableData[0] && ( 
        <table class='shadow-2xl border-2 border-cyan-200'>
        <thead class='text-white'>
            <tr>
                <th class='py-3 bg-cyan-800'>Patient Details</th>
            </tr>
            <tbody class='text-cyan-900 text-center flex'>
                <tr class='bg-cyan-200 cursor-pointer duration-300 flex flex-col'>
                    <td class='py-3 px-6 bg-cyan-100'>Name</td>
                    <td class='py-3 px-6 bg-cyan-200'>Age</td>
                    <td class='py-3 px-6 bg-cyan-300'>Sex</td>
                    <td class='py-3 px-6 bg-cyan-400'>Location</td>
                    <td class='py-3 px-6 bg-cyan-500'>Address</td>
                </tr>
                <tr class='bg-white flex flex-col '>
                    <td class="py-3 px-6 bg-cyan-100">{tableData[0].name}</td>
                    <td class="py-3 px-6 bg-cyan-200">{tableData[0].age.toString()}</td>
                    <td class="py-3 px-6 bg-cyan-300">{tableData[0].sex}</td>
                    <td class="py-3 px-6 bg-cyan-400">{tableData[0].location}</td>
                    <td class="py-3 px-6 bg-cyan-500">{adminAddress}</td>
                    </tr>
                    </tbody>
                    </thead>
                    
                    </table>
                
                )}
        </>
    )
}

export default Table