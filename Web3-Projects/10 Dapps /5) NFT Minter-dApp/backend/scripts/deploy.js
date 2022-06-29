const { ethers } = require("hardhat");

const main = async () => {
    const nftContract = await ethers.getContractFactory('NFTee');

    const deployedNftContract = await nftContract.deploy();

    await deployedNftContract.deployed();

    console.log("NFT Contract Address",
        deployedNftContract.address
    );
}

// function invokation

main()
.then(() => process.exit(0))
.catch((err) => {
    console.error(err);
    process.exit(1)
});