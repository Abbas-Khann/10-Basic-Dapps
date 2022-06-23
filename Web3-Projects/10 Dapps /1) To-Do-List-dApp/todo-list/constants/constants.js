export const TODO_CONTRACT_ADDRESS = "0x597F0CF37CEbadC602988fC83D855c119c12f3D5"
export const TO_DO_CONTRACT_ABI = [
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_index",
              "type": "uint256"
          }
      ],
      "name": "deleteToDo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getTodo",
      "outputs": [
          {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getTodosLength",
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
              "internalType": "string",
              "name": "_todo",
              "type": "string"
          }
      ],
      "name": "setTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "todos",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]

