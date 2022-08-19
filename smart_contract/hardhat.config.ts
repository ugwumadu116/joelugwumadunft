import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()

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
