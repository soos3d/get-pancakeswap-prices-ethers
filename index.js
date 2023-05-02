const { ethers } = require('ethers');
const { pancakeRouter, tokenA, tokenB } = require('./src/contracts');

/**
 * Retrieves the value of tokenA in terms of tokenB.
 * @param {string} amount - The amount of tokenA to convert.
 * @returns {Promise<string>} - The value of the specified amount of tokenA in tokenB.
 */
async function getValue(amount) {
    const decimalsTokenA = await tokenA.decimals();
    const amountIn = ethers.utils.parseUnits(amount, decimalsTokenA).toString();

    const amountsOut = await pancakeRouter.getAmountsOut(amountIn, [tokenA.address, tokenB.address]);
    const decimalsTokenB = await tokenB.decimals();
    const amountOutEther = ethers.utils.formatUnits(amountsOut[1].toString(), decimalsTokenB);

    return amountOutEther;
}

/**
 * Main function to convert and display the value of tokenA in terms of tokenB.
 */
async function main() {
    const tokenAName = await tokenA.name();
    const tokenBName = await tokenB.name();

    const amountToCheck = "1";
    const value = await getValue(amountToCheck);

    console.log(`${amountToCheck} ${tokenAName} is equivalent to ${value} ${tokenBName}`);
}

main();
