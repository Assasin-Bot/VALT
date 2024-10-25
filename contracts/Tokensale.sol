// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

uint256 constant INITIAL_TOKEN_PRICE = 1;
address constant MAINNET_USDT = 0x55d398326f99059fF775485246999027B3197955;
address constant MAINNET_VALT = 0x9C904076C2D96641507b211EE3e499872713dD29; // VALT TOKEN ADDRESS

contract Valtsale {
    uint256 public totalCap;

    address public owner;

    IERC20 usdt = IERC20(MAINNET_USDT); // USDT contract address
    IERC20 valt = IERC20(MAINNET_VALT);

    mapping (address => uint256) private balances;
    receive() external payable {}

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        totalCap = 0;
    }

    function buyTokenWithUSDT(uint256 _usdtAmount) public  {
        uint256 tokenAmount = _usdtAmount / INITIAL_TOKEN_PRICE;

        require(usdt.balanceOf(msg.sender) >= tokenAmount, "Insufficient USDT balance");

        totalCap = totalCap + tokenAmount;
        usdt.transferFrom(msg.sender, address(this), _usdtAmount);
        valt.transfer(msg.sender, tokenAmount);

        balances[msg.sender] += tokenAmount;
    }

    function getBalance () public view returns(uint256) {
        return balances[msg.sender];
    }

    function withdrawRemainingTokens() public onlyOwner {
        uint256 balance = valt.balanceOf(address(this));
        require(balance > 0, "No tokens left to withdraw");
        valt.transfer(owner, balance);
    }

    function withdrawUSDT(address _to) public onlyOwner {
        uint256 balance = usdt.balanceOf(address(this));
        require(balance > 0, "No USDT left to withdraw");
        usdt.transfer(_to, balance);
    }
}