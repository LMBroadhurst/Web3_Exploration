require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "l7rgKHQx4x5_ugxmGipeWPHqjq43uB2l";

const GOERLI_PRIVATE_KEY = "c369dae839cfff1a3624d969c063cca51c88fd833a1df47aa180c8737c9fc0f9";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};