const { ethers } = require("hardhat")

const main =  async () => {
  const jobBoardContract = await ethers.getContractFactory("JobBoard");
  
  const deployedJobBoardContract = await jobBoardContract.deploy();

  await deployedJobBoardContract.deployed();

  console.log("JobBoard Contract :", deployedJobBoardContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
