export const HEALTHCARE_CONTRACT_ADDRESS = "0xED6Ebbc35D6f978fad5c2703C317f0b565f51944"

export const HEALTHCARE_CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_sex",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_docName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_docHash",
          "type": "string"
        }
      ],
      "name": "addToDocsArr",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
      "name": "deleteDocs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDocsInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "docName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "hash",
              "type": "string"
            }
          ],
          "internalType": "struct Healthcare.PatientDocument[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getId",
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
      "inputs": [],
      "name": "getPatientsInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "sex",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "docName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "hash",
                  "type": "string"
                }
              ],
              "internalType": "struct Healthcare.PatientDocument[]",
              "name": "docs",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct Healthcare.Patient[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_sex",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        }
      ],
      "name": "updatePatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]