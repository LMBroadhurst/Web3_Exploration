## Setting up Hardhat in WSL
- Added Hardhat to WSL and installed fresh git/node

## Setting up Hardhat config
```
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
```

## Deciding to write my own tests for the Token.sol contract!
- Problem I've found with a lot of Web3 resources is that they just give you all the required code, no thinking for yourself.
- Need to write my own code and do it myself to get a good grasp of what is going on.

## Deploying Token.sol
- Address: 0x50917dFA9DEb547952C0E694c71f2824774ba0a7