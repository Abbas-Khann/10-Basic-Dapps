import React from "react";
import { useGlobalContext } from "../../Context/Context";

const Balance = () => {

    const {transactionList} = useGlobalContext();

    const initialValue = 0;
    const amount = transactionList.map((transaction) => {
            return transaction.transactionAmount
    })
    console.log("amount", amount)

    // reduce is a function used on Arrays ,, It reduces all the values of a array into a single value for this, it takes two arguments  , 
    //1st-- accumulator (it  is a number in which all the numbers are going to accumulate  
    //and 2nd-- is the value of each item that is going to be accumulated into the accumulator , 
    //it is somewhat similar to the for Loop (In for loop we use (let i = 0 )as a accumulator))  
    const totalAmount = amount.reduce((acc, item) => (acc += item), initialValue).toFixed(2);
    console.log("totalAmount", totalAmount)


    const totalIncome = amount.filter(item => item > 0).reduce((acc, val) => (acc += val), initialValue)
  
    const totalExpenses = (amount.filter(item => item < 0).reduce((acc, val) => (acc += val), initialValue) * -1).toFixed(2)
    return(
          <div
          className="flex flex-col items-center w-full"
          >
          <h1 className='text-xl p-2 text-purple-500 text-bold'>
            Expense Tracker
          </h1>
          <h1 className='py-0 text-base'>
            Your Balance
          </h1>
          <small
          className='text-xl'
          >
          ${totalAmount}
          </small>
  
          <div className='flex items-center justify-center my-4 pb-3 border-2 border-rounded border-black-500 rounded'>
            <div className='mx-6'>
            <p className='text-base '>Income </p>
            <p className='text-center text-green-500'>
                ${totalIncome}
            </p>
            </div>
            <div className='mx-6'>
            <p className='text-base'>Expense </p>
            <p className='text-center text-red-500'>
                ${totalExpenses}
            </p>
            </div>
          </div>
          </div>
      )
  }
  
  export default Balance