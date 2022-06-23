const { ethers } = require("hardhat");
// require("dotenv").config({ path: ".env" });

async function main() {
  const todoContract = await ethers.getContractFactory("Todos");

  // deploy the contract
  const deployedTodoContract = await todoContract.deploy();

  await deployedTodoContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Todo List Contract Address:",
    deployedTodoContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});