import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config()

const {
    ALCHEMY_API_URL_ETH,
    ALCHEMY_API_URL_POLYGON,
    WALLET_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    defaultNetwork: 'mumbai',
    networks: {
        hardhat: {},
        sepolia: {
            url: ALCHEMY_API_URL_ETH,
            accounts: [`0x${WALLET_PRIVATE_KEY}`],
        },
        mumbai: {
            url: ALCHEMY_API_URL_POLYGON,
            accounts: [`0x${WALLET_PRIVATE_KEY}`],
        },
    },
};

export default config;
