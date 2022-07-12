// SPDX-License-Identifier: MIT

// We will write a voting smart contract where people can vote between two candidates

pragma solidity ^0.8.0;

contract Voting {
    
    struct Candidate {
        string name;
        uint256 votes_count;
    }

    uint public candidatesCount;
    address public voter;
    address[] public addressesArray;

    ///  mapping id => Candidate name and Vote count 


    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    constructor() {
        addCandidate("Orange Julius");
        // 0 => Orange Julius
        addCandidate("Stuttering Joe");
        // 1 => Stuttering Joe
    }
    
    function addCandidate(string memory _candidateName) private returns(uint id){
        uint256 _id = candidatesCount ;
        candidates[_id] = Candidate(_candidateName, 0);
        candidatesCount++ ;
        return _id ;
    }

    function vote(uint _id) public {
        // require(!voters[msg.sender], "You have already voted once!");
        require(_id >= 0 && _id <= candidatesCount);
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

    function countVote(uint256 id) public view returns(uint256 votes) {
        return candidates[id].votes_count;
    }

    function getCandidate(uint256 id) public view returns(string memory _name) {
        return candidates[id].name;
    }

}