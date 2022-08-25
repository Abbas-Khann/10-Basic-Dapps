const { ethers } = require("hardhat");

const main = async() => {
  const eventsContract = await ethers.getContractFactory("EventContract");

  const deployedEventsContract = await eventsContract.deploy();

  await deployedEventsContract.deployed();

  console.log("Events Contract Address: ",
   deployedEventsContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// address: 0x422529086ACB9C577d4979db15853311EcB33d51