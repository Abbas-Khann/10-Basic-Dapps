import React from "react";
import { useGlobalContext } from "../../Context/Context";

const AddTransactions = () => {
    // passing in all the required states and functions from the context file using Global context
    const {darkMode, setInputText, inputText, transactionAmount, setTransactionAmount, setTransaction} = useGlobalContext();    

    // Taking the input value 
    const handleTransactionInput = (event) => {
        setInputText(event.target.value)
    }

    // Taking the amount value in an integer format
    const handleTransactionAmount = (event) => {
        setTransactionAmount(+event.target.value)
    }

    // The submit function to set the transaction on click
    const handleSubmit = () => {
        setTransaction(inputText, transactionAmount)
    }

    return(
        <div 
        >
            <h1 className="text-center font-bold border-b-2 border-b-gray-500 mb-2">
                Add New Transactions
            </h1>
            <div>
            <p className="text-lg mb-1">Transactions</p>
            <input 
            className={`bg-sky-200 w-72 rounded p-1 mb-1 text-black ${darkMode ? `text-black` : `text-white`}`}
            placeholder="Transaction Type?"
            name="text"
            type="text"
            onChange={handleTransactionInput}
            
            />
            <p className="text-lg mb-1">Amount (Negative for Spendings)</p>
            <input 
            className={`bg-sky-200 w-72 rounded p-1 mb-1 text-black ${darkMode ? `text-black` : `text-white`}`}
            placeholder="Amount Spent?"
            name="amount"
            type="number"
            onChange={handleTransactionAmount}
            
            />
            </div>
            <div className="flex items-center justify-center mb-3">
            <button 
            className="bg-purple-400 my-2 rounded py-1 px-14"
            onClick={handleSubmit}
            >
            Add Transaction
            </button>
            </div>

        </div>
    )
}

export default AddTransactions