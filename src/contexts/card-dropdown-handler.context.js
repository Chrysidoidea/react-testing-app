import {useState, createContext} from "react";

export const DropdownContext = createContext({
    isActive: false,
    setIsActive: () => null,
})


export const DropdownProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const value = {isActive, setIsActive};


    return (
        <DropdownContext.Provider value={value}>
            { children }
        </DropdownContext.Provider>
    )
}



