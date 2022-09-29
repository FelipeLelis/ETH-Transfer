const hre = require("hardhat");

const main = async () => {
  const TransactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transanctionsContract = await TransactionsFactory.deploy();

  await transanctionsContract.deployed();

  console.log(
    `Transactions with 1 ETH deployed to ${transanctionsContract.address}`
  );
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
