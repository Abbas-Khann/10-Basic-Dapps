const { ethers } = require('hardhat')

const main = async() => {

    const vendingMachineContract = await ethers.getContractFactory("Vending_Machine");
    // Here we deploy the contract
    const vendingMachineContractDeployed = await vendingMachineContract.deploy();
    // Waiting for finishing the contract deployment
    await vendingMachineContractDeployed.deployed();

    // logging the contract address to the console
    console.log(
        "Contract Address",
        vendingMachineContractDeployed.address,
    );

}
    // function invokation and error handling in the lines below
main()
 .then(() => process.exit(0))
 .catch((err) => {
     console.error(err);
     process.exit(1);
 })
