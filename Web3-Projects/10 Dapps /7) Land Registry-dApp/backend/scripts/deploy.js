// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

const main = async () => {
   
  const landRegistryContract = await ethers.getContractFactory('deployContract');

  const deployedLandRegistryContract = await landRegistryContract.deploy();

  await deployedLandRegistryContract.deployed();

  console.log("deployer Contract's Address", deployedLandRegistryContract.address);
}

// function invokation and error handling

main()
.catch((err) => {
  console.error(err);
  process.exitCode = 1;
})
