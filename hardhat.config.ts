import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config()

const {
  ETHEREUM_NODE_API_URL,
  POLYGON_NODE_API_URL,
  WALLET_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {},
    sepolia: {
      url: ETHEREUM_NODE_API_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
    mumbai: {
      url: POLYGON_NODE_API_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
};

export default config;
