# PancakeSwap Token prices
 
This project serves as a user-friendly utility for converting the value of one cryptocurrency token to another by leveraging PancakeSwap's router contract. It streamlines the process by enabling users to input the quantity of a specific token, and in turn, receive the equivalent amount in another token upon executing the swap.

> This program does not make any transaction, only calculates the values from the router contract.

The real-world application of this program is to provide a simple tool for users to determine the conversion rate between two tokens on the PancakeSwap decentralized exchange platform. PancakeSwap is a popular decentralized exchange (DEX) that runs on the Binance Smart Chain, allowing users to swap tokens, provide liquidity, and participate in yield farming.

This program can be used by:

* Crypto traders and investors: Traders and investors who want to know the current value of one token in terms of another can use this tool to quickly check the conversion rate on PancakeSwap. This information can be helpful when deciding whether to swap tokens or invest in a particular pair.

* Developers: Developers building applications that involve token swapping or need to display token conversion rates can use this program as a starting point or reference. They can integrate the logic into their own applications or expand the functionality as needed.

* Educational purposes: This program can be used for learning and understanding how to interact with smart contracts on the Binance Smart Chain, specifically with the PancakeSwap router contract, and how to perform token conversions.

Overall, this program provides a simple and efficient way to check the conversion rate between two tokens on PancakeSwap, which can be useful for various stakeholders in the cryptocurrency ecosystem.

## Prerequisites
Ensure that you have Node.js (version 16.x or higher) installed on your system.

> [Install Node.js](https://nodejs.org/en/download)

## Installation

Clone the repository:

```sh
git clone https://github.com/soos3d/get-pancakeswap-prices-ethers.git
```

Change the current directory to the project folder:

```sh
cd pancake-swap-token-converter
```

Install the dependencies:

```sh
npm ci
```

> Note that this program requires a clean install (npm ci) as this uses ethers V5.7 specifically.

## Configuration

Edit the `.env.sample` file to include your BNB RPC endpoint and rename it `.env`.

```env
# Blockchain connection
BNB_ENDPOINT_URL="YOUR_NODE_URL"

# DEX Smart contracts 
PANCAKE_FACTORY="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
PANCAKE_ROUTER="0x10ED43C718714eb63d5aA57B78B54704E256024E"

# Tokens smart contracts
TOKEN_A="0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82" # CAKE
TOKEN_B="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" # BUSD
```

> The smart contracts are all configured here so you only need to make edits in one place.

Setup the `amountToCheck` variable in `index.js` with the amount of tokenA you want to convert.

```js
const amountToCheck = "500"; // Change this value as needed.
```

## Usage

Run the script from the console with:

```sh
node index
```

This will return the conversion:

```sh
500 PancakeSwap Token equals 1257.90199804741876842 of BUSD Token
```
