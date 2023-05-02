const { ethers } = require('ethers');
require('dotenv').config()

// Node url
const BNB_ENDPOINT = process.env.BNB_ENDPOINT_URL

// Create a provide instance
const provider = new ethers.providers.JsonRpcProvider(BNB_ENDPOINT);

module.exports = { provider } 