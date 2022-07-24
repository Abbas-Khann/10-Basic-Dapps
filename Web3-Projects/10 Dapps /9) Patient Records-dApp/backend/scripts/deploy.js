const { ethers } = require("hardhat");

const main = async () => {
  
  const healthcareContract = await ethers.getContractFactory("Healthcare");
  
  const deployedHealthcareContract = await healthcareContract.deploy();

  await deployedHealthcareContract.deployed();

  console.log(deployedHealthcareContract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
