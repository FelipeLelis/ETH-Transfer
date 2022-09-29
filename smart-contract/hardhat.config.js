require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Pefw4DO6Wz8rpAMI01sco8pLpnhOt6Vy',
      accounts: ['e69e24bbaf4978a8549a0238f372347a32bb1b2d14530823fdb2666e9f797b00']
    }
  }
};