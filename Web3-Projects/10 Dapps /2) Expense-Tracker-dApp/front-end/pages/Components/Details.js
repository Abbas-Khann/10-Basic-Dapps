import React from "react";
import { useGlobalContext } from "../../Context/Context";


const Details = (props) => {

    const {amount, text, index} = props
    const {deleteTransaction} = useGlobalContext()

    // deleting the transaction on the particular index
    const handleDeleteTransaction = () => {
        deleteTransaction(index)
    }
         return (
             <div 
             key={index}
             className="flex items-center w-56"
             >
            <div className="flex justify-between"
            >
            <section className="bg-green-400 flex justify-between rounded my-1 p-1 w-52 ">
            <span className="text-sm">
                {text}
            </span>
            <span className="text-sm">
                {amount}
            </span >
            </section>
            </div>
            <span
            
            >        
            <img 
            className="w-5 h-full cursor-pointer bg-zinc-100"
            alt="delete"
            onClick={handleDeleteTransaction}
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/44/undefined/external-cross-essentials-tanah-basah-basic-outline-tanah-basah.png"/>
            </span>
            </div>
        )
    }

export default Details
