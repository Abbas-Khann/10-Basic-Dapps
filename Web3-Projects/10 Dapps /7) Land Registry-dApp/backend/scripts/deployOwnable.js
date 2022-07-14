// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

const main = async () => {
   
  const ownableContract = await ethers.getContractFactory('Ownable');

  const deployedOwnableContract = await ownableContract.deploy();

  await deployedOwnableContract.deployed();

  console.log("Ownable Contract address", deployedOwnableContract.address);
}

// function invokation and error handling

main()
.catch((err) => {
  console.error(err);
  process.exitCode = 1;
})
