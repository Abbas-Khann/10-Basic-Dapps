//  SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./Ownable.sol";

contract LandRegistry is Owner {
    
    string private country;
    string private city;
    string private landAddress;
    string private latitude;
    string private longitude;
    
    constructor(string memory _country, string memory _city, string memory _landAddress, string memory _latitude, string memory _longitude)
    {
        country = _country;
        city = _city;
        landAddress = _landAddress;
        latitude = _latitude;
        longitude = _longitude;
    }
    
    function getCountry() public view returns(string memory){
        return country;
    }
    
    function getCity() public view returns(string memory){
        return city;
    }
    
    function getLandAddress() public view returns(string memory){
        return landAddress;
    }
    
    function getLatitude() public view returns(string memory){
        return latitude;
    }
    
    function getLongitude() public view returns(string memory){
        return longitude;
    }
}

contract deployContract {
    LandRegistry[] public allContractsArray;

    function create(string memory _country, string memory _city, string memory _landAddress, string memory _latitude, string memory _longitude) public {
        LandRegistry land_registry = new LandRegistry(_country, _city, _landAddress, _latitude, _longitude);
        allContractsArray.push(land_registry);
    }

    function getContractAddresses() public view returns(LandRegistry[] memory) {
        return allContractsArray;
    }

    function getDeployedContractAddress() public view returns(address) {
        return address(allContractsArray[allContractsArray.length - 1]);
    }
}
