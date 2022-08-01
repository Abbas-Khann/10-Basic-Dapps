// SPDX-License-Identifier: Unlicense

/* Requirements for our Smart Contract
-> A job should consist of many properties and should be stored inside of a struct
-> We should be able to add new Jobs to the Job Board
-> We should be able to see all the available jobs 
*/
pragma solidity ^0.8.0;

contract JobBoard {
    uint256 public JOB_ID = 0;
    // Creating a Job Struct to take all the necessary properties
    struct Job {
        string title;
        string companyName;
        string description;
        string employmentType;
        string location;
        uint salary;
        string applyUrl;
        string contactEmail;
    }
    // creating an array of the struct
    Job[] public jobsArray;


    // Taking in the necessary parameters and pushing the struct to the array
    function addJob(
        string memory _title,
        string memory _companyName,
        string memory _description,
        string memory _employmentType,
        string memory _location,
        uint _salary,
        string memory _applyUrl,
        string memory _contactEmail
    )
    public {
        jobsArray.push(
            Job(
             _title,
            _companyName, 
            _description, 
            _employmentType, 
            _location, 
            _salary, 
            _applyUrl, 
            _contactEmail
            )
        );
    }

    // function to get the array above
    function getJobs() public view returns(Job[] memory) {
        return jobsArray;
    }

    // fetching the amount of jobs posted
    function getAllJobsLength() public view returns(uint) {
        return jobsArray.length;
    }

    function deleteJob(uint _index) public {
        jobsArray[_index] = jobsArray[jobsArray.length - 1];
        jobsArray.pop();
    }
}