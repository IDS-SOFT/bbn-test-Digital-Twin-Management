//SPDX-License-Identifier:GPL-3.0

pragma solidity ^0.8.0;

contract DigitalTwinManagement {
    // Define variables
    address public owner;
    string public twinName;
    string public twinDescription;
    uint public twinValue;

    // Define events
    event TwinCreated(address indexed user, string indexed twinName, uint indexed twinValue);
    event TwinUpdated(address indexed user, string indexed twinName, uint indexed twinValue);
    event TwinDeleted(address indexed user);

    // Constructor function
    constructor() {
        owner = msg.sender;
        twinName = "";
        twinDescription = "";
        twinValue = 0;
    }

    // Function to create twin
    function createTwin(string memory _twinName, string memory _twinDescription, uint _twinValue) public {
        require(msg.sender == owner, "Only owner can create twin");
        twinName = _twinName;
        twinDescription = _twinDescription;
        twinValue = _twinValue;
        emit TwinCreated(msg.sender, twinName, twinValue);
    }

    // Function to update twin
    function updateTwin(string memory _twinName, string memory _twinDescription, uint _twinValue) public {
        require(msg.sender == owner, "Only owner can update twin");
        twinName = _twinName;
        twinDescription = _twinDescription;
        twinValue = _twinValue;
        emit TwinUpdated(msg.sender, twinName, twinValue);
    }

    // Function to delete twin
    function deleteTwin() public {
        require(msg.sender == owner, "Only owner can delete twin");
        twinName = "";
        twinDescription = "";
        twinValue = 0;
        emit TwinDeleted(msg.sender);
    }
}
