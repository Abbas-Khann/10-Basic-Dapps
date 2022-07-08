const { ethers } = require("hardhat");

async function main() {
  
  const votingContract = await ethers.getContractFactory("Voting");
  
  const deployedVotingContract = await votingContract.deploy();

  await deployedVotingContract.deployed();

  console.log("Voting Contract Address",
   deployedVotingContract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
