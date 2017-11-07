pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract WakuWakuCoin is MintableToken {
  string public name = "WAKWAKU COIN";
  string public symbol = "WAK";
  uint256 public decimals = 18;
}
