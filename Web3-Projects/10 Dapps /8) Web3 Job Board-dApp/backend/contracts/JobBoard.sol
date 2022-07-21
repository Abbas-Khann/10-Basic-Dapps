// SPDX-License-Identifier: Unlicense

/* Requirements for our Smart Contract
-> A job should consist of many properties and should be stored inside of a struct
-> We should be able to add new Jobs to the Job Board
-> We should be able to see all the available jobs 
-> We should be able to see the amount of jobs posted
*/
pragma solidity ^ 0.8.0;

contract JobBoard {
    uint256 public JOB_ID = 0;
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

    Job[] public jobsArray;
    // mapping (uint => Job) public jobMap;

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

    function getJobs() public view returns(Job[] memory) {
        return jobsArray;
    }

    function getAllJobsLength() public view returns(uint) {
        return jobsArray.length;
    }

    function deleteJob(uint _index) public {
        jobsArray[_index] = jobsArray[jobsArray.length - 1];
        jobsArray.pop();
    }


}