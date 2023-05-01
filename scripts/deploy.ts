import { ethers } from 'hardhat';

async function main() {
  const contractName = 'Chinazo'
  const contractSymbol = 'CHNZ'
  // const contractFactory = await ethers.getContractFactory('ERC20_Chinazo')
  const contractFactory = await ethers.getContractFactory('ERC721_Chinazo')

  // const contract = await contractFactory.deploy(contractName, contractSymbol, 18, 1)
  const contract = await contractFactory.deploy(contractName, contractSymbol, '0x00')
  await contract.deployed()
  console.log(`Contract '${contractName}' deployed to address:`, contract.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
