import { ethers } from "hardhat";

async function main() {
  
    const CONTRACTADDRESS = '0x275312D806331437cBE8C89a9B05C8c2E5300056';
    const CONTRACTADDRESSRINKEBY = '0x8F139994A2DDF272Ff05C84BF15945cbD4e70970';
    const Collections = await ethers.getContractAt('ICollection', CONTRACTADDRESSRINKEBY);
    const collections = await Collections.mint("https://gateway.pinata.cloud/ipfs/QmdhJsEhPBS6b7Vo4JdN6jDPRxd5yAZRrAcRVeePJ1KEx3");
    console.log("yes you have minted", collections)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


