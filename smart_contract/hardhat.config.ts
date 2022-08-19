import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()

// Collection is deployed to 0x275312D806331437cBE8C89a9B05C8c2E5300056
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.alkamy_HTTP_URL,
      accounts: [process.env.alkamy_HTTP_URL]
    },
    rinkeby: {
      url: process.env.infura_HTTP_URL,
      accounts: [process.env.alkamy_HTTP_URL]
    }
    
  }
};

export default config;
