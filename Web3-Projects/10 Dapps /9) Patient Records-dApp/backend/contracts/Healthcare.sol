// SPDX-License-Identifier: MIT

/*
-> struct consisting of pateint's info that includes
-> id, name, age, gender, string array of documents so that we push it to ipfs
-> an array where we can upload our files to ipfs with the file name
*/
pragma solidity ^0.8.9;

contract Healthcare {

    address public admin;
    uint public patient_ID = 0;

    struct Patient {
        string name;
        uint age;
        string sex;
        string location;
        string[] docs;
        string[] docsD;
    }

    mapping(address => Patient) public patients;
    address[] patientList;
    string[] patientNameList;
    
    constructor () {
        admin = msg.sender;
    }

    function addPatient(
        string memory _name,
        uint _age,
        string memory _sex,
        string memory _location
    )
    public
    {
        patients[msg.sender].name = _name;
        patients[msg.sender].age = _age;
        patients[msg.sender].sex = _sex;
        patients[msg.sender].location = _location;
        patientList.push(msg.sender);
        patientNameList.push(_name);
        patient_ID++;
    }

    function getPatientsInfo() public view returns(string[] memory, address[] memory) {
        return (patientNameList, patientList);
    }

    function getPatientDetails(address _addr) public view returns(
        string memory,
        uint,
        string memory,
        string memory,
        string[] memory,
        string[] memory
    )
    {
        return(patients[_addr].name,
        patients[_addr].age,
        patients[_addr].sex,
        patients[_addr].location,
        patients[_addr].docs,
        patients[_addr].docsD
        );
    }


    function uploadDocumuments(address patient_addr, string memory _name, string memory _hash) public {
        patients[patient_addr].docs.push(_name);
        patients[patient_addr].docsD.push(_hash);
    }

    
}