// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Expense_Tracker {
    
    // first off we will create a struct which will consist of our transaction_text and our amount
    struct Transaction{
        string text;
        int amount; // the reason why we used int instead of uint is because we want to avoid type conversion later on and we need both positive and negative numbers
    }

    Transaction[] public transactionArray; // Let's set up the struct to a public array

    function addTransaction(string memory _text, int  _amount) public { // 2 parameters to write data to the blockchain
        transactionArray.push(Transaction(_text, _amount)); // we're gonna push the struct with the two parameters
    }

    function getTransaction() view public returns(Transaction[] memory) { 
        return transactionArray; // in order to get it we will return the transactionArray in the get function 
    } 

    function deleteTransactions(uint _index) public { // in order to delete them we will take an index as a parameters
        transactionArray[_index] = transactionArray[transactionArray.length - 1]; // the index of the array will be equal to the array's length and - 1
        transactionArray.pop(); // then we're gonna remove 1 from the index
    }

    // Here we are getting the length of the transactions
    function getTransactionsLength() view public returns(uint) { 
        return transactionArray.length;
    }

}