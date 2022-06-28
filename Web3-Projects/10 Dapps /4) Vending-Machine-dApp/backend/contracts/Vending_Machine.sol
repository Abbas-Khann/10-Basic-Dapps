// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Vending_Machine {
    // Two state variables
    address public owner;
    mapping (address => uint) public donutBalance;

    // setting up the states inside the constructor function 

    constructor() {
        // msg.sender will set the owner as the contract deployer
        // and the initial value of the donutBalance will be set to 100;
        owner = msg.sender;
        donutBalance[address(this)] = 100;
    }

    // Let's get the donutBalance via a function 
    function getDonutBalances() view public returns(uint) {
        return donutBalance[address(this)];
    }

    // Let's get the amount of donuts your address owns via this function
    // takes user address as the input 
    //   returns the donuts owned by the user  
    function getOwnedDonuts(address user) view external returns(uint){
        return donutBalance[user] ;
    }

    // This function will restock the vending machine and we have made sure
    // only the owner of the contract can call this function by using a require statement
    function restock(uint _amount) public {
        require(msg.sender == owner, "Only the owner of the vending Machine can restock");
        donutBalance[address(this)] += _amount; // incrementing from the input amount to restock
    }

    // The vending machine should also have the ability to purchase so that's what we'll do in the next function
    function purchase(uint _amount) public payable {
        require(msg.value >= _amount * 0.001 ether, "You should have at least 0.001 eth to buy a donut"); // running a check to see if the user has enough eth
        require(donutBalance[address(this)] >= _amount, "Not enough donuts in the machine to proceed with the purchase");
        donutBalance[address(this)] -= _amount; // decrementing from the buyer's address
        donutBalance[msg.sender] += _amount; // incrementing here
    }

}