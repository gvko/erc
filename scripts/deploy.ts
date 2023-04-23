import { ethers } from 'hardhat';

async function main() {
  const contractName = 'Chinazo'
  const contractFactory = await ethers.getContractFactory('ERC20_Chinazo')

  const contract = await contractFactory.deploy(contractName, 'CHNZ', 18, 1)
  await contract.deployed()
  console.log(`Contract '${contractName}' deployed to address:`, contract.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
