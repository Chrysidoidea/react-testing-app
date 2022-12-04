import {createContext, useState} from "react";
import MERCH_DATA from '../merch/merch-data.json';


export const MerchContext = createContext({
    merch: [],
    setMerch: () => null,
});

export const MerchProvider = ({ children }) => {
    const [merch, setMerch] = useState(MERCH_DATA);
    const value = {merch, setMerch};

    // const  = JSON.stringify(MERCH_DATA)
    // console.log(lol)

    return (

            <MerchContext.Provider value={value}>
                    { children }
            </MerchContext.Provider>
    )
}