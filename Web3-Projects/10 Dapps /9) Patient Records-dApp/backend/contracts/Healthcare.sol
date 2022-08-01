// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Healthcare {

    address public admin;
    uint internal patient_ID = 0;
   
    struct Patient {
        uint id;
        address addr;
        string name;
        uint age;
        string sex;
        string location;
        PatientDocument[] docs;
    }
    
    struct PatientDocument{
        string docName;
        string hash;
    }
    
    mapping(address => Patient) internal patientToAdd;
    mapping(address => uint) internal patientMap;
    mapping(address => bool) internal hasRegistered;

    Patient[] internal patientArray;

    constructor () {
        admin = msg.sender;
    }

    function addPatient(
     string memory _name,
     uint _age,
     string memory _sex,
     string memory _location
    ) 
    external
    {
    require(
    hasRegistered[msg.sender] == false,
    "You are already Registered!");
     patientToAdd[msg.sender].addr = msg.sender;
     patientToAdd[msg.sender].name = _name;
     patientToAdd[msg.sender].age = _age;
     patientToAdd[msg.sender].sex = _sex;
     patientToAdd[msg.sender].location = _location;
     patientArray.push(patientToAdd[msg.sender]);
     patientMap[msg.sender] = patient_ID;
     hasRegistered[msg.sender] = true;
     patient_ID++;
    }

    function addToDocsArr(
        string memory _docName,
        string memory _docHash
        ) external {
        require(hasRegistered[msg.sender] == true,"Register First Or Cant Add other's File");
        patientArray[patientMap[msg.sender]].docs.push(PatientDocument(_docName , _docHash));
    }   

    function deleteDocs(uint _index) external {
        require(msg.sender == patientArray[patientMap[msg.sender]].addr , "You can't delete another patient's file");
        patientArray[patientMap[msg.sender]].docs[_index] = patientArray[patientMap[msg.sender]].docs[patientArray[patientMap[msg.sender]].docs.length -1];
        patientArray[patientMap[msg.sender]].docs.pop();
    }    
   
    function getPatientsInfo() public view returns(Patient[] memory) {
        return patientArray;
    }

    function getDocsInfo() public view returns(PatientDocument[] memory) {
        return patientArray[patientMap[msg.sender]].docs;
    }

    function getId() public view returns(uint) {
        require(hasRegistered[msg.sender] == true, "You need to register first!");
        return patientArray[patientMap[msg.sender]].id;
    }
    
}
