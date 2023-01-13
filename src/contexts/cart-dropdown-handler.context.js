import {useState, createContext, useEffect} from "react";

export const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

        return cartItems.map((cartItem) => {
            return cartItem.id === productToRemove.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
        });

};

export const deleteHandler = (cartItems, cardId) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== cardId.id
    });

}

export const DropdownContext = createContext({
    isActive: false,
    setIsActive: () => null,
    cartItems: [],
    setCartItems: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const DropdownProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
             const newCartCount = cartItems.reduce(
                 (accumulator, currentItem) => accumulator + currentItem.quantity,
                 0
             );
             setCartCount(newCartCount)
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (accumulator, currentItem) => accumulator + currentItem.quantity * currentItem.price,
            0
        );
        setCartTotal(newCartTotal)
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const removeItemFromCard = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const deleteElement = (cartId) => {
        setCartItems(deleteHandler(cartItems, cartId));
    }

    const value = {
        isActive,
        setIsActive,
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCard,
        deleteElement,
        cartCount,
        cartTotal
    };

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    )
}



