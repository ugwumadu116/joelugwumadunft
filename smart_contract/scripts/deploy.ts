import { ethers } from "hardhat";

async function main() {
  

  const Collection = await ethers.getContractFactory("Collection");
  const collection = await Collection.deploy();

  await collection.deployed();

  console.log(`Collection is deployed to ${collection.address}`);

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


/*

opensea is deployed here https://testnets.opensea.io/collection/joelugwumadunft

Collection is deployed to 0x8F139994A2DDF272Ff05C84BF15945cbD4e70970 for rinkeby

*/