import React,{useState, useContext, createContext} from "react";

export const IndexContext = createContext();

const IndexProvider= ( {children} ) => {

    
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    
    return(
        <IndexContext.Provider value={ {toggleDarkMode, darkMode} }>
        {children}
        </IndexContext.Provider>
)

}

export const useGlobalContext = () => {
    return useContext(IndexContext)
}

export { IndexProvider }