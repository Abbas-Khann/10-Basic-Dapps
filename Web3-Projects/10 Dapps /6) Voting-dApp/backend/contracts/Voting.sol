// SPDX-License-Identifier: MIT

// We will write a voting smart contract where people can vote between two candidates

/*
    --> Requirements 
    1. We should have a struct to store the Candidate's name, id and votes_count
    2. We should have another struct to store the Candidate with Lead which should have the name and votes_count property
    3. We need to set up two candidates in our constructor initially through add function
    4. We should have a candidates count function to get the count of the candidates
    5. voting function where people can vote based off of the id of the candidate
    6. Leading Candidate function to get the candidate with most votes and the name of the candidate
    7. Candidates shouldn't be able to vote for themselves
    8. people shouldn't be able to vote more than once

*/

pragma solidity ^0.8.0;

contract Voting {
    
    struct Candidate {
        string name;
        uint256 id;
        uint256 votes_count;
    }

    struct LeadingCandidate {
        string name;
        uint maximumVotes;
    }

    LeadingCandidate public leading_candidate;

    uint public candidatesCount;
    address public voter;
    address[] public addressesArray;
    mapping(uint => Candidate) public candidates;    // let object = { number: Candidate }
    mapping(address => bool) public voters;

    constructor() {
        addCandidate("Orange Julius");
        addCandidate("Stuttering Joe");
    }
    
    function addCandidate(string memory _candidateName) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(_candidateName, candidatesCount, 0);
    }

    // add payable functionality afterwards
    function vote(uint _id) public payable {
        require(msg.value > 0.0000001 ether, "You don't have enough in your wallet to vote for your favorite Leader");
        require(!voters[msg.sender], "You have already voted once!");
        require(_id > 0 && _id <= candidatesCount);
        voters[msg.sender] = true;
        candidates[_id].votes_count++; 
        voter = msg.sender;
        addressesArray.push(voter); 
    }

    function getAddressesArray() public view returns(address[] memory) {
        return addressesArray;
    }

    function getAddressesArrayLength() public view returns(uint) {
        return addressesArray.length;
    }

    function leader() public {
        uint256 maxVotes = 0;
        string memory _name = "";
        for(uint i = 0; i < 50; i++) {
            if(maxVotes < candidates[i].votes_count) {
                maxVotes = candidates[i].votes_count;
                _name = candidates[i].name;
            }
        }
        leading_candidate = LeadingCandidate(_name, maxVotes);
    }

}