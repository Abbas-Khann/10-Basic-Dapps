import React from "react";
import { FaTrash } from 'react-icons/fa'

const BlogCard = (props) => {

    const{ title, typeOf ,description, deleteBlogPosts, index, imgUrl } = props

    
    const handleDeleteBlogsFunction = () => {
        deleteBlogPosts(index)
    }

    console.log("index idx", index)
    console.log(title)
    console.log("Chutiya Image", imgUrl)

    return(
        
        <div
        className="bg-cyan-900 bg-white dark:bg-white dark:text-black w-11/12 m-6 mx-auto flex flex-col rounded py-2 px-3  sm:max-w-sm sm:mx-3 sm:mx-auto"
        >
        <div
        className="flex justify-end mb-4"
        >
        
        <FaTrash 
        className="text-red-500 text-2xl cursor-pointer"
        onClick={handleDeleteBlogsFunction}
        />
        </div>
        <img src={imgUrl}
        className="w-full border-2 border-sky-300 h-72 object-cover"
        />
        
        <h1
        className="mt-5 mb-3 text-xl"
        >{title}</h1>
        <p
        className="mb-4"
        >{description}</p>
        <div
        
        >
        <span
        className="bg-blue-500 text-white text-xl bold rounded inline px-2 mb-2"
        >
        {typeOf}
        </span>   
        <hr />
        </div>    
        </div>
    )
}

export default BlogCard