import React, {useState, useRef} from 'react'
import {MdDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md';


const Header = (props) => {

    const {darkMode, setDarkMode, getTodos, setTodo } = props
    const [inputText, setInputText] = useState('')

    const inputRef = useRef()


    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    const handleChange = (event) => {
        setInputText(event.target.value)
        console.log(event.target.value)
    }

    const handleTodos = () => {
        setTodo(inputText)
        inputRef.current.value = ""
    }


    return(
        <main>
        <nav className='flex justify-around items-center pb-3 bg-gradient-to-r from-indigo-600 to-blue-600 mb-5 pt-6 pb-7 '>
           <h1 className='text-center text-white text-3xl m-0 dark:text-white'>
            Decentralized To do List App
            </h1>
            {darkMode ? <MdDarkMode 
            className='text-white text-5xl cursor-pointer'
            onClick={toggleDarkMode}
            />
             :
             <MdOutlineLightMode 
             className='text-white text-5xl cursor-pointer' 
             onClick={toggleDarkMode}
             />      
        }
        </nav>
            <div className='flex justify-center'>
           <input 
           className=' bg-gradient-to-r from-cyan-800 to-cyan-400 py-3.5 w-6/12 pl-4 text-xl text-white outline-none sm:w-4/12'
           placeholder='Add Task...'
           onChange={handleChange}
           ref={inputRef}
           />
           <button 
           className='text-white px-5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:bg-gradient-to-l from-purple-600 to-teal-300 '
        //    onClick={saveToDoList}
            onClick={handleTodos}

           >Add Task</button>
           </div>   
           <div 
           className='flex items-center justify-center p-6'
           >
           <button
           className='text-white px-20 bg-gradient-to-r from-purple-600 to-cyan-500 hover:bg-gradient-to-l from-purple-600 to-teal-300 sm:px-64 py-4'
           onClick={getTodos}
           >
            Get Todos
           </button>
           </div>
           </main>  
    )
}

export default Header