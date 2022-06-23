import React from "react";
import { useGlobalContext } from "../../Context/Context";
import Details from './Details'

const History = () => {
    const {transactionList} = useGlobalContext()
    return(
        <div 
        className="w-9/12"
        >
            <h1
            className="border-b-2 border-b-gray-500 text-center font-bold"
            >History</h1>
            
            <div className="flex flex-col"
            
            >
                {transactionList.map((transaction, index) => { // mapping and rendering a details component
                    return <Details text={transaction.text} amount={transaction.transactionAmount} index={index} />
                })}
                
            </div>

        </div>
    )

}

export default History