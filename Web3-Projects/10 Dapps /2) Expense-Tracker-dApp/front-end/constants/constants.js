export const EXPENSE_TRACKER_CONTRACT_ADDRESS = "0xa6aB919427d4B66571F76F1F40831efA4Ab9F0E6"
export const EXPENSE_TRACKER_CONTRACT_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_text",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "_amount",
          "type": "int256"
        }
      ],
      "name": "addTransaction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "deleteTransactions",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransaction",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "amount",
              "type": "int256"
            }
          ],
          "internalType": "struct Expense_Tracker.Transaction[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransactionsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transactionArray",
      "outputs": [
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "amount",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]