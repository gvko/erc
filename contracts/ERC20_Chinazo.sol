// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20_Chinazo is ERC20 {
  uint8 private _decimals;

  constructor(string memory name_, string memory symbol_, uint8 decimals_, uint256 initialSupply) ERC20(name_, symbol_) {
    _decimals = decimals_;
    _mint(msg.sender, initialSupply);
  }

  function decimals() public view override returns (uint8) {
    return _decimals;
  }
}
