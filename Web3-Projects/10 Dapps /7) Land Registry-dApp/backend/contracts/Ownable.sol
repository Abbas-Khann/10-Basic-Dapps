// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";

/**
 * @title Owner
 * @dev Set & change owner
 */ 
contract Owner {

    address private owner;
    address private previousOwner;
    
    // event for EVM logging
    event OwnerSet(address indexed _previousOwner, address indexed newOwner);
    
    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public {
        emit OwnerSet(owner, newOwner);
        previousOwner = owner;
        owner = newOwner;

    }

    /**
     * @dev Return owner address 
     * @return address of owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }

    function getPreviousOwner() external view returns (address) {
        return previousOwner;
    }
}