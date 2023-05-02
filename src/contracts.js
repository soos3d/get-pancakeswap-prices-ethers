// Import required libraries and configurations
const { provider } = require("./provider");
const { ethers } = require("ethers");
require("dotenv").config();

// Import contract ABIs
const { BEP20_ABI, PANCAKE_FACTORY_ABI, PANCAKE_ROUTER_ABI } = require("./abis");

// Define contract addresses from environment variables
const PANCAKE_FACTORY = process.env.PANCAKE_FACTORY;
const PANCAKE_ROUTER = process.env.PANCAKE_ROUTER;
const TOKEN_A = process.env.TOKEN_A;
const TOKEN_B = process.env.TOKEN_B;

// Instantiate contracts using ABIs and provider
const pancakeFactory = new ethers.Contract(PANCAKE_FACTORY, PANCAKE_FACTORY_ABI, provider);
const pancakeRouter = new ethers.Contract(PANCAKE_ROUTER, PANCAKE_ROUTER_ABI, provider);
const tokenA = new ethers.Contract(TOKEN_A, BEP20_ABI, provider);
const tokenB = new ethers.Contract(TOKEN_B, BEP20_ABI, provider);

// Uncomment the following lines to log contract instances for debugging purposes
// console.log(pancakeFactory);
// console.log(pancakeRouter);
// console.log(tokenA);
// console.log(tokenB);

// Export contract instances for use in other modules
module.exports = { pancakeFactory, pancakeRouter, tokenA, tokenB };
