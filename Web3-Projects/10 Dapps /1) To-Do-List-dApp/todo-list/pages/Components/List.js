import React from "react";
import {TiDeleteOutline} from 'react-icons/ti'
import {TiInputCheckedOutline} from 'react-icons/ti'

const List = (props) => {

    const {todo, deleteTodos, idx} = props

    const handleChecked = () => {
        alert('Are you sure you want to set this task as completed!!!')
        deleteTodos(idx)
    }

    const handleDelete = () => {
        alert('Are you sure you want to delete this task?')
        deleteTodos(idx)
    }

    return(
        <div className="my-4 flex flex-col justify-between items-center mt-7"
        >
            <p className="py-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl rounded px-3 sm: w-10/12 flex justify-between pb-3"
            >
            {todo} 
            <div className="flex items-center">
            <TiDeleteOutline
            onClick={handleDelete}
            className="text-3xl sm: text-5xl text-white cursor-pointer"
            />
            <TiInputCheckedOutline 
            onClick={handleChecked}
            className="text-3xl sm: text-5xl text-white cursor-pointer"/>
            </div>
            </p>
        </div>
    )
}

export default List