export const JOB_BOARD_CONTRACT_ADDRESS = "0xBFcC9b29490B2Ee2eFF0CCBE96D85b00d3c2a22A";

export const JOB_BOARD_CONTRACT_ABI = [
    {
      "inputs": [],
      "name": "JOB_ID",
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
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_employmentType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_location",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_salary",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_applyUrl",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contactEmail",
          "type": "string"
        }
      ],
      "name": "addJob",
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
      "name": "deleteJob",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllJobsLength",
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
      "name": "getJobs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "companyName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "employmentType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "salary",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "applyUrl",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactEmail",
              "type": "string"
            }
          ],
          "internalType": "struct JobBoard.Job[]",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "jobsArray",
      "outputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "employmentType",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "salary",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "applyUrl",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "contactEmail",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]