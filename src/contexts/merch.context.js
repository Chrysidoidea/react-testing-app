import {createContext, useState} from "react";
import MERCH_DATA from '../components/shop/shop-data.json';

export const MerchContext = createContext({
    merch: [],
    setMerch: () => null,
});

export const MerchProvider = ({children}) => {
    const [merch, setMerch] = useState(MERCH_DATA);
    const value = {merch, setMerch};

    return (

        <MerchContext.Provider value={value}>
            {children}
        </MerchContext.Provider>
    )
}