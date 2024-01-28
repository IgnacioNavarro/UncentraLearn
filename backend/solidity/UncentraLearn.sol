
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
}

contract UncentraLearn{

    constructor(address _UCL) {
        token = IERC20(_UCL); 
        owner = msg.sender;
    }

    IERC20 public token;
    address public owner;

    mapping (string => uint[2]) public hashToValues;
    mapping (string => address) public hashToUser;

    function add_content(string calldata hash, uint price, uint royalty ) public {
        hashToValues[hash]=[price,royalty];
        hashToUser[hash]=msg.sender;
    }

    function get_content_info(string calldata hash) public view returns(uint, uint) {     
        uint[2] memory values = hashToValues[hash];
        return (values[0], values[1]);
    }

    function get_creator(string calldata hash) public view returns(address){
        return(hashToUser[hash]);
    }

    function retrieve_tokens() public{
        address deployer = owner;
        assembly {
           if iszero(eq(caller(), deployer)) {
                revert(3, 3)
            }
        }
        uint balance = token.balanceOf(owner);
        token.transfer(owner, balance);
    }
}