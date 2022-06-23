const { ethers } = require("hardhat")

const main = async () => {
    
    const blogContract = await ethers.getContractFactory("Blog");

    const deployedBlogContract = await blogContract.deploy();

    await deployedBlogContract.deployed()

    console.log(
        "Contract Address",
         deployedBlogContract.address
    )

}
main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});
