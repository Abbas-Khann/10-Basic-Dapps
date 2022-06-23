const { ethers } = require("hardhat");

const main = async () => {

    // A contract factory in ethers is an abstraction used to deploy new smart contracts,
    // so ExpenseTrackerContract here is a factory of instances of our Expense_Tracker contract.
    const ExpenseTrackerContract = await ethers.getContractFactory('Expense_Tracker');
    
    // deployment of the contract using the .deploy() method
    const deployedExpenseTrackerContract = await ExpenseTrackerContract.deploy();

    // waiting for deployment to be finished
    await deployedExpenseTrackerContract.deployed();

    // Print the address of the deployed contract
    console.log(
        "ExpenseTracker Contract Address",
        deployedExpenseTrackerContract.address
    );

}

// invokation of the main function and checking for errors in the code below
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})